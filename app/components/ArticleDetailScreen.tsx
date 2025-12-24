"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { User, RefreshCw, AlertCircle, MessageSquare, Type, Tag, Share2 } from 'lucide-react';
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';
import AdSection from './AdSection';
import CommentSection from './CommentSection';
import { getBerita } from '../services/api';

import { NewsItem } from '../types/api';
import { 
  formatDate, 
  getImageUrl, 
  formatAuthorName, 
  formatCategoryName,
  safeArray,
  fixContentImages
} from '../utils/helpers';

interface ArticleDetailScreenProps {
  articleId: string | number; // This is actually the ID from the API
  onNavigateToHome: () => void;
  onNavigateToCategory: (id?: string | number) => void;
  onNavigateToDetail: (id: string | number) => void;
  onNavigateToAuthor?: (id: string | number) => void;
}

export default function ArticleDetailScreen({ 
  articleId, 
  onNavigateToHome, 
  onNavigateToCategory,
  onNavigateToDetail,
  onNavigateToAuthor
}: ArticleDetailScreenProps) {
  const [article, setArticle] = useState<NewsItem | null>(null);
  const [latestNews, setLatestNews] = useState<NewsItem[]>([]);
  const [relatedNews, setRelatedNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticleData = useCallback(async () => {
    if (!articleId) return;
    setLoading(true);
    setError(null);
    try {
      const [detailRes, latestRes, relatedRes] = await Promise.allSettled([
        getBerita.detail(articleId),
        getBerita.list({ limit: 10 }),
        getBerita.terkait(articleId, { limit: 4 })
      ]);

      if (detailRes.status === 'fulfilled') {
        setArticle(detailRes.value.data);
      } else {
        throw detailRes.reason;
      }

      if (latestRes.status === 'fulfilled') {
        setLatestNews(safeArray(latestRes.value.data));
      }
      
      if (relatedRes.status === 'fulfilled') {
        setRelatedNews(safeArray(relatedRes.value.data));
      }
    } catch (err: any) {
      console.error("Failed to fetch article details:", err);
      const msg = err.message || "";
      if (msg.includes("Load failed") || msg.includes("Failed to fetch")) {
        setError("Koneksi gagal. Pastikan Anda terhubung ke internet.");
      } else {
        setError("Gagal memuat artikel. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }

  }, [articleId]);

  useEffect(() => {
    fetchArticleData();
    // Scroll to top when article changes
    window.scrollTo(0, 0);
  }, [fetchArticleData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D91B1B]"></div>
        <p className="text-sm font-medium text-gray-500 animate-pulse">Memuat artikel...</p>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] p-4 text-center">
        <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {error || "Artikel tidak ditemukan"}
        </h2>
        <div className="flex gap-4 mt-6">
          <button 
            onClick={onNavigateToHome}
            className="px-6 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-bold hover:bg-gray-300 transition-colors"
          >
            Kembali ke Home
          </button>
          {error && (
            <button 
              onClick={fetchArticleData}
              className="flex items-center gap-2 bg-[#D91B1B] text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-colors"
            >
              <RefreshCw size={18} />
              Coba Lagi
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <HeaderSection 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToCategory={onNavigateToCategory} 
        onNavigateToGallery={() => {}} // TODO: implement
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-xs md:text-sm font-bold uppercase mb-4 text-gray-500 dark:text-gray-400">
          <button onClick={onNavigateToHome} className="hover:text-red-600 dark:hover:text-red-500 transition-colors">
            HOME
          </button>
          <span className="mx-2">/</span>
          <button onClick={() => onNavigateToCategory(article.category?.id)} className="hover:text-red-600 dark:hover:text-red-500 transition-colors uppercase">
            {formatCategoryName(article.category?.name)}
          </button>

          <span className="mx-2">/</span>
          <span className="text-red-600 dark:text-red-500 line-clamp-1 uppercase">
             {article.title}
          </span>
        </div>

        {/* Judul Artikel Utama */}
        <div className="mb-8 border-b border-gray-100 dark:border-gray-800 pb-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase leading-[1.1] tracking-tight mb-6 text-black dark:text-white">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-[11px] md:text-xs text-gray-500 dark:text-gray-400 gap-y-3 gap-x-6 uppercase font-bold">
            <div className="flex items-center gap-2">
              <div className="bg-red-600 text-white rounded-full p-1.5 shadow-sm">
                <User size={14}/>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Wartawan</span>
                <span className="text-red-600 dark:text-red-500 hover:text-red-700 transition-colors cursor-pointer" onClick={() => article.author?.id && onNavigateToAuthor?.(article.author.id)}>
                   {article.journalist || article.author?.name || 'Redaksi'}
                </span>
              </div>
            </div>

            {article.editor && (
              <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-800 pl-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Editor</span>
                  <span className="text-gray-900 dark:text-gray-100">{article.editor}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 border-l border-gray-200 dark:border-gray-800 pl-6">
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Terbit</span>
                <span className="text-gray-600 dark:text-gray-400">{formatDate(article.published_at || article.created_at)}</span>
              </div>
            </div>

            <div className="ml-auto flex items-center gap-4">
               <div className="flex flex-col items-end">
                  <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">Dilihat</span>
                  <span className="text-gray-900 dark:text-gray-100">{article.views.toLocaleString()} Kali</span>
               </div>
            </div>
          </div>
        </div>

        {/* Layout Grid Artikel & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">
          
          {/* Kolom Kiri (Artikel Utama) */}
          <div className="lg:col-span-8">
            {/* Gambar Utama */}
            <div className="mb-8 group">
              <div className="relative overflow-hidden rounded-md shadow-lg bg-gray-100 dark:bg-gray-900">
                <img 
                  src={getImageUrl(article.image || article.cover)} 
                  alt={article.title} 
                  className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => { 
                    console.error("Image load failed:", article.image || article.cover);
                    e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D91B1B] text-white text-[10px] font-black px-3 py-1 uppercase shadow-md tracking-wider">
                    {formatCategoryName(article.category?.name)}
                  </span>
                </div>
              </div>
              {article.cover_credit && (
                <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-3 font-medium flex items-center gap-2 px-2">
                  <span className="w-6 h-px bg-gray-300 dark:bg-gray-700"></span>
                  {(article.cover_credit.startsWith('Foto') || article.cover_credit.startsWith('Ist')) ? article.cover_credit : `Foto: ${article.cover_credit}`}
                </p>
              )}
            </div>

            {/* Isi Artikel */}
            <article className="prose prose-lg max-w-none text-gray-800 dark:text-gray-200 leading-relaxed py-4 border-b border-gray-100 dark:border-gray-900 mb-10">
               <div 
                dangerouslySetInnerHTML={{ __html: fixContentImages(article.content) }} 
                className="article-content font-serif text-lg md:text-xl selection:bg-red-100 dark:selection:bg-red-900/30" 
               />
            </article>

            {/* Gallery Section */}
            {article.gallery && article.gallery.length > 0 && (
              <div className="mb-12 bg-gray-50 dark:bg-[#0d0d0d] p-6 rounded-xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-xl font-black uppercase mb-6 flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-red-600"></div>
                  GALLERY FOTO
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {article.gallery.map((photo, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-pointer">
                      <img 
                        src={getImageUrl(photo.image)} 
                        alt={photo.title || ""} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Section */}
            {article.tags && article.tags.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-4">
                  <Tag size={18} className="text-red-600" />
                  <span className="text-sm font-black uppercase tracking-widest text-gray-400">Trending Topik</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-bold uppercase transition-all hover:bg-red-600 hover:text-white cursor-pointer shadow-sm"
                    >
                      # {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between mb-12 p-6 bg-gray-50 dark:bg-[#0d0d0d] rounded-xl border border-gray-100 dark:border-gray-800">
               <div className="flex items-center gap-4 text-sm font-bold uppercase">
                  <span className="text-gray-400">Bagikan:</span>
                  <div className="flex gap-2">
                     {['FB', 'TW', 'WA', 'TG'].map(soc => (
                        <button key={soc} className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-xs shadow-sm hover:bg-black hover:text-white transition-all">
                           {soc}
                        </button>
                     ))}
                  </div>
               </div>
               <button className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-full text-xs font-black uppercase tracking-widest shadow-sm hover:bg-red-600 hover:text-white transition-all">
                  <Share2 size={16} />
                  SALIN TAUTAN
               </button>
            </div>

            {/* AD MIDDLE */}
            <AdSection position="middle" className="my-12 py-8 border-y border-gray-100 dark:border-gray-900" />

            {/* COMMENTS */}
            <CommentSection articleId={articleId} />

            <style jsx global>{`
              .article-content {
                line-height: 1.8;
                color: inherit;
              }
              .article-content p { 
                margin-bottom: 2rem; 
                line-height: 2;
                font-size: 1.15rem;
              }
              .article-content strong, .article-content b { 
                color: #000;
                font-weight: 800; 
              }
              .dark .article-content strong, .dark .article-content b {
                color: #fff;
              }
              .article-content blockquote {
                border-left: 4px solid #D91B1B;
                padding-left: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                color: #444;
                font-size: 1.25rem;
              }
              .dark .article-content blockquote {
                color: #aaa;
              }
              .article-content img { 
                margin: 3rem 0; 
                border-radius: 0.5rem; 
                width: 100%; 
                height: auto; 
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
              }
              .article-content h2, .article-content h3 { 
                font-weight: 900; 
                margin-top: 3rem; 
                margin-bottom: 1.5rem; 
                text-transform: uppercase;
                letter-spacing: -0.025em;
                line-height: 1.2;
              }
            `}</style>
          </div>

          {/* Kolom Kanan (Sidebar) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-36 h-fit self-start">
            {/* AD SIDEBAR */}
            <AdSection position="sidebar" className="mb-8" />
            
            {/* Widget: Latest News */}

            <div className="bg-black dark:bg-[#111] text-white p-6 rounded-md shadow-lg transition-colors border border-gray-800">
              <div className="mb-6 pb-4">
                <h2 className="text-3xl font-bold uppercase tracking-wider text-white">TDK KALAH PENTING</h2>
                <div className="w-16 h-1 bg-red-500 mt-2"></div>
              </div>

              <div className="flex flex-col gap-8">
                {latestNews.slice(0, 2).map((item) => (
                  <div key={item.id} className="group cursor-pointer" onClick={() => onNavigateToDetail(item.id)}>
                    <div className="flex items-center gap-2 mb-3">
                       <span className="font-black text-xl uppercase text-white">
                         {formatCategoryName(item.category?.name)}
                       </span>
                       <div className="flex-1 h-px bg-gray-700"></div>
                    </div>
                    
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

                    <h4 className="text-xl font-bold leading-snug text-gray-100 group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Widget: BERITA TERKINI */}
            <div className="bg-white dark:bg-[#0A0A0A] mt-8 transition-colors">
              <h3 className="text-3xl font-black uppercase text-[#222] dark:text-white mb-6 tracking-tight">
                BERITA TERKINI
              </h3>

              <div className="space-y-6">
                {latestNews.slice(2, 7).map((item) => (
                  <div key={item.id} className="flex gap-4 group cursor-pointer items-start" onClick={() => onNavigateToDetail(item.id)}>
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-800">
                        <img 
                          src={getImageUrl(item.image || item.cover)} 
                          alt="" 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                          loading="lazy"
                          onError={(e) => { 
                            console.error("Image load failed:", item.image || item.cover);
                            e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                          }}
                        />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h4 className="text-[13px] font-bold leading-snug text-gray-900 dark:text-gray-200 mb-2 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-[10px] text-gray-500 dark:text-gray-500 font-sans mt-auto">
                        <span className="font-bold text-gray-600 dark:text-gray-400 mr-3 underline uppercase">{formatAuthorName(item.author?.name)}</span>
                        <span>{formatDate(item.published_at || item.created_at)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SECTION BERITA TERKAIT */}
        {relatedNews.length > 0 && (
          <div className="border-t-2 border-gray-100 dark:border-gray-800 pt-8 mt-12 mb-20">
            <h2 className="text-3xl font-bold uppercase text-gray-700 dark:text-white mb-8 tracking-tight">BERITA TERKAIT</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {relatedNews.map((item) => (
                <div key={item.id} className="flex gap-5 group cursor-pointer items-start" onClick={() => onNavigateToDetail(item.id)}>
                  <img 
                    src={getImageUrl(item.image || item.cover)} 
                    alt="" 
                    className="w-40 h-28 object-cover rounded-sm flex-shrink-0 bg-gray-100 dark:bg-gray-800"
                    loading="lazy"
                    onError={(e) => { 
                      console.error("Image load failed:", item.image || item.cover);
                      e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                    }}
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-[11px] uppercase font-bold tracking-wide">
                      <User size={14} className="grayscale" />
                      <span className="text-gray-800 dark:text-gray-300">{formatAuthorName(item.author?.name)}</span>
                      <span className="font-medium text-gray-400 dark:text-gray-500 normal-case ml-1">{formatDate(item.published_at || item.created_at)}</span>
                    </div>
                    <h3 className="font-bold text-md leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors uppercase text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <FooterSection />
    </div>
  );
}