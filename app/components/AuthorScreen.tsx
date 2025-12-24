"use client";
import React, { useState, useEffect, useCallback } from "react";
import { User, RefreshCw, AlertCircle, Mail, Globe, Twitter, Instagram } from "lucide-react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import { getWartawan, getBerita } from "../services/api";
import { NewsItem, Author } from "../types/api";
import { getImageUrl, safeArray, formatAuthorName, formatRelativeTime } from "../utils/helpers";

interface AuthorScreenProps {
  authorId: string | number;
  onNavigateToHome: () => void;
  onNavigateToCategory: (id?: string | number) => void;
  onNavigateToDetail: (id: string | number) => void;
}

export default function AuthorScreen({
  authorId,
  onNavigateToHome,
  onNavigateToCategory,
  onNavigateToDetail,
}: AuthorScreenProps) {
  const [author, setAuthor] = useState<Author | null>(null);
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const detailRes = await getWartawan.detail(authorId);
      if (detailRes.success && detailRes.data) {
        setAuthor(detailRes.data);
        // Fetch articles by this author
        const newsRes = await getBerita.list({ penulis: detailRes.data.name, limit: 12 });
        setArticles(safeArray(newsRes.data));
      } else {
        throw new Error("Gagal memuat profil wartawan.");
      }
    } catch (err: any) {
      setError(err.message || "Gagal memuat profil.");
    } finally {
      setLoading(false);
    }
  }, [authorId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] space-y-4">
        <RefreshCw className="animate-spin text-[#D91B1B]" size={32} />
        <p className="text-gray-500">Memuat profil wartawan...</p>
      </div>
    );
  }

  if (error || !author) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] p-4 text-center">
        <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
        <p className="text-gray-500 mb-6">{error}</p>
        <button onClick={onNavigateToHome} className="underline text-blue-500">Kembali ke Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-black dark:text-white transition-colors duration-300">
      <HeaderSection 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToCategory={onNavigateToCategory} 
        onNavigateToGallery={() => {}} // TODO: implement
      />

      {/* AUTHOR HEADER */}
      <section className="bg-gray-50 dark:bg-black py-20 border-b border-gray-100 dark:border-gray-900">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gray-200 shrink-0">
                 <img 
                   src={author.avatar || "https://ui-avatars.com/api/?name=" + formatAuthorName(author.name) + "&background=D91B1B&color=fff&size=512"} 
                   alt={author.name} 
                   className="w-full h-full object-cover" 
                   loading="lazy"
                   onError={(e) => { 
                     console.error("Avatar load failed:", author.name);
                     e.currentTarget.src = 'https://ui-avatars.com/api/?name=' + formatAuthorName(author.name) + '&background=D91B1B&color=fff&size=512'; 
                   }}
                 />
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                  {formatAuthorName(author.name)}
                </h1>
                <span className="inline-block bg-[#D91B1B] text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest w-fit mx-auto md:mx-0">
                  REDAKSI SINPO
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed italic max-w-3xl">
                {author.bio || "Jurnalis berpengalaman yang berdedikasi untuk menyajikan berita akurat, tajam, dan terpercaya di kanal SIN PO."}
              </p>

              <div className="flex items-center justify-center md:justify-start gap-6 pt-4 text-gray-400">
                <Mail size={18} className="hover:text-[#D91B1B] cursor-pointer transition-colors" />
                <Twitter size={18} className="hover:text-[#D91B1B] cursor-pointer transition-colors" />
                <Instagram size={18} className="hover:text-[#D91B1B] cursor-pointer transition-colors" />
                <Globe size={18} className="hover:text-[#D91B1B] cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHOR ARTICLES */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight">KONTRIBUSI BERITA</h2>
            <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {articles.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer border-b border-gray-50 dark:border-gray-900 pb-8 hover:border-[#D91B1B] transition-colors"
                  onClick={() => onNavigateToDetail(item.id)}
                >
                  <div className="aspect-video overflow-hidden rounded-sm bg-gray-100 mb-6">
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
                  <div className="space-y-3">
                    <div className="text-[10px] font-bold text-[#D91B1B] uppercase tracking-widest">
                      {item.category?.name}
                    </div>
                    <h3 className="text-xl font-bold uppercase leading-tight line-clamp-3 group-hover:text-[#D91B1B] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-medium">
                      {formatRelativeTime(item.published_at || item.created_at)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-gray-400 uppercase font-black tracking-widest">
              Belum ada artikel publikasi.
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </div>
  );
}
