"use client";
import React from 'react';

export default function ThirdSection() {
  const trendNews = [
    {
      id: 1,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/image-25-615x410.webp",
      author: "JONI DE KILL",
      date: "Senin, 13 Mei 2024",
      title: "BPK SELAMATKAN UANG NEGARA RP13,6 TRILIUN SELAMA SEMESTER I 2024"
    },
    {
      id: 2,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/aco-hafidz-nc-hideo-kojima-artwork-615x410.webp",
      author: "JONI DE KILL",
      date: "Senin, 13 Mei 2024",
      title: "BANYAK KEMENTERIAN YANG DIPECAH, DPR: TUGAS PENGAWASAN AKAN SEMAKIN ..."
    },
    {
      id: 3,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/doll-figures-3015495_1280-615x410.webp",
      author: "JONI DE KILL",
      date: "Senin, 13 Mei 2024",
      title: "RAJA JULI SEBUT SERAGAM PEMBEKALAN KABINET SUDAH DIBAGIKAN MAYOR TEDDY"
    },
    {
      id: 4,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kebakaran-gedung-perusahaan-penyedia-pesawat-nirawak-1765352318-615x410.webp",
      author: "JONI DE KILL",
      date: "Senin, 13 Mei 2024",   
      title: "RI-QATAR TEKEN KERJASAMA BEASISWA BAGI MAHASISWA AFGHANISTAN"
    },
    {
      id: 5,
      image: "https://www.owrite.id/wp-content/uploads/2025/12/pray-6268224_1280-615x410.webp",
      author: "JONI DE KILL",
      date: "Senin, 13 Mei 2024",
      title: "BENTUK BADAN PERCEPATAN PENGENTASAN KEMISKINAN: KESULITAN HARUS SEGERA ..."
    }
  ];

  const trendingTopics = [
    { name: "Pemilu 2024", link: "#" }, { name: "Pembekalan Menteri", link: "#" }, { name: "Jakarta", link: "#" }, { name: "btc", link: "#" },
    { name: "DPR", link: "#" }, { name: "Jakarta", link: "#" }, { name: "Kasus Travel", link: "#" }, { name: "eth", link: "#" }
  ];

  return (
    <section className="hidden md:block w-full bg-white font-sans py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        
        {/* Section Header - Centered */}
        <div className="text-center mb-10">
           <h2 className="text-3xl font-black uppercase text-[#1a1a1a] tracking-tight">
             Tren Hari Ini
           </h2>
        </div>

        {/* Scrollable Container (Slider) */}
        <div className="relative">
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            {trendNews.map((item, index) => (
              <div 
                key={item.id} 
                className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-center group cursor-pointer flex flex-col"
              >
                {/* Image Container with Overlay */}
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-100 shadow-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Category Tag on Image - Background Merah */}
                  <span className="absolute top-0 left-0 bg-[#D91B1B] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wide">
                    NASIONAL
                  </span>
                  
                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                  
                   {/* Author & Date Overlay */}
                   <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-end text-[10px] font-medium text-white/90">
                     <span className="uppercase tracking-wider">{item.author}</span>
                     <span>{item.date}</span>
                   </div>
                </div>

                {/* News Title with Number (Number hidden on Desktop) */}
                <div className="flex gap-3">
                   <span className="text-3xl font-black text-gray-400 group-hover:text-[#D91B1B] transition-colors leading-none pt-1 lg:hidden">
                      {index + 1}
                   </span>
                   <h3 className="text-sm font-bold leading-relaxed text-[#1a1a1a] uppercase group-hover:text-[#D91B1B] transition-colors line-clamp-3">
                     {item.title}
                   </h3>
                </div>
              </div>
            ))}

            {/* 6th Slot: Trending Topics (Hidden on Desktop) */}
             <div className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-center flex flex-col bg-gray-50 p-6 rounded-sm border border-gray-100 lg:hidden">
                <div className="text-center mb-6">
                    <h3 className="text-xl font-medium tracking-wide uppercase text-gray-700">Trending Topics</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 content-start">
                   {trendingTopics.map((topic, i) => (
                       <a key={i} href={topic.link} className="text-[11px] text-gray-500 hover:text-[#D91B1B] border-b border-transparent hover:border-[#D91B1B] transition-colors">
                          {topic.name}
                       </a>
                   ))}
                </div>
             </div>

          </div>
          
          {/* Custom Scrollbar Hiding Style */}
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
            .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
            }
          `}} />
        </div>

        {/* Pagination Dots (Static Visual) - Omitted if not needed, but keeping for safe measure if user wants it, though layout is grid now */}
        <div className="flex justify-center gap-2 mt-2 md:hidden">
          <div className="w-2 h-2 rounded-full bg-[#D91B1B]"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>

      </div>
    </section>
  );
}