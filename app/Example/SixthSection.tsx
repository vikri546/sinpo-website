"use client";
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

// --- Custom Icon: AnchorLogoBlock ---
const AnchorLogoBlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.5 17.145s.638-.579.706-.983c.025-.154-.037-.624-.116-1.22c-.188-1.413-.47-3.532.116-3.78c.5-.21 1.24 1.231 1.834 2.39c.394.77.725 1.414.88 1.37c.132-.038-.005-.84-.185-1.902c-.348-2.044-.86-5.047.077-5.388c.91-.33 2.109 2.54 2.976 4.62c.49 1.175.876 2.097 1.043 2.043c.183-.058-.03-1.786-.282-3.851c-.387-3.154-.87-7.096-.193-7.096c1.19 0 2.47 3.86 3.428 6.747c.58 1.75 1.043 3.142 1.294 3.1c.263-.044.273-.774.285-1.679c.019-1.381.043-3.17.983-3.551c.82-.333 1.651 0 1.651 0l.503 2.007c-.522-.09-1.52.045-1.594.932c-.022.268-.032.732-.044 1.294c-.043 2.067-.115 5.472-.944 5.472c-.964 0-2.22-3.62-3.115-6.197c-.509-1.467-.9-2.596-1.055-2.529c-.156.068-.047 1.243.09 2.71c.235 2.51.55 5.876-.256 6.016c-.833.145-2.028-2.728-2.85-4.705c-.437-1.05-.769-1.847-.884-1.802c-.123.047-.057.897.027 1.968c.143 1.848.338 4.354-.293 4.54c-.849.248-1.48-1.4-1.947-2.617c-.27-.704-.484-1.263-.653-1.229c-.133.027-.104.375-.064.852c.092 1.104.24 2.897-1.418 2.993z" clipRule="evenodd"></path>
  </svg>
);

export default function SixthSection() {
  // --- DATA DUMMY ---

  // 1. Data Berita Kiri (10 Item)
  const leftNews = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    image: `https://unsplash.it/300/200?random=${i}`,
    author: "George Asep",
    date: "Senin, 33 Mei 2024",
    title: i % 2 === 0 
      ? "Komnas HAM Sodorkan Rekomendasi Agenda HAM Untuk Pemerintahan Prabowo" 
      : "Ratusan Personel Gabungan Kawal Kampanye Pilgub Jakarta Hari Ini",
  }));

  // 2. Data Opini
  const opinions = [
    {
      id: 1,
      author: "HAFIDZ NURCAHYO",
      avatar: "https://placehold.co/50x50/333/fff?text=HN",
      title: "BICARA SOAL DEMOKRASI YANG SEHARUSNYA TIDAK LAGI ADA KEKELIRUAN",
      date: "Senin, 33 Mei 2024"
    },
    {
      id: 2,
      author: "TIKANIA CO",
      avatar: "https://placehold.co/50x50/555/fff?text=TC",
      title: "KAI ALIHKAN 32 PERJALANAN KE STASIUN JATINEGARA SAAT PELANTIKAN ...",
      date: "Senin, 33 Mei 2024"
    }
  ];

  // 3. Data Visual (Slider)
  const visualSlides = [
    {
      id: 1,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/cf0a911c-1202-46f6-ac39-aaa3dced4cac-615x410.webp",
      title: "PRABOWO TERCATAT RAJIN LAPORKAN LHKPN"
    },
    {
      id: 2,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-11-at-12.21.10_63b73acf-615x410.webp",
      title: "MERAH PUTIH BERKIBAR DI KANCAH DUNIA"
    },
    {
      id: 3,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-raker-komisi-xi-dpr-dengan-menteri-keuangan-1765427806-615x410.webp",
      title: "HIJAU ALAM INDONESIA YANG MEMUKAU"
    }
  ];

  // --- LOGIC SLIDER VISUAL (Auto Slide 5 Detik) ---
  const [currentVisual, setCurrentVisual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVisual((prev) => (prev === visualSlides.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 detik

    return () => clearInterval(interval);
  }, [visualSlides.length]);

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans py-16 border-b border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
          
          {/* --- LEFT COLUMN (List Berita - 10 Item) --- */}
          {/* Mobile: Order 2 (Bottom), Desktop: Order 1 (Left) */}
          <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
               <h2 className="text-2xl font-serif font-bold uppercase text-black dark:text-white whitespace-nowrap">Berita Lainnya</h2>
               <div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
            </div>

            {/* --- MOBILE VIEW: Featured + List (< md) --- */}
            <div className="block md:hidden">
                {/* Featured Item (Index 0) */}
                {leftNews.length > 0 && (
                  <div className="mb-8 group cursor-pointer">
                      <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm bg-gray-100 dark:bg-gray-800">
                          <img 
                              src={leftNews[0].image} 
                              alt={leftNews[0].title} 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">{leftNews[0].author}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-600 font-light">• {leftNews[0].date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-black dark:text-white leading-snug group-hover:text-[#D91B1B] transition-colors">
                          {leftNews[0].title}
                      </h2>
                  </div>
                )}

                {/* List Items (Index 1+) */}
                <div className="flex flex-col gap-6 border-l border-gray-200 dark:border-gray-800 ml-2 pl-6">
                    {leftNews.slice(1).map((item) => (
                        <div key={item.id} className="relative flex gap-4 items-start group cursor-pointer">
                            {/* Dot Timeline */}
                            <div className="absolute -left-[31px] top-4 w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-[#D91B1B] transition-colors"></div>

                            {/* Thumbnail Kecil */}
                            <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-black dark:text-gray-200 leading-snug line-clamp-3 group-hover:text-[#D91B1B] transition-colors mb-1">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-2">
                                   <span className="text-[10px] text-gray-400 dark:text-gray-500 font-light">{item.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- DESKTOP VIEW: Original List (>= md) --- */}
            <div className="hidden md:flex flex-col gap-6">
              {leftNews.map((item) => (
                <div key={item.id} className="group cursor-pointer bg-white dark:bg-[#0A0A0A] border-b border-gray-100 dark:border-gray-800 pb-6 hover:bg-gray-50/50 dark:hover:bg-[#111]/50 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  {/* Image */}
                  <div className="w-full md:w-[240px] aspect-[4/3] md:h-[160px] flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 shadow-sm relative">
                    <img 
                      src={item.image} 
                      alt="News Thumbnail" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 py-1">
                     {/* Meta */}
                     <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border border-white dark:border-gray-600 shadow-sm">
                           <img src="https://placehold.co/50x50/333/fff?text=GA" alt="Author" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-bold text-black dark:text-gray-300">{item.author}</span>
                          <span className="text-[10px] text-gray-400 dark:text-gray-500">{item.date}</span>
                        </div>
                     </div>

                     {/* Title */}
                     <h3 className="text-xl font-serif font-bold text-black dark:text-white leading-tight group-hover:text-[#D91B1B] transition-colors line-clamp-2">
                       {item.title}
                     </h3>
                     
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 font-light">
                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                     </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Button Muat Lagi */}
            <div className="mt-8">
               <button className="w-full bg-gray-50 dark:bg-[#111] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-gray-600 dark:text-gray-400 font-bold py-3 rounded-sm transition-all text-sm uppercase tracking-wider border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white hover:shadow-lg">
                 Muat Berita Lainnya
               </button>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Opini & Visual) --- */}
          {/* Mobile: Order 1 (Top), Desktop: Order 2 (Right) */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col gap-12">
            
            {/* 1. BAGIAN OPINI! */}
            <div className="relative">
               {/* Background Title (Miring & Pudar) - TETAP ADA */}
               <h2 
                 className="absolute -top-4 -left-6 text-7xl md:text-8xl font-black text-gray-100 dark:text-[#1a1a1a] -rotate-6 select-none z-0 transition-colors"
                 style={{ fontFamily: 'sans-serif' }}
               >
                 OPINI
               </h2>

               <div className="relative z-10 pt-16">
                  {/* List Opini */}
                  <div className="flex flex-col gap-6">
                     
                     {opinions.map((op, idx) => (
                        <div key={op.id} className="bg-white dark:bg-[#111] p-5 rounded-lg border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all cursor-pointer group">
                           <div className="flex justify-between items-start mb-3">
                              <span className="text-xs font-bold text-blue-900 dark:text-blue-400 uppercase tracking-wider">{op.author}</span>
                              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-600 shadow-sm group-hover:border-[#D91B1B] transition-colors">
                                 <img src={op.avatar} alt={op.author} className="w-full h-full object-cover grayscale" />
                              </div>
                           </div>
                           <h3 className="text-lg font-serif font-bold text-black dark:text-white leading-tight mb-3 group-hover:text-[#D91B1B] transition-colors">
                              {op.title}
                           </h3>
                           <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">{op.date}</span>
                        </div>
                     ))}
                  </div>

                  {/* Link 'lainnya' */}
                  <div className="flex items-center justify-end gap-2 mt-4 mb-8">
                     <div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div>
                     <span className="text-xs font-bold text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#D91B1B] uppercase tracking-wider hover:underline">Lihat Opini Lainnya</span>
                  </div>

                  {/* Audio Player Visual - UPDATED & STATIC COLOR */}
                  {/* Menggunakan hex codes eksplisit untuk background dan text agar tidak berubah saat tema berubah */}
                  <div className="bg-[#ffffff] dark:bg-[#1a1a1a] rounded-md p-5 flex flex-col gap-4 shadow-lg text-[#1a1a1a] dark:text-white relative overflow-hidden group border border-gray-100 dark:border-gray-800 transition-colors">
                     
                    <div className="flex items-center gap-4 relative z-10">
                      <div className="flex items-center justify-center flex-shrink-0">
                        {/* New Anchor Logo Block Icon */}
                        <div className="w-12 h-12 flex items-center justify-center text-[#1a1a1a] dark:text-white">
                           <AnchorLogoBlock style={{ fontSize: '48px' }} />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold leading-tight line-clamp-2 text-[#1a1a1a]/90 dark:text-white/90">
                        JUBIR DEMOKRAT OPTIMIS AHY SUKSES PIMPIN KEMENKO INFRASTRUKTUR DAN ...
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 relative z-10">
                      <button className="w-8 h-8 rounded-full bg-[#ffffff] dark:bg-[#333] flex items-center justify-center text-[#000000] dark:text-white hover:bg-[#D91B1B] hover:text-[#ffffff] transition-colors flex-shrink-0">
                         <Play size={14} fill="currentColor" />
                      </button>
                      {/* Progress Bar Visual - FULL RED */}
                      <div className="h-1 bg-[#ffffff]/20 dark:bg-white/10 flex-1 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-[#D91B1B] rounded-full"></div>
                      </div>
                      <span className="text-[10px] text-[#1a1a1a]/60 dark:text-white/60 font-mono">03:51</span>
                    </div>
                  </div>
               </div>
            </div>

            {/* 2. BAGIAN VISUAL (Slider) */}
            <div className="relative mt-12">
               {/* Background Title (Miring & Pudar) */}
               <h2 
                 className="absolute -top-4 -left-6 text-7xl md:text-8xl font-black text-gray-100 dark:text-[#1a1a1a] -rotate-6 select-none z-0 transition-colors"
                 style={{ fontFamily: 'sans-serif' }}
               >
                 VISUAL
               </h2>

               <div className="relative z-10 pt-16">
                  {/* Slider Container */}
                  <div className="w-full aspect-[4/6] bg-black rounded-sm overflow-hidden relative group shadow-lg">
                     {visualSlides.map((slide, index) => (
                        <div 
                           key={slide.id}
                           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVisual ? 'opacity-100' : 'opacity-0'}`}
                        >
                           <img 
                              src={slide.image} 
                              alt={slide.title} 
                              className="w-full h-full object-cover"
                           />
                           {/* Overlay Text */}
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                              {/* Label "GALLERI FOTO" DIHAPUS */}
                              <h3 className="text-white text-2xl font-serif font-bold text-center leading-tight drop-shadow-md">
                                 {slide.title}
                              </h3>
                           </div>
                        </div>
                     ))}
                  </div>
                  
                  {/* Slider Dots (Clickable) */}
                  <div className="flex justify-center gap-2 mt-4">
                     {visualSlides.map((_, idx) => (
                        <button 
                           key={idx} 
                           onClick={() => setCurrentVisual(idx)} // Menambahkan fungsi klik
                           className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentVisual ? 'bg-[#D91B1B] w-6' : 'bg-gray-300 dark:bg-gray-700 w-2 hover:bg-gray-400'}`}
                           aria-label={`Pindah ke slide ${idx + 1}`}
                        />
                     ))}
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}