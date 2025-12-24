"use client";
import React, { useState, useEffect } from "react";
import { Image as ImageIcon, RefreshCw, AlertCircle, X } from "lucide-react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import { getGallery, getPhoto } from "../services/api";
import { Gallery, Photo } from "../types/api";
import { getImageUrl, safeArray } from "../utils/helpers";

interface GalleryScreenProps {
  onNavigateToHome: () => void;
  onNavigateToCategory: (id?: string | number) => void;
  onNavigateToDetail: (id: string | number) => void;
}

export default function GalleryScreen({
  onNavigateToHome,
  onNavigateToCategory,
  onNavigateToDetail,
}: GalleryScreenProps) {
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [galleryRes, photoRes] = await Promise.allSettled([
        getGallery.list({ limit: 12 }),
        getPhoto.list({ limit: 12 })
      ]);

      if (galleryRes.status === 'fulfilled') {
        setGalleries(safeArray(galleryRes.value.data));
      }
      if (photoRes.status === 'fulfilled') {
        setPhotos(safeArray(photoRes.value.data));
      }

      if (galleryRes.status === 'rejected' && photoRes.status === 'rejected') {
        throw new Error("Gagal memuat galeri.");
      }
    } catch (err: any) {
      setError(err.message || "Gagal memuat data galeri.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-black dark:text-white transition-colors duration-300">
      <HeaderSection 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToCategory={onNavigateToCategory} 
        onNavigateToGallery={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
      />

      <main className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-4xl font-black uppercase tracking-tighter">GALERI FOTO</h1>
          <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <RefreshCw className="animate-spin text-[#D91B1B]" size={32} />
            <p className="text-gray-500">Memuat koleksi foto...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
            <p className="text-gray-500 mb-6">{error}</p>
            <button onClick={fetchData} className="px-6 py-2 bg-[#D91B1B] text-white rounded-full font-bold">Coba Lagi</button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo) => (
              <div 
                key={photo.id} 
                className="group cursor-pointer relative overflow-hidden rounded-sm bg-gray-100 dark:bg-gray-900 aspect-[4/3]"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={getImageUrl(photo.image)} 
                  alt={photo.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { 
                    console.error("Photo load failed:", photo.title);
                    e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-lg leading-tight uppercase line-clamp-2">
                    {photo.title}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ImageIcon size={20} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* RELATED GALLERIES */}
        {!loading && galleries.length > 0 && (
          <div className="mt-24 border-t border-gray-100 dark:border-gray-800 pt-16">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-2xl font-black uppercase tracking-tight">Koleksi Terkait</h2>
              <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleries.map((item) => (
                <div 
                  key={item.id} 
                  className="group cursor-pointer"
                  onClick={() => item.article_id && onNavigateToDetail(item.article_id)}
                >
                  <div className="aspect-square rounded-sm overflow-hidden bg-gray-100 mb-3">
                    <img 
                      src={getImageUrl(item.image)} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                      loading="lazy"
                      onError={(e) => { 
                        console.error("Gallery item load failed:", item.title);
                        e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; 
                      }}
                    />
                  </div>
                  <h4 className="text-xs font-bold uppercase line-clamp-2 group-hover:text-[#D91B1B] transition-colors">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* PHOTO MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12 animate-in fade-in">
          <button 
            onClick={() => setSelectedPhoto(null)} 
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="max-w-6xl w-full flex flex-col items-center">
            <div className="w-full aspect-video md:aspect-[16/10] overflow-hidden rounded-md shadow-2xl mb-8">
               <img 
                 src={getImageUrl(selectedPhoto.image)} 
                 alt={selectedPhoto.title} 
                 className="w-full h-full object-contain" 
                 loading="lazy"
                 onError={(e) => { e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=SinPo+Media'; }}
               />
            </div>
            <div className="text-center max-w-2xl">
               <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
                 {selectedPhoto.title}
               </h2>
               <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                 Foto eksklusif dari portal berita SinPo.ID. Seluruh hak cipta dilindungi undang-undang.
               </p>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
}
