"use client";
import React, { useState, useEffect, useCallback } from "react";
import { User, RefreshCw, AlertCircle, Shuffle, Share2, Clock } from "lucide-react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import AdSection from "./AdSection";
import { getBerita, getPolling, getKategori, getLink, getStatis, getGallery } from "../services/api";

import { NewsItem, Polling, PollingOption, Category, Link, StatisItem, GalleryItem } from "../types/api";
import { 
  formatRelativeTime, 
  getImageUrl, 
  formatAuthorName, 
  formatCategoryName,
  safeArray,
  formatDate,
  truncateText
} from "../utils/helpers";

interface HomeScreenProps {
  onNavigateToDetail: (id: string | number) => void;
  onNavigateToCategory: (id?: string | number) => void;
}

// 7. BERITA UTAMA SECTION
const BeritaUtamaSection = ({ news, onNavigateToDetail }: { news: NewsItem[], onNavigateToDetail: (id: string | number) => void }) => {
  if (safeArray(news).length === 0) return null;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-3xl font-black uppercase text-black dark:text-white tracking-widest">Berita Utama</h2>
        <div className="h-1 flex-1 bg-red-600/10 dark:bg-red-600/20"></div>
      </div>
      <div className="space-y-10">
        {news.map((item) => (
          <div key={item.id} className="group cursor-pointer flex gap-6 items-start" onClick={() => onNavigateToDetail(item.id)}>
             <div className="w-32 md:w-56 aspect-[3/2] rounded-xl overflow-hidden shrink-0 shadow-lg transition-all duration-500 group-hover:shadow-2xl bg-gray-100 dark:bg-gray-900">
               <img 
                src={getImageUrl(item.image || item.cover || (item.gallery?.[0]?.image))} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                alt={item.title} 
                loading="lazy"
                onError={(e) => { 
                  const target = e.currentTarget;
                  // If storage/ prefix failed, try uploads/ before giving up
                  if (target.src.includes('/storage/')) {
                    target.src = target.src.replace('/storage/', '/uploads/');
                  } else {
                    target.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media';
                  }
                }}
               />
             </div>
             <div className="flex-1 py-1">
               {/* Metadata di atas judul sesuai gambar */}
               <div className="flex items-center gap-3 text-[10px] font-black text-gray-400 uppercase tracking-[0.1em] mb-3">
                  <span className="flex items-center gap-1.5"><User size={12} className="text-red-600" /> {formatAuthorName(item.author?.name)}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{formatDate(item.published_at || item.created_at)}</span>
               </div>
               <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-red-600 transition-colors leading-tight line-clamp-2 uppercase tracking-tight">
                 {item.title}
               </h3>
               {/* Summary jika dibutuhkan untuk "Konten Berita" */}
               {item.summary && (
                 <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                   {truncateText(item.summary, 120)}
                 </p>
               )}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// 8. OPINI SECTION
const OpiniSection = ({ opini, onNavigateToDetail }: { opini: StatisItem[], onNavigateToDetail: (id: string | number) => void }) => {
  if (safeArray(opini).length === 0) return null;

  return (
    <div className="relative p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#0D0D0D] border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
      {/* Watermark Design */}
      <div className="absolute top-10 right-4 text-gray-200 dark:text-gray-800/30 font-black text-9xl -rotate-12 pointer-events-none select-none opacity-50 tracking-tighter">OPINI!</div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-10 bg-red-600"></div>
          <h2 className="text-3xl font-black uppercase text-black dark:text-white tracking-widest">Opini</h2>
        </div>

        <div className="space-y-12">
          {opini.slice(0, 3).map((item) => (
            <div key={item.id} className="group cursor-pointer border-b border-gray-200 dark:border-gray-800 pb-10 last:border-0 last:pb-0" onClick={() => {}}>
               <h3 className="text-xl font-black text-gray-900 dark:text-white group-hover:text-red-600 transition-colors mb-4 uppercase leading-[1.1] tracking-tight">
                 {item.title}
               </h3>
               <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3 mb-6 font-medium">
                 {truncateText(item.content.replace(/<[^>]*>?/gm, ''), 150)}
               </p>
               <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-widest bg-red-600/5 px-3 py-1 rounded-full">Baca Opini</span>
                  <div className="w-10 h-10 rounded-full border-2 border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 group-hover:scale-110 transition-all duration-300">
                     <span className="text-gray-400 group-hover:text-white text-lg font-bold">→</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 flex justify-end">
           <button className="text-[10px] font-black uppercase text-gray-400 hover:text-red-600 transition-all flex items-center gap-3 group/btn tracking-widest">
             Lihat Semua Opini <span className="w-3 h-3 rounded-full bg-red-600 group-hover/btn:scale-125 transition-transform"></span>
           </button>
        </div>
      </div>
    </div>
  );
};

// 9. VISUAL MAJALAH SECTION
const VisualMajalahSection = ({ gallery }: { gallery: GalleryItem | null }) => {
  if (!gallery) return null;

  return (
    <div className="perspective-1000">
      <div className="relative group overflow-hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transition-transform duration-700 hover:rotate-y-6">
         <div className="absolute top-6 left-6 z-20">
            <div className="flex flex-col gap-1">
               <span className="bg-red-600 text-white text-[10px] font-black px-5 py-2 uppercase shadow-2xl tracking-[0.25em] inline-block">Visual SinPo</span>
               <span className="bg-white text-black text-[9px] font-black px-3 py-1 uppercase shadow-xl tracking-widest inline-block text-center">Terbaru</span>
            </div>
         </div>
         <img 
          src={getImageUrl(gallery.image)} 
          className="w-full h-auto object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
          alt={gallery.title} 
          loading="lazy"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x800/333/fff?text=Magazine+Cover'; }}
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
         
         <div className="absolute bottom-12 left-12 right-12 z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-4 transform -skew-x-12 drop-shadow-2xl">
              {gallery.title}
            </h2>
            <div className="flex items-center gap-4">
               <div className="h-1 flex-1 bg-red-600"></div>
               <span className="text-white/50 text-[10px] font-black uppercase tracking-[0.3em]">Issue 2025</span>
            </div>
         </div>
         
         {/* Glass Overlay UI */}
         <div className="absolute inset-0 border-[16px] border-white/5 pointer-events-none"></div>
      </div>
    </div>
  );
};

// 10. CATEGORY NEWS SECTION (POLITIK, EKBIS, OLAHRAGA, BUDAYA)
const CategoryNewsSection = ({ 
  data, 
  onNavigateToDetail, 
  onNavigateToCategory 
}: { 
  data: Record<string, NewsItem[]>, 
  onNavigateToDetail: (id: string | number) => void,
  onNavigateToCategory: (slug: string) => void
}) => {
  const categories = [
    { title: 'Politik', slug: 'politik', color: 'bg-red-600', text: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Ekonomi Bisnis', slug: 'ekbis', color: 'bg-green-600', text: 'text-green-600', bg: 'bg-green-50' },
    { title: 'Olahraga', slug: 'olahraga', color: 'bg-blue-600', text: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Budaya', slug: 'budaya', color: 'bg-amber-800', text: 'text-amber-800', bg: 'bg-amber-50' }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-20">
      {categories.map((cat, idx) => {
        const newsItems = safeArray<NewsItem>(data[cat.slug]);
        if (newsItems.length === 0) return null;

        return (
          <div 
            key={cat.slug} 
            className="group animate-fadeIn"
            style={{ animationDelay: `${idx * 150}ms`, animationFillMode: 'both' }}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-4">
                <div className={`w-3 h-10 ${cat.color} rounded-sm`}></div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-gray-900 dark:text-white">{cat.title}</h3>
              </div>
              <button 
                onClick={() => onNavigateToCategory(cat.slug)}
                className={`text-[10px] font-black uppercase tracking-widest ${cat.text} hover:opacity-70 transition-opacity flex items-center gap-2`}
              >
                Lihat Semua <span>→</span>
              </button>
            </div>

            {/* News Grid (2 items) */}
            <div className="space-y-8">
              {newsItems.slice(0, 2).map((item: NewsItem) => (
                <div 
                  key={item.id} 
                  className="flex gap-5 cursor-pointer group/item"
                  onClick={() => onNavigateToDetail(item.id)}
                >
                  <div className="w-28 sm:w-40 aspect-[16/9] rounded-xl overflow-hidden shrink-0 shadow-sm bg-gray-100 dark:bg-gray-800">
                    <img 
                      src={getImageUrl(item.image || item.cover || (item.gallery?.[0]?.image))} 
                      className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-500" 
                      alt={item.title}
                      loading="lazy"
                      onError={(e) => { 
                        const target = e.currentTarget;
                        if (target.src.includes('/storage/')) {
                          target.src = target.src.replace('/storage/', '/uploads/');
                        } else {
                          target.src = 'https://placehold.co/800x450/eee/999?text=SinPo+Media';
                        }
                      }}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h4 className="text-sm sm:text-base font-bold text-gray-900 dark:text-white group-hover/item:text-red-600 transition-colors line-clamp-2 uppercase leading-tight tracking-tight">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest">
                      <span>{formatAuthorName(item.author?.name)}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                      <span>{formatDate(item.published_at || item.created_at)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const FirstSection = ({ 
  onNavigateToDetail, 
  headline, 
  popularNews,
  randomNews 
}: { 
  onNavigateToDetail: (id: string | number) => void;
  headline: NewsItem | null;
  popularNews: NewsItem[];
  randomNews: NewsItem | null;
}) => {
  if (!headline) return null;

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans pb-12 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Headline - MODIFIED: Overlay Style (Hero Layout) */}
          <div className="lg:col-span-8 group cursor-pointer" onClick={() => onNavigateToDetail(headline.id)}>
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[16/10] overflow-hidden rounded-sm">
              {/* Image */}
              <img 
                src={getImageUrl(headline.image || headline.cover)} 
                alt={headline.title} 
                className="w-full h-full object-cover" 
                loading="lazy"
                onError={(e) => { 
                  console.error("Image load failed:", headline.image || headline.cover);
                  e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                }}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500"></div>

              {/* Text Content Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-20 flex flex-col justify-end h-full">
                <div className="bg-[#D91B1B] p-6 md:p-10 rounded-sm transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                  <span className="inline-block bg-white text-[#D91B1B] text-[10px] md:text-xs font-black px-4 py-2 uppercase tracking-[0.2em] mb-4 rounded-xs shadow-md">
                    {formatCategoryName(headline.category?.name)}
                  </span>
                  
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-4 md:mb-6 text-white transition-colors duration-300 uppercase tracking-tight line-clamp-3">
                    {headline.title}
                  </h2>
                  
                  <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                        <User size={16} className="text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-white">
                        {formatAuthorName(headline.author?.name)}
                      </span>
                    </div>
                    
                    <div className="hidden md:block h-4 w-px bg-white/30"></div>
                    
                    <div className="flex items-center gap-2">
                       <Clock size={16} className="text-white" />
                       <span className="text-xs font-medium uppercase tracking-widest text-white/80">
                         {formatRelativeTime(headline.published_at || headline.created_at)}
                       </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar containing Random + Popular */}
          <div className="lg:col-span-4 h-full flex flex-col gap-8">
            
            {/* Random News / Recommendation - Styled as Secondary Hero */}
            {randomNews && (
              <div className="group cursor-pointer relative overflow-hidden rounded-sm shadow-md h-[265px]" onClick={() => onNavigateToDetail(randomNews.id)}>
                 <img 
                    src={getImageUrl(randomNews.image || randomNews.cover)} 
                    alt={randomNews.title} 
                    className="w-full h-full object-cover rounded-sm" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-5 z-10">
                    <span className="inline-block bg-[#D91B1B] text-white text-[10px] md:text-xs font-black px-4 py-2 uppercase tracking-[0.2em] mb-4 rounded-xs shadow-md">
                       Pilihan Editor
                    </span>
                    <h3 className="text-lg font-bold leading-tight text-white group-hover:text-[#D91B1B] transition-colors uppercase line-clamp-2">
                      {randomNews.title}
                    </h3>
                  </div>
              </div>
            )}

            {/* Popular News List */}
            <div className="bg-gray-50 dark:bg-[#111] p-6 rounded-sm border border-gray-100 dark:border-gray-800 flex-1 mb-[-2px]">
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-lg font-black uppercase text-[#1a1a1a] dark:text-white tracking-widest">Terpopuler</h3>
                <div className="h-1 flex-1 bg-[#D91B1B]/20">
                    <div className="w-1/3 h-full bg-[#D91B1B]"></div>
                </div>
              </div>
              <div className="space-y-6">
                {popularNews.slice(0, 3).map((item, index) => (
                  <div key={item.id} className="group cursor-pointer flex gap-4 items-start" onClick={() => onNavigateToDetail(item.id)}>
                    <span className="text-lg font-black text-gray-300 dark:text-gray-700 group-hover:text-[#D91B1B] transition-colors leading-none w-8">
                      0{index + 1}
                    </span>
                    <div className="flex-1 border-b border-gray-200 dark:border-gray-800 pb-4 last:border-0 last:pb-0">
                      <h4 className="text-sm font-bold leading-tight text-[#1a1a1a] dark:text-gray-300 uppercase group-hover:text-[#D91B1B] transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">
                        {formatRelativeTime(item.published_at || item.created_at)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 2. TDK KALAH PENTING (SIDEBAR WING)
// MODIFIED: Menggunakan style dari ArticleDetailScreen
const TdkKalahPenting = ({ latestNews, onNavigateToDetail }: { latestNews: NewsItem[], onNavigateToDetail: (id: string | number) => void }) => {
  return (
    <div className="bg-black dark:bg-[#111] text-white p-6 rounded-md shadow-lg transition-colors border border-gray-800 h-fit">
      <div className="mb-6 pb-4">
        <h2 className="text-3xl font-bold uppercase tracking-wider text-white">TDK KALAH PENTING</h2>
        <div className="w-16 h-1 bg-red-500 mt-2"></div>
      </div>

      <div className="flex flex-col gap-8">
        {latestNews.slice(0, 2).map((item, index) => (
          <div key={item.id} className="group cursor-pointer" onClick={() => onNavigateToDetail(item.id)}>
            
            {/* Tambahan teks khusus sebelum kategori */}
            {index === 0 && (
              <div className="mb-2">
                <span className="block text-[24px] font-extrabold text-white uppercase">
                  POJOK SIN PO
                </span>
              </div>
            )}
            {index === 1 && (
              <div className="mb-4">
                <div className="w-full h-[2px] bg-red-600 mb-2"></div>
                <span className="block text-[52px] font-extrabold text-[#D91B1B] uppercase">
                  BONGKAR
                </span>
              </div>
            )}

            {/* Kategori */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-black text-[18px] uppercase text-white">
                {formatCategoryName(item.category?.name)}
              </span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>
            
            {/* Gambar */}
            <div className="w-full aspect-video overflow-hidden mb-3 rounded-sm border border-gray-700/50">
              <img 
                src={getImageUrl(item.image || item.cover)} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => { 
                  console.error("Image load failed:", item.image || item.cover);
                  e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                }}
              />
            </div>

            {/* Judul */}
            <h4 className="text-[20px] font-bold leading-snug text-gray-100 group-hover:text-red-500 transition-colors">
              {item.title}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. SECOND SECTION (LATEST NEWS WITH TIMELINE UI)
const SecondSection = ({ 
  latestNews, 
  onNavigateToDetail, 
  onLoadMore, 
  loadingMore, 
  hasMore 
}: { 
  latestNews: NewsItem[], 
  onNavigateToDetail: (id: string | number) => void,
  onLoadMore: () => void,
  loadingMore: boolean,
  hasMore: boolean
}) => {
    return (
        <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans py-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* LEFT COLUMN: TDK KALAH PENTING (Desktop Only Sticky) */}
                    <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-36 h-fit">
                        <TdkKalahPenting latestNews={latestNews} onNavigateToDetail={onNavigateToDetail} />
                    </div>

                    {/* RIGHT COLUMN: BERITA TERKINI TIMELINE */}
                    <div className="lg:col-span-8">
                        <div className="flex items-center gap-4 mb-10">
                          <h2 className="text-4xl font-black uppercase text-black dark:text-white whitespace-nowrap tracking-tighter">Berita Terkini</h2>
                          <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-700"></div>
                        </div>
                        
                        <div className="relative pl-8 md:pl-10 space-y-8">
                            {/* Vertical Line */}
                            <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-[2px] bg-gray-200 dark:bg-gray-700"></div>

                            {latestNews.map((news) => (
                                <div key={news.id} className="relative group cursor-pointer" onClick={() => onNavigateToDetail(news.id)}>
                                    {/* Timeline Dot */}
                                    <div className="absolute -left-[31px] md:-left-[38px] top-19 w-4 h-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A] group-hover:border-[#D91B1B] group-hover:bg-[#D91B1B] transition-all z-10"></div>
                                    
                                    <div className="bg-gray-50 dark:bg-[#0d0d0d] p-5 md:p-6 rounded-sm border border-gray-100/50 dark:border-gray-900 transition-all group-hover:border-[#D91B1B]/50">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            {/* Thumbnail */}
                                            <div className="w-full md:w-52 aspect-video shrink-0 overflow-hidden rounded-sm bg-gray-200 dark:bg-gray-900">
                                              <img 
                                                src={getImageUrl(news.image || news.cover)} 
                                                alt={news.title} 
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                                                loading="lazy"
                                                onError={(e) => { 
                                                  console.error("Image load failed:", news.image || news.cover);
                                                  e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                                                }}
                                              />
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col justify-center">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                                                        {news.author?.avatar ? (
                                                            <img src={news.author.avatar} alt="" className="w-full h-full object-cover" />
                                                        ) : (
                                                            <User size={14} className="text-gray-400" />
                                                        )}
                                                    </div>
                                                    <span className="text-[11px] font-bold text-gray-700 dark:text-gray-300 uppercase underline decoration-gray-300 dark:decoration-gray-700 underline-offset-2">{formatAuthorName(news.author?.name)}</span>
                                                    <span className="text-[11px] text-gray-400 font-medium">{formatRelativeTime(news.published_at || news.created_at)}</span>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white leading-tight group-hover:text-[#D91B1B] transition-colors line-clamp-3">
                                                  {news.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Load More Button or State */}
                            <div className="pt-6 flex justify-center pb-8">
                                {hasMore ? (
                                    <button 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onLoadMore();
                                        }}
                                        disabled={loadingMore}
                                        className={`px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all flex items-center gap-3
                                            ${loadingMore 
                                                ? 'bg-gray-100 text-gray-400 dark:bg-gray-900 cursor-not-allowed' 
                                                : 'bg-black text-white hover:bg-[#D91B1B] shadow-lg hover:shadow-xl dark:bg-white dark:text-black dark:hover:bg-[#D91B1B] dark:hover:text-white'
                                            }`}
                                    >
                                        {loadingMore ? (
                                            <>
                                                <RefreshCw className="animate-spin" size={16} />
                                                Memuat...
                                            </>
                                        ) : (
                                            'Muat Lebih Banyak'
                                        )}
                                    </button>
                                ) : (
                                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest italic">Sudah menampilkan semua berita</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 4. TREN HARI INI SECTION
const TrendingSection = ({ trendingNews, onNavigateToDetail }: { trendingNews: NewsItem[], onNavigateToDetail: (id: string | number) => void }) => {
  if (safeArray(trendingNews).length === 0) return null;

  return (
    <section className="w-full bg-gray-50 dark:bg-[#0D0D0D] py-16 border-y border-gray-100 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
            <RefreshCw className="text-white" size={20} />
          </div>
          <h2 className="text-4xl font-black uppercase text-black dark:text-white tracking-tighter">Tren Hari Ini</h2>
          <div className="flex-1 h-1 bg-red-600/10 dark:bg-red-600/20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {trendingNews.map((news) => (
            <div key={news.id} className="group cursor-pointer flex flex-col" onClick={() => onNavigateToDetail(news.id)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={getImageUrl(news.image || news.cover)} 
                  alt={news.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-sm font-extrabold leading-snug line-clamp-3 text-gray-900 dark:text-gray-100 group-hover:text-red-600 transition-colors uppercase mb-3">
                {news.title}
              </h3>
              <div className="mt-auto flex items-center gap-2 text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                 <span>{formatAuthorName(news.author?.name)}</span>
                 <span>•</span>
                 <span>{formatDate(news.published_at)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. SIN PO TV SECTION
const SinpoTVSection = ({ videos }: { videos: Link[] }) => {
  if (safeArray(videos).length === 0) return null;

  return (
    <section className="w-full bg-black py-20 transition-colors">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-gray-800 pb-8">
           <div className="space-y-2">
              <span className="text-red-600 font-black tracking-[0.3em] uppercase text-xs">Premium VideoContent</span>
              <h2 className="text-5xl font-black text-white tracking-tighter uppercase">SIN PO TV</h2>
           </div>
           <button className="px-8 py-3 bg-red-600 text-white rounded-full font-black text-xs uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20">
              Lihat Semua Video
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((vid, idx) => (
            <div key={vid.id} className={`group cursor-pointer ${idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-gray-900 shadow-2xl group-hover:ring-4 ring-red-600/30 transition-all duration-500">
                 {/* This would be an embed. Simplification: using a placeholder with a play button */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                       <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
                    </div>
                 </div>
                 <img 
                  src={`https://placehold.co/1280x720/000/666?text=SinPo+TV+Video+${idx+1}`} 
                  alt={vid.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" 
                 />
              </div>
              <h3 className={`${idx === 0 ? 'text-2xl' : 'text-lg'} font-bold text-white group-hover:text-red-500 transition-colors leading-tight line-clamp-2`}>
                {vid.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 6. MODIFIED POLLING SECTION
const PollingSection = ({ pollingData }: { pollingData: Polling[] }) => {
  const [voted, setVoted] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const handleVote = async (pollingId: number, optionId: number) => {
    setLoading(prev => ({ ...prev, [pollingId]: true }));
    try {
      await getPolling.vote(pollingId, optionId);
      setVoted(prev => ({ ...prev, [pollingId]: true }));
    } catch (error) {
      console.error("Vote failed:", error);
    } finally {
      setLoading(prev => ({ ...prev, [pollingId]: false }));
    }
  };

  if (safeArray(pollingData).length === 0) return null;

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] py-24 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
           <span className="text-red-600 font-black tracking-[0.2em] uppercase text-xs mb-4 block">Jajak Pendapat</span>
           <h2 className="text-5xl font-black text-black dark:text-white tracking-tighter uppercase mb-6">Suara Anda Menentukan</h2>
           <p className="text-gray-500 dark:text-gray-400 font-medium text-lg">Ikuti jajak pendapat terbaru kami mengenai isu-isu terkini yang sedang berkembang.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pollingData.slice(0, 3).map((item) => (
            <div key={item.id} className="relative bg-gray-50 dark:bg-[#0D0D0D] p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col">
               <div className="absolute top-0 left-0 w-2 h-full bg-red-600"></div>
               
               <div className="mb-8">
                 <span className="bg-red-600/10 text-red-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">Aktif</span>
                 <h3 className="text-xl font-bold dark:text-white leading-tight">{item.question || item.title || "Polling SinPo"}</h3>
               </div>

               <div className="space-y-4 flex-1">
                 {safeArray<PollingOption>(item.options).map((opt) => {
                   const percentage = item.total_votes > 0 ? Math.round((opt.votes / item.total_votes) * 100) : 0;
                   const isVoted = voted[item.id];

                   return (
                     <div key={opt.id} className="relative group">
                       <button 
                        onClick={() => handleVote(item.id, opt.id)}
                        disabled={isVoted || loading[item.id]}
                        className={`w-full relative z-10 text-left p-4 rounded-xl border transition-all flex flex-col gap-2 overflow-hidden
                          ${isVoted 
                            ? 'border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0A0A0A]' 
                            : 'bg-white dark:bg-[#0A0A0A] border-gray-200 dark:border-gray-800 hover:border-red-600'
                          }`}
                       >
                         <div className="flex justify-between items-center w-full z-10">
                            <span className={`font-bold text-sm ${isVoted ? 'text-gray-400' : 'text-gray-900 dark:text-gray-100'}`}>{opt.label}</span>
                            {isVoted && <span className="text-red-600 font-black text-xs">{percentage}%</span>}
                         </div>

                         {isVoted && (
                           <div className="absolute inset-0 bg-red-600/5 transition-all" style={{ width: `${percentage}%` }}></div>
                         )}
                       </button>
                     </div>
                   );
                 })}
               </div>

               <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">Total Suara</span>
                    <span className="text-lg font-black dark:text-white">{item.total_votes.toLocaleString()}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-sm">
                     <Share2 size={16} className="text-gray-400" />
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function HomeScreen({ onNavigateToDetail, onNavigateToCategory }: HomeScreenProps) {
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [popularNews, setPopularNews] = useState<NewsItem[]>([]);
  const [randomNews, setRandomNews] = useState<NewsItem | null>(null); // State untuk random news
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [trendingNews, setTrendingNews] = useState<NewsItem[]>([]);
  const [videoLinks, setVideoLinks] = useState<Link[]>([]);
  const [mainNews, setMainNews] = useState<NewsItem[]>([]);
  const [opinionNews, setOpinionNews] = useState<StatisItem[]>([]);
  const [magazineVisual, setMagazineVisual] = useState<GalleryItem | null>(null);
  const [categoryNews, setCategoryNews] = useState<Record<string, NewsItem[]>>({});
  const [categories, setCategories] = useState<Category[]>([]);
  const [polling, setPolling] = useState<Polling[]>([]);
  
  // Pagination State
  const [latestPage, setLatestPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Berita Utama Pagination
  const [utamaPage, setUtamaPage] = useState(1);
  const [loadingMoreUtama, setLoadingMoreUtama] = useState(false);
  const [hasMoreUtama, setHasMoreUtama] = useState(true);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Reset pagination on initial fetch
      setLatestPage(1);
      setHasMore(true);
      setUtamaPage(1);
      setHasMoreUtama(true);

      const [
        headlineRes, popularRes, latestRes, pollingRes, categoriesRes, trendingRes, videoRes, 
        utamaRes, opiniRes, majalahRes,
        politikRes, ekbisRes, olahragaRes, budayaRes
      ] = await Promise.allSettled([
        getBerita.headline({ limit: 1 }),
        getBerita.populer({ limit: 5 }),
        // MODIFIKASI: Ubah limit menjadi 10 agar sinkron dengan yang ditampilkan dan pagination selanjutnya
        getBerita.list({ limit: 10, page: 1 }), 
        getPolling.list({ limit: 3 }),
        getKategori.list(),
        getBerita.list({ limit: 5, sort: 'desc' }), // Assuming this is for trending
        getLink.list({ q: 'sinpo_tv', limit: 5 }),
        getBerita.list({ limit: 8, sort: 'desc' }), // Change from getBerita.utama to general getBerita.list
        getStatis.opini({ limit: 3 }),
        getGallery.majalah({ limit: 1 }),
        getBerita.byKategori(2, 2), // Politik ID: 2
        getBerita.byKategori(5, 2), // Ekbis ID: 5
        getBerita.byKategori('olahraga', 2),
        getBerita.byKategori('budaya', 2)
      ]);

      let hasSomeNews = false;
      let currentHeadlineId: string | number | null = null;

      // Set Headline
      if (headlineRes.status === 'fulfilled') {
        const headlineData = safeArray<NewsItem>(headlineRes.value.data)[0];
        setHeadline(headlineData || null);
        if (headlineData) currentHeadlineId = headlineData.id;
        hasSomeNews = true;
      }

      // Set Popular
      if (popularRes.status === 'fulfilled') {
        setPopularNews(safeArray<NewsItem>(popularRes.value.data));
      }

      // Set Latest & Pick Random
      if (latestRes.status === 'fulfilled') {
        const data = safeArray<NewsItem>(latestRes.value.data);
        // MODIFIKASI: Langsung set data (karena limit sudah 10), tidak perlu di-slice lagi
        setLatestNews(data); 
        
        // Cek jika data kurang dari 10, berarti tidak ada halaman berikutnya
        if (data.length < 10) setHasMore(false);
        hasSomeNews = true;

        // LOGIKA PICK RANDOM NEWS
        // Mengambil satu berita secara acak dari list latest, tapi bukan yang sedang jadi headline
        const availableForRandom = data.filter(item => item.id !== currentHeadlineId);
        if (availableForRandom.length > 0) {
            const randomIndex = Math.floor(Math.random() * availableForRandom.length);
            setRandomNews(availableForRandom[randomIndex]);
        }
      }

      // Set Trending
      if (trendingRes.status === 'fulfilled') {
        setTrendingNews(safeArray<NewsItem>(trendingRes.value.data));
      }

      // Set Videos
      if (videoRes.status === 'fulfilled') {
        setVideoLinks(safeArray<Link>(videoRes.value.data));
      }

      // Set Utama
      if (utamaRes.status === 'fulfilled') {
        const data = safeArray<NewsItem>(utamaRes.value.data);
        setMainNews(data);
        if (data.length < 8) setHasMoreUtama(false);
      }

      // Set Opini
      if (opiniRes.status === 'fulfilled') {
        setOpinionNews(safeArray<StatisItem>(opiniRes.value.data));
      }

      // Set Majalah
      if (majalahRes.status === 'fulfilled') {
        setMagazineVisual(safeArray<GalleryItem>(majalahRes.value.data)[0] || null);
      }

      // Set Category News
      const catNews: Record<string, NewsItem[]> = {};
      if (politikRes.status === 'fulfilled') catNews['politik'] = safeArray<NewsItem>(politikRes.value.data);
      if (ekbisRes.status === 'fulfilled') catNews['ekbis'] = safeArray<NewsItem>(ekbisRes.value.data);
      if (olahragaRes.status === 'fulfilled') catNews['olahraga'] = safeArray<NewsItem>(olahragaRes.value.data);
      if (budayaRes.status === 'fulfilled') catNews['budaya'] = safeArray<NewsItem>(budayaRes.value.data);
      setCategoryNews(catNews);

      if (pollingRes.status === 'fulfilled') {
        setPolling(safeArray<Polling>(pollingRes.value.data));
      }

      if (categoriesRes.status === 'fulfilled') {
        setCategories(safeArray<Category>(categoriesRes.value.data));
      }

      if (!hasSomeNews) throw new Error("Gagal memuat berita utama.");

    } catch (err: any) {
      console.error("Critical error fetching home data:", err);
      setError(err.message || "Gagal memuat data. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLoadMore = async () => {
    if (loadingMore || !hasMore) return;
    
    setLoadingMore(true);
    const nextPage = latestPage + 1;
    
    try {
      // MODIFIKASI: Ubah limit jadi 10 agar konsisten dengan initial fetch (Page 1 = 10 items, Page 2 = 10 items)
      // Ini mencegah duplikasi offset
      const res = await getBerita.list({ limit: 10, page: nextPage });
      const newData = safeArray<NewsItem>(res.data);
      
      if (newData.length > 0) {
        setLatestNews(prev => {
          // MODIFIKASI: Filter Duplikasi (Client-side safety)
          // Memastikan tidak ada ID yang sama yang masuk ke list
          const existingIds = new Set(prev.map(item => item.id));
          const uniqueNewData = newData.filter(item => !existingIds.has(item.id));
          return [...prev, ...uniqueNewData];
        });
        
        setLatestPage(nextPage);
        // Jika yang dikembalikan kurang dari 10, anggap sudah habis
        if (newData.length < 10) setHasMore(false);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error("Failed to load more news:", err);
    } finally {
      setLoadingMore(false);
    }
  };

  const handleLoadMoreUtama = async () => {
    if (loadingMoreUtama || !hasMoreUtama) return;
    
    setLoadingMoreUtama(true);
    // Jika awalnya 8, dan kita ingin page 2 dengan limit 3,
    // maka kita butuh offset 8. Jika limit=3, page 3 offset (3-1)*3=6, page 4 offset (4-1)*3=9.
    // Kita gunakan limit 3 secara konsisten mulai dari page 4 (item ke-10).
    // Atau lebih baik, gunakan limit 8 saja untuk konsistensi?
    // User minta 3 items. Mari kita coba limit 3 dan hitung page yang mendekati offset 8.
    // Offset 8 / 3 ~= 2.66. Page 4 dengan limit 3 = offset 9. 
    // Kita pakai limit 3, page mulai dari itungan offset.
    const nextPage = utamaPage === 1 ? 4 : utamaPage + 1; 

    try {
      // Menggunakan getBerita.list (umum) seperti Berita Terkini
      const res = await getBerita.list({ 
        limit: 3, 
        page: nextPage,
        sort: 'desc'
      });
      const newData = safeArray<NewsItem>(res.data);
      
      if (newData.length > 0) {
        setMainNews(prev => {
           // Tambahkan juga filter duplikasi untuk Berita Utama agar lebih aman
           const existingIds = new Set(prev.map(item => item.id));
           const uniqueNewData = newData.filter(item => !existingIds.has(item.id));
           return [...prev, ...uniqueNewData];
        });
        setUtamaPage(nextPage);
        if (newData.length < 3) setHasMoreUtama(false);
      } else {
        setHasMoreUtama(false);
      }
    } catch (err) {
      console.error("Failed to load more utama news:", err);
    } finally {
      setLoadingMoreUtama(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D91B1B]"></div>
        <p className="text-sm font-medium text-gray-500 animate-pulse">Memuat SinPo Media...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] p-4 text-center">
        <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Oops! Ada Masalah</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-sm">{error}</p>
        <button 
          onClick={fetchData}
          className="flex items-center gap-2 bg-[#D91B1B] text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
        >
          <RefreshCw size={18} />
          Coba Lagi
        </button>
      </div>
    );
  }

  return (
    <>
      <HeaderSection 
        onNavigateToHome={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        onNavigateToCategory={() => {}} // Disabled as requested
        onNavigateToGallery={() => {}} // TODO: implement
      />
      <div className="bg-white dark:bg-[#0A0A0A] pt-4">
        <AdSection position="top" className="container mx-auto px-4" />
      </div>

      <FirstSection 
        onNavigateToDetail={onNavigateToDetail} 
        headline={headline}
        popularNews={popularNews}
        randomNews={randomNews}
      />

      <SecondSection 
        latestNews={latestNews} 
        onNavigateToDetail={onNavigateToDetail}
        onLoadMore={handleLoadMore}
        loadingMore={loadingMore}
        hasMore={hasMore}
      />

      <TrendingSection 
        trendingNews={trendingNews} 
        onNavigateToDetail={onNavigateToDetail} 
      />

      <SinpoTVSection videos={videoLinks} />

      <PollingSection pollingData={polling} />

      {/* NEW SECTION PHASE 11: MAIN NEWS, OPINION & MAGAZINE */}
      <section className="w-full bg-white dark:bg-[#0A0A0A] py-24 transition-colors border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Kolom Kiri: Berita Utama */}
            <div className="lg:col-span-8">
              <BeritaUtamaSection news={mainNews} onNavigateToDetail={onNavigateToDetail} />
              {hasMoreUtama && (
                <div className="mt-16 text-center">
                  <button 
                    onClick={handleLoadMoreUtama}
                    disabled={loadingMoreUtama}
                    className="bg-gray-100 dark:bg-[#111] text-gray-900 dark:text-gray-100 px-12 py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all shadow-sm disabled:opacity-50"
                  >
                    {loadingMoreUtama ? (
                      <span className="flex items-center gap-2">
                        <RefreshCw size={14} className="animate-spin" />
                        Memuat...
                      </span>
                    ) : (
                      "Muat Lebih Banyak Berita Utama"
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Kolom Kanan: Opini & Visual */}
            <div className="lg:col-span-4 space-y-16">
              <OpiniSection opini={opinionNews} onNavigateToDetail={onNavigateToDetail} />
              <div className="pt-4">
                 <VisualMajalahSection gallery={magazineVisual} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
}