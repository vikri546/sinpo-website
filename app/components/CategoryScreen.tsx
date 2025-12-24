"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { User, Clock, RefreshCw, AlertCircle } from 'lucide-react';
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import { getBerita } from '../services/api';
import { NewsItem } from '../types/api';
import { 
  formatRelativeTime, 
  getImageUrl, 
  formatAuthorName, 
  formatCategoryName,
  safeArray,
  stripHtml,
  truncateText
} from '../utils/helpers';

interface CategoryScreenProps {
  categoryId?: string | number;
  onNavigateToHome?: () => void;
  onNavigateToCategory?: () => void;
  onNavigateToDetail?: (id: string | number) => void;
}

const CategoryScreen = ({ 
  categoryId, 
  onNavigateToHome, 
  onNavigateToCategory, 
  onNavigateToDetail 
}: CategoryScreenProps) => {
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [popularNews, setPopularNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async (pageNum: number = 1, isLoadMore: boolean = false) => {
    if (isLoadMore) setLoadingMore(true);
    else setLoading(true);
    
    setError(null);
    try {
      const limit = 10;
      const [headlineRes, latestRes, popularRes] = await Promise.allSettled([
        pageNum === 1 ? getBerita.headline({ kategori: categoryId, limit: 1 }) : Promise.resolve({ data: [] } as any),
        getBerita.list({ kategori: categoryId, page: pageNum, limit }),
        pageNum === 1 ? getBerita.populer({ kategori: categoryId, limit: 10 }) : Promise.resolve({ data: [] } as any)
      ]);

      if (pageNum === 1) {
        if (headlineRes.status === 'fulfilled') {
            setHeadline(safeArray<NewsItem>(headlineRes.value.data)[0] || null);
        }
        if (latestRes.status === 'fulfilled') {
            setLatestNews(safeArray<NewsItem>(latestRes.value.data));
            const fetchedCount = safeArray(latestRes.value.data).length;
            setHasMore(fetchedCount >= limit);
        }
        if (popularRes.status === 'fulfilled') {
            setPopularNews(safeArray<NewsItem>(popularRes.value.data));
        }

        if (latestRes.status === 'rejected') {
            throw latestRes.reason;
        }
      } else {
        if (latestRes.status === 'fulfilled') {
            const newData = safeArray<NewsItem>(latestRes.value.data);
            setLatestNews(prev => [...prev, ...newData]);
            setHasMore(newData.length >= limit);
        } else {
            throw latestRes.reason;
        }
      }

    } catch (err: any) {
      console.error("Failed to fetch category data:", err);
      const msg = err.message || "";
      if (msg.includes("Load failed") || msg.includes("Failed to fetch")) {
        setError("Koneksi gagal. Periksa koneksi internet Anda atau domain API.");
      } else {
        setError("Gagal memuat data. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }

  }, [categoryId]);

  useEffect(() => {
    setPage(1);
    fetchData(1);
  }, [categoryId, fetchData]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, true);
  };

  if (loading && page === 1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D91B1B]"></div>
        <p className="text-sm font-medium text-gray-500 animate-pulse">Memuat indeks berita...</p>
      </div>
    );
  }

  if (error && page === 1) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] p-4 text-center">
        <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oops! Gagal Memuat Data</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">{error}</p>
        <button 
          onClick={() => fetchData(1)}
          className="flex items-center gap-2 bg-[#D91B1B] text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
        >
          <RefreshCw size={18} />
          Coba Lagi
        </button>
      </div>
    );
  }

  // Helper for displaying side stories (first few latest news)
  const sideStories = latestNews.slice(0, 4);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-black dark:text-white transition-colors duration-300">
      <HeaderSection 
        onNavigateToHome={onNavigateToHome!} 
        onNavigateToCategory={onNavigateToCategory!} 
        onNavigateToGallery={() => {}} // TODO: implement
      />
      
      {/* ================= HERO SECTION (FULL SCREEN) ================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
        
        {/* BACKGROUND IMAGE (FULL SCREEN DESKTOP) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={getImageUrl(headline?.image || headline?.cover || sideStories[0]?.image || sideStories[0]?.cover)} 
            alt="Main Story" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            loading="lazy"
            onError={(e) => { 
                console.error("Image load failed:", headline?.image || headline?.cover);
                e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
        </div>

        {/* KIRI: Berita Utama */}
        <div className="relative z-10 lg:w-[65%] w-full p-8 lg:p-24 flex flex-col justify-end min-h-[60vh] lg:min-h-screen order-1 lg:order-1">
          <div className="mt-10 lg:mt-0 max-w-4xl text-white -translate-y-26 cursor-pointer" onClick={() => (headline || sideStories[0]) && onNavigateToDetail?.((headline || sideStories[0])!.id)}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden border-2 border-gray-400 flex items-center justify-center">
                 <User size={24} className="text-white" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-200">
                {formatAuthorName((headline || sideStories[0])?.author?.name)}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-none mb-8 tracking-tight shadow-black drop-shadow-lg line-clamp-3">
              {(headline || sideStories[0])?.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 drop-shadow-md line-clamp-3">
              {truncateText((headline || sideStories[0])?.summary, 200)}
            </p>
            <div className="inline-block bg-[#D91B1B] hover:bg-red-700 transition-colors text-white font-bold text-sm px-6 py-3 uppercase tracking-wide rounded-sm shadow-lg">
              {formatRelativeTime((headline || sideStories[0])?.published_at || (headline || sideStories[0])?.created_at)}
            </div>
          </div>
        </div>

        {/* KANAN: Sidebar List */}
        <div className="relative z-20 lg:w-[35%] w-full flex flex-col justify-center min-h-[40vh] lg:min-h-screen order-2 lg:order-2">
          <div className="bg-white dark:bg-[#0a0a0a] lg:bg-black/50 lg:backdrop-blur-sm 
                h-[60vh] w-full 
                border-y lg:border border-gray-100 dark:border-gray-800 rounded-lg lg:-ml-40 transition-colors duration-300">
            <div className="p-8 lg:p-12 space-y-8 overflow-y-auto max-h-screen custom-scrollbar h-full flex flex-col justify-center">
              {sideStories.map((story) => (
                <div key={story.id} className="group flex items-center space-x-6 cursor-pointer" onClick={() => onNavigateToDetail?.(story.id)}>
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-800 transition-all duration-300 shadow-md">
                      <img 
                        src={getImageUrl(story.image || story.cover)} 
                        alt={story.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 lg:grayscale lg:group-hover:grayscale-0"
                        loading="lazy"
                        onError={(e) => { 
                          console.error("Image load failed:", story.image || story.cover);
                          e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm lg:text-[15px] font-bold uppercase leading-tight text-black dark:text-white lg:text-gray-100 group-hover:text-[#D91B1B] transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium tracking-wide">
                      {formatRelativeTime(story.published_at || story.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ================= LATEST NEWS SECTION ================= */}
      <section className="bg-white dark:bg-[#0A0A0A] text-black dark:text-white pb-20 transition-colors duration-300 pt-20">
        <div className="container mx-auto px-4 border-t border-gray-200 dark:border-gray-800 pt-10">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: News Feed (70%) */}
            <div className="lg:w-8/12 w-full">
               <div className="flex items-center mb-10">
                <h2 className="text-3xl font-black uppercase tracking-tight mr-6">BERITA TERBARU</h2>
                <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
              </div>

              <div className="flex flex-col space-y-8">
                {latestNews.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 dark:border-gray-800 last:border-0 pb-8 last:pb-0" onClick={() => onNavigateToDetail?.(item.id)}>
                    {/* Thumbnail Image */}
                    <div className="md:w-5/12 w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-xs shrink-0 bg-gray-100 dark:bg-gray-800">
                       <img 
                        src={getImageUrl(item.image || item.cover)} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => { 
                          console.error("Image load failed:", item.image || item.cover);
                          e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center">
                       {/* Meta Header */}
                       <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center shrink-0">
                             <User size={14} className="text-gray-500" />
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center text-xs text-gray-500 dark:text-gray-400 font-medium">
                            <span className="font-bold text-black dark:text-white uppercase mr-2">{formatAuthorName(item.author?.name)}</span>
                            <span className="hidden md:inline text-gray-300 dark:text-gray-600 mr-2">|</span>
                            <span>{formatRelativeTime(item.published_at || item.created_at)}</span>
                          </div>
                       </div>
                       {/* Title */}
                       <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight group-hover:text-[#D91B1B] transition-colors">
                         {item.title}
                       </h3>
                       <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 line-clamp-2">
                         {truncateText(item.summary || item.content, 150)}
                       </p>
                    </div>
                  </div>
                ))}

                {/* Button Load More */}
                {hasMore && (
                  <button 
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="w-full py-4 bg-white dark:bg-[#1a1a1a] border border-black dark:border-gray-600 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white font-bold uppercase tracking-widest text-sm transition-colors rounded-sm mt-4 shadow-sm hover:shadow-lg flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {loadingMore ? (
                      <>
                        <RefreshCw size={18} className="animate-spin" />
                        Memuat...
                      </>
                    ) : (
                      'Muat lagi'
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar Berita Populer (30%) */}
            <div className="lg:w-4/12 w-full">
               <div className="sticky top-36">
                 {/* Sidebar Header */}
                 <div className="flex items-center mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight mr-4 whitespace-nowrap">POPULER</h2>
                    <div className="flex-grow h-px bg-gray-300 dark:bg-gray-700"></div>
                 </div>

                 {/* News List Text Only */}
                 <div className="flex flex-col space-y-6">
                   {popularNews.map((item) => (
                     <div key={item.id} className="group cursor-pointer border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0" onClick={() => onNavigateToDetail?.(item.id)}>
                        <div className="text-[10px] font-bold text-[#D91B1B] uppercase mb-1">{formatCategoryName(item.category?.name)}</div>
                        <h4 className="text-sm font-bold uppercase leading-snug mb-2 group-hover:text-[#D91B1B] transition-colors line-clamp-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                           <Clock size={10} className="mr-1" />
                           {formatRelativeTime(item.published_at || item.created_at)}
                        </div>
                     </div>
                   ))}
                 </div>

                 {/* Button Index */}
                 <button 
                    onClick={onNavigateToCategory}
                    className="w-full py-4 border border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white hover:border-black dark:hover:bg-white dark:hover:text-black text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest text-sm transition-all rounded-sm mt-8"
                  >
                   INDEKS BERITA
                 </button>
               </div>
            </div>

          </div>

        </div>
      </section>

      <FooterSection />

    </div>
  );

};

export default CategoryScreen;