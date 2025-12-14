"use client";
import React from 'react';

// --- Custom Icons ---

const UpDownDuotone = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></path>
  </svg>
);

export default function FirstSection() {
  // Data dummy
  const scrollableNews = [
    {
      id: 1,
      category: "Peristiwa",
      color: "bg-[#D91B1B]", 
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kawasan-terisolasi-dan-rawan-bencana-susulan-1765189957-860x573.webp",
      title: "BPK SELAMATKAN UANG NEGARA RP13,6 TRILIUN SELAMA SEMESTER I 2024",
      time: "Senin, 13 Desember 2025"
    },
    {
      id: 2,
      category: "Hukum",
      color: "bg-[#D91B1B]", 
      image: "https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251212-WA0002-615x410.webp",
      title: "BANYAK KEMENTERIAN YANG DIPECAH, DPR: TUGAS PENGAWASAN AKAN SEMAKIN EFEKTIF",
      time: "Baru saja"
    },
    {
      id: 3,
      category: "Nasional",
      color: "bg-[#D91B1B]", 
      image: "https://www.owrite.id/wp-content/uploads/2025/12/Luban_1765522081433fb02b075-0084-416c-b134-9ee972d60efa-615x410.webp",
      title: "TEGAS, PRABOWO KE PARA MENTERI: COPOT PEJABAT YANG TAK KERJA KERAS",
      time: "1 Jam yang lalu"
    },
    {
      id: 4,
      category: "Teknologi",
      color: "bg-[#D91B1B]", 
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kericuhan-buntut-pengeroyokan-penagih-utang-di-kalibata-1765528652-615x410.webp",
      title: "BANYAK KEMENTERIAN YANG DIPECAH, DPR: TUGAS PENGAWASAN AKAN SEMAKIN EFEKTIF",
      time: "2 Jam yang lalu"
    },
    {
      id: 5,
      category: "Ekonomi",
      color: "bg-[#D91B1B]", 
      image: "https://www.owrite.id/wp-content/uploads/2025/12/image-10-1-615x410.webp",
      title: "BANYAK KEMENTERIAN YANG DIPECAH, DPR: TUGAS PENGAWASAN AKAN SEMAKIN EFEKTIF",
      time: "3 Jam yang lalu"
    }
  ];

  return (
    <section className="w-full bg-white font-sans pt-0 md:pt-8 pb-12 border-b border-gray-100">
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-8">
          
          {/* --- LEFT COLUMN (Berita Utama) --- */}
          <div className="lg:col-span-8 relative group cursor-pointer">
            
            {/* Image Container */}
            {/* Mobile: Full width, square-ish/video aspect. Desktop: Fixed height rounded */}
            <div className="w-full h-auto aspect-[4/3] md:aspect-auto md:h-[600px] overflow-hidden md:rounded-md relative shadow-none md:shadow-sm">
              <img 
                src="https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0005-860x482.webp" 
                alt="Main News" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* --- MOBILE SPECIFIC CONTENT (Below Image) --- */}
            <div className="block md:hidden px-4 py-4">
                {/* Meta Info Row */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 mb-3">
                    <span>Senin, 13 Desember 2025</span>
                    <span>Foto: Kontributor Sin Po</span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold leading-tight text-center text-black mb-4 uppercase">
                  TEGAS, PRABOWO KE PARA MENTERI: COPOT PEJABAT YANG TAK KERJA KERAS
                </h2>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                </div>
            </div>

            {/* --- DESKTOP SPECIFIC OVERLAY (Hidden on Mobile) --- */}
            <div className="hidden md:block absolute left-4 bottom-4 right-4 md:left-20 md:bottom-20 md:right-auto md:max-w-[85%] z-10">
              <div className="bg-[#D91B1B] p-6 rounded-[5px] shadow-lg">
                <span className="inline-block text-white text-[10px] font-bold mb-3 uppercase tracking-wider">
                  Politik
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight mb-4 text-white group-hover:underline decoration-white decoration-2 underline-offset-4">
                  Prabowo: Demokratisasi yang Paling Cepat Dirasakan Rakyat Adalah Akses Pendidikan
                </h2>
                <div className="flex items-center gap-4 text-xs md:text-sm text-gray-100 font-medium">
                  <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50 bg-white">
                        <img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" alt="Author" className="w-full h-full object-cover" />
                     </div>
                     <span className="uppercase tracking-wide text-white">Sinpo Redaksi</span>
                  </div>
                  <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                  <span>Senin, 13 Desember 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN (Side News) --- */}
          <div className="lg:col-span-4 flex flex-col gap-6 px-4 md:px-0">
            
            {/* Top Side Article (Static) - HIDDEN ON MOBILE as per reference image design */}
            <div className="hidden md:flex flex-col gap-3 group cursor-pointer bg-white">
              <div className="w-full h-48 overflow-hidden rounded-md relative">
                <img 
                  src="https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kilang-pertamina-dumai-tingkatkan-kualitas-produksi-bahan-bakar-1765349771-615x410.webp" 
                  alt="Side News 1" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                 <span className="absolute top-2 left-2 bg-[#D91B1B] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">
                  EKONOMI
                </span>
              </div>
              <div className="flex flex-col gap-2">
                 <h3 className="text-xl font-serif font-bold text-black leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-3">
                   Tegas, Prabowo ke Para Menteri: Copot Pejabat yang Tak Kerja Keras
                 </h3>
                 <div className="flex justify-between text-[11px] text-gray-500 font-medium">
                   <span>Oleh: Redaksi</span>
                   <span>10 Menit yang lalu</span>
                 </div>
              </div>
            </div>

            {/* Divider (Desktop Only) */}
            <hr className="hidden md:block border-gray-100" />

            {/* --- LIST CONTAINER --- */}
            {/* Desktop: Scrollable list with thumbnails */}
            {/* Mobile: Gray box with large numbers */}
            <div className="relative md:h-[300px] group/list bg-gray-50 md:bg-white rounded-xl md:rounded-none p-4 md:p-0">
               
               {/* Mobile Background Watermark/Decoration (Optional - to match gray feel) */}
               
               {/* Fade Effect Top (Desktop Only) */}
               <div className="hidden md:block absolute -mt-6 left-0 w-full h-2 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

               {/* ICON SCROLL (Desktop Only) */}
               <div className="hidden md:flex absolute right-0 mt-30 transform -translate-y-1/2 z-20 pl-2 bg-white items-center justify-center text-gray-300 hover:text-[#D91B1B] transition-colors cursor-pointer pointer-events-none md:pointer-events-auto">
                  <UpDownDuotone width={24} height={24} />
               </div>

               {/* Content List */}
               <div className="h-auto md:h-full overflow-y-visible md:overflow-y-auto pr-0 md:pr-8 scrollbar-hide flex flex-col snap-y snap-mandatory -mt-0 md:-mt-6 gap-4 md:gap-0">
                  {scrollableNews.map((item, index) => (
                    <div key={item.id} className="snap-start flex flex-col justify-between min-h-0 md:min-h-[100px]">
                        
                        {/* Wrapper Item */}
                        <div className="flex gap-4 group cursor-pointer items-start md:items-center py-2 relative">
                           
                           {/* --- MOBILE NUMBERING (1, 2, 3...) --- */}
                           <div className="block md:hidden w-8 text-center flex-shrink-0">
                              <span className="text-6xl font-bold text-gray-200 leading-[0.8] font-sans">
                                {index + 1}
                              </span>
                           </div>

                           {/* --- DESKTOP IMAGE (Hidden on Mobile) --- */}
                           <div className="hidden md:block w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100">
                             <img 
                               src={item.image} 
                               alt={item.category} 
                               className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                             />
                           </div>

                           {/* --- TEXT CONTENT --- */}
                           <div className="flex-1 flex flex-col justify-center">
                             {/* Category Tag (Desktop Only) */}
                             <span className={`hidden md:inline-block ${item.color} text-white text-[9px] font-bold px-1.5 py-0.5 mb-1 w-fit uppercase tracking-wider rounded-sm`}>
                               {item.category}
                             </span>

                             {/* Title */}
                             {/* Mobile: Uppercase, Sans-serif bold, darker */}
                             {/* Desktop: Serif, bold */}
                             <h4 className="text-sm md:text-sm font-bold text-black leading-snug mb-1 group-hover:text-[#D91B1B] transition-colors line-clamp-3 md:line-clamp-2 md:font-serif uppercase md:normal-case">
                               {item.title}
                             </h4>

                             {/* Time (Desktop Only) */}
                             <p className="hidden md:block text-[10px] text-gray-400">{item.time}</p>
                           </div>
                        </div>

                        {/* Divider (Desktop Only) */}
                        <hr className="hidden md:block border-gray-50 w-full" />
                    </div>
                  ))}
               </div>

               {/* Fade Effect Bottom (Desktop Only) */}
               <div className="hidden md:block absolute -mt-2 left-0 w-full h-4 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

            </div>

            {/* Custom Style */}
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

        </div>
      </div>
    </section>
  );
}