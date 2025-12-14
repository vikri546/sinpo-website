"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function SeventhSection() {
  const newsCategories = [
    {
      id: 1,
      category: "POLITIK",
      // Menggunakan kelas tailwind standar untuk border color
      borderColor: "border-[#D91B1B]", 
      mainNews: {
        image: "https://www.owrite.id/wp-content/uploads/2025/12/a97d6fd2-6051-4d29-983c-d47e13fe0dc1-615x410.webp",
        title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..."
      },
      subNews: [
        { id: 101, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }
      ]
    },
    {
      id: 2,
      category: "EKBIS",
      borderColor: "border-[#D91B1B]", 
      mainNews: {
        image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-sampah-kayu-gelondongan-banjir-bandang-di-tapanuli-selatan-1764575769-615x410.webp",
        title: "Lestari Moerdijat: Tantangan Dalam Pengembangan Sektor UMKM Harus Dapat ..."
      },
      subNews: [
        { id: 201, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }
      ]
    },
    {
      id: 3,
      category: "OLAHRAGA",
      borderColor: "border-[#D91B1B]",
      mainNews: {
        image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-jumlah-penerima-manfaat-program-mbg-1765430610-615x410.webp",
        title: "STY Bicara Jelang Indonesia Versus Bahrain: Laga Sangat Penting Bagi Kami"
      },
      subNews: [
        { id: 301, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }
      ]
    },
    {
      id: 4,
      category: "BUDAYA",
      borderColor: "border-[#D91B1B]",
      mainNews: {
        image: "https://www.owrite.id/wp-content/uploads/2025/12/3808menpora-erick-harap-pundi-medali-emas-indonesia-terus-bertambah-di-ajang-sea-games-2025-thailand-615x410.webp",
        title: "Perjamuan Makan Siang, Gibran Kenalkan Kuliner Nusantara Ke Wapres RRT"
      },
      subNews: [
        { id: 401, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }
      ]
    }
  ];

  return (
    <section className="hidden md:block w-full bg-white font-sans py-16 border-b border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Grid 4 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {newsCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col group/cat">
              {/* Category Header */}
              <div className="flex items-center justify-between mb-5 border-b border-gray-200 pb-2">
                 {/* text-news-dark diganti text-[#1a1a1a] */}
                 <h2 className={`text-xl font-bold uppercase text-[#1a1a1a] tracking-wide pl-2 border-l-4 ${cat.borderColor}`}>
                   {cat.category}
                 </h2>
                 {/* text-news-red diganti text-[#D91B1B] */}
                 <ArrowRight size={16} className="text-gray-400 group-hover/cat:text-[#D91B1B] transition-colors opacity-0 group-hover/cat:opacity-100" />
              </div>

              {/* Main News Item */}
              <div className="group cursor-pointer mb-6">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-md bg-gray-100 mb-4 shadow-sm relative">
                  <img 
                    src={cat.mainNews.image} 
                    alt={cat.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <h3 className="text-base font-serif font-bold text-[#1a1a1a] leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-3">
                  {cat.mainNews.title}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gray-200 mb-4"></div>

              {/* Sub News List */}
              <div className="flex flex-col gap-4">
                {cat.subNews.map((sub) => (
                  <div key={sub.id} className="group cursor-pointer">
                    <h4 className="text-[15px] font-medium text-gray-700 leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-2">
                      {sub.title}
                    </h4>
                  </div>
                ))}
                
                {/* Additional Divider below sub news */}
                <div className="w-full h-px bg-gray-100 mt-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Button Indeks Berita */}
        <div className="mt-20 flex justify-center">
          <button className="px-10 py-3 w-full md:w-auto bg-white hover:bg-[#1a1a1a] hover:text-white text-[#1a1a1a] font-bold text-sm rounded-sm border-2 border-[#1a1a1a] transition-all uppercase tracking-widest shadow-sm hover:shadow-lg">
            Indeks Berita Terkini
          </button>
        </div>

      </div>
    </section>
  );
}