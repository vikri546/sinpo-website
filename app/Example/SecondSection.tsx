"use client";
import React from 'react';

export default function SecondSection() {
  const sidebarNews = [
    {
      category: "POJOK SIN PO",
      image: "https://www.owrite.id/wp-content/uploads/2025/12/Luban_17653769715179a927ffc-2ee5-4afd-95d5-8213ad1bfcc3-860x645.webp",
      title: "PECINAN SEMARANG, TERGESER KEBIJAKAN KOLONIAL ...",
      id: 1
    },
    {
      category: "BONGKAR",
      image: "https://www.owrite.id/wp-content/uploads/2025/12/Screenshot-2025-12-10-160356-420x280.webp",
      title: "POLEMIK KAMAR DAGANG INDUSTRI, ANINDYA VERSUS ARSJAD ...",
      isRedTitle: true,
      id: 2
    }
  ];

  const recentNews = [
    {
      id: 1,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0002-615x410.webp",
      author: "George Asep",
      date: "Senin, 33 Mei 2024",
      title: "Prabowo: Demokratisasi Yang Paling Cepat Dirasakan Rakyat Adalah Akses Pendidikan ..."
    },
    {
      id: 2,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kayu-gelondongan-pascabanjir-bandang-di-aceh-utara-1765255762-615x410.webp",
      author: "George Asep",
      date: "Senin, 33 Mei 2024",
      title: "PKS Puji Luhut: Orang Yang Responsif, Wajar Diberi 2 Jabatan"
    },
    {
      id: 3,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0005-615x410.webp",
      author: "George Asep",
      date: "Senin, 33 Mei 2024",
      title: "Dewan Pers, Bawaslu, KPU Dan KPI Bentuk Gugus Tugas Pemantauan Pemberitaan Pilkada"
    },
    {
      id: 4,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/image-6942445-615x410.webp",
      author: "George Asep",
      date: "Senin, 33 Mei 2024",
      title: "Tim Inafis Identifikasi Korban Pesawat Jatuh Di Pohuwato Gorontalo"
    },
    {
      id: 5,
      image: "https://www.owrite.id/wp-content/uploads/2025/10/Ilustrasi-Emas-Batang-615x410.webp",
      author: "George Asep",
      date: "Senin, 33 Mei 2024",
      title: "Mobil Di Bekasi Dibakar OTK Pakai Bom Molotov, Ciri-Ciri Pelaku Terekam CCTV"
    }
  ];

  // Pisahkan berita pertama untuk tampilan mobile "Featured"
  const featuredNews = recentNews[0];
  const otherNews = recentNews.slice(1);

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans py-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* --- LEFT COLUMN (Sidebar / Banner) --- */}
          <div className="hidden lg:block lg:col-span-4 bg-black dark:bg-[#111] text-white p-6 rounded-md h-fit top-24 shadow-lg sticky transition-colors">
            {/* Header Utama Sidebar */}
            <div className="mb-6 pb-4">
              <h2 className="text-3xl font-bold uppercase tracking-wider text-white">TDK KALAH PENTING</h2>
              <div className="w-16 h-1 bg-red-500 mt-2"></div>
            </div>

            <div className="flex flex-col gap-8">
              {sidebarNews.map((item) => (
                <div key={item.id} className="group cursor-pointer">
                  {/* Category Title */}
                  <div className="flex items-center gap-2 mb-3">
                     <span className={`font-black text-xl uppercase ${item.isRedTitle ? 'text-red-500' : 'text-white'}`}>
                       {item.category}
                     </span>
                     <div className="flex-1 h-px bg-gray-700"></div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-full aspect-video overflow-hidden mb-3 rounded-sm border border-gray-700/50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-serif font-bold leading-snug text-gray-100 group-hover:text-red-500 transition-colors">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* --- RIGHT COLUMN (Berita Terkini List) --- */}
          <div className="lg:col-span-8">
            
            {/* MOBILE VIEW */}
            <div className="block md:hidden">
                {/* 1. Header Besar */}
                <div className="mb-6 leading-none">
                    <h1 className="text-5xl font-black text-gray-400 dark:text-gray-600 uppercase tracking-tight">
                        BERITA <br /> 
                        <span className="text-gray-400 dark:text-gray-600">TERKINI</span>
                        <span className="text-black dark:text-white">.</span>
                    </h1>
                </div>

                {/* 2. Featured Post (Top Item) */}
                <div className="mb-8 group cursor-pointer">
                    <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm bg-gray-100 dark:bg-gray-800">
                        <img 
                            src={featuredNews.image} 
                            alt={featuredNews.title} 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-black dark:text-white leading-snug">
                        {featuredNews.title}
                    </h2>
                </div>

                {/* 3. Timeline List (Rest of items) */}
                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-2 pl-6 flex flex-col gap-6">
                    {otherNews.map((news) => (
                        <div key={news.id} className="relative flex gap-4 items-start group cursor-pointer">
                            {/* Dot Timeline */}
                            <div className="absolute -left-[31px] top-4 w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-red-500 transition-colors"></div>

                            {/* Thumbnail Kecil */}
                            <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img 
                                    src={news.image} 
                                    alt={news.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                {/* Metadata Row (Avatar & Name) */}
                                <div className="flex items-center gap-2 mb-1">
                                    <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-700">
                                         {/* Placeholder avatar similar to image */}
                                         <img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" className="w-full h-full object-cover grayscale opacity-70" alt="avatar" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">{news.author}</span>
                                    <span className="text-[10px] text-gray-400 dark:text-gray-600 font-light">{news.date}</span>
                                </div>
                                
                                {/* Title */}
                                <h3 className="text-sm font-bold text-black dark:text-gray-200 leading-snug line-clamp-3 group-hover:text-red-600 transition-colors">
                                    {news.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:block">
                {/* Header Original */}
                <div className="flex items-center gap-4 mb-8">
                   <h2 className="text-2xl font-serif font-bold uppercase text-black dark:text-white whitespace-nowrap">Berita Terkini</h2>
                   <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
                </div>

                {/* News List Timeline Original */}
                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 pl-8 flex flex-col gap-8">
                   {recentNews.map((news) => (
                     <div key={news.id} className="relative group cursor-pointer bg-white dark:bg-[#0A0A0A] hover:bg-gray-50 dark:hover:bg-[#111] p-4 rounded-lg transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shadow-sm hover:shadow-md">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[39px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#0A0A0A] rounded-full border-2 border-gray-300 dark:border-gray-700 group-hover:border-red-500 group-hover:scale-125 transition-all z-10"></div>

                        <div className="flex flex-col md:flex-row gap-6 items-start">
                           {/* Thumbnail */}
                           <div className="w-full md:w-56 h-36 flex-shrink-0 overflow-hidden rounded-md relative shadow-sm bg-gray-100 dark:bg-gray-900">
                              <img 
                                src={news.image} 
                                alt={news.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                              />
                           </div>

                           {/* Content */}
                           <div className="flex-1 flex flex-col justify-between h-36 py-1">
                              {/* Title */}
                              <h3 className="text-xl font-serif font-bold text-black dark:text-gray-100 leading-snug group-hover:text-red-500 transition-colors line-clamp-2">
                                 {news.title}
                              </h3>

                               {/* Metadata Header */}
                               <div className="mt-auto">
                                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 font-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...
                                  </p>
                                  <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                                    <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                                        <img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" alt="Author" className="w-full h-full object-cover grayscale" />
                                    </div>
                                    <span className="text-[11px] font-bold text-black dark:text-gray-300 uppercase">{news.author}</span>
                                    <span className="text-[11px] text-gray-400 dark:text-gray-600">•</span>
                                    <span className="text-[11px] text-gray-400 dark:text-gray-600">{news.date}</span>
                                  </div>
                               </div>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                     <button className="px-6 py-2 w-full md:w-auto bg-white dark:bg-[#1a1a1a] hover:bg-[#1a1a1a] dark:hover:bg-white hover:text-white dark:hover:text-[#1a1a1a] text-[#1a1a1a] dark:text-white font-bold text-sm rounded-sm border-2 border-[#1a1a1a] dark:border-gray-600 transition-all uppercase tracking-widest shadow-sm hover:shadow-lg">
                        Lihat Berita Lainnya
                     </button>
                </div>
            </div>
            {/* ================= END DESKTOP VIEW ================= */}

          </div>

        </div>
      </div>
    </section>
  );
}