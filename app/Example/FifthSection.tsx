"use client";
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function FifthSection() {
  const pollingItems = [
    {
      id: 1,
      category: "BISNIS",
      image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-mobil-mbg-tabrak-siswa-dan-guru-sdn-kalibaru-01-pagi-1765448194-860x572.webp",
      question: "POLLING: CICILAN KPR RP 300 RIBU PER BULAN SELAMA 40 TAHUN, TERTARIK?",
      options: ["Tertarik", "Enggak sih"],
      status: "1 hari",
      responses: "553 Respon",
      isActive: true
    },
    {
      id: 2,
      category: "GAYA HIDUP",
      image: "https://www.owrite.id/wp-content/uploads/2025/12/image-7-615x410.webp",
      question: "POLLING: APA HAL YANG PALING MEMBUAT KAMU STRES AKHIR-AKHIR INI?",
      options: ["Percintaan", "Keuangan", "Pekerjaan"],
      status: "Polling selesai",
      responses: "1.2K Respon",
      isActive: false
    },
    {
      id: 3,
      category: "BISNIS",
      image: "https://www.owrite.id/wp-content/uploads/2025/12/bappenas-58.webp",
      question: "POLLING: CICILAN KPR RP 300 RIBU PER BULAN SELAMA 40 TAHUN, TERTARIK?",
      options: ["Tertarik", "Enggak sih"],
      status: "19 hari",
      responses: "553 Respon",
      isActive: true
    }
  ];

  // Tentukan slide, tiap slide tampilkan 3 konten
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(pollingItems.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fungsi navigasi
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Dapatkan item yang akan tampil pada slide ini
  const getSlideItems = (slideIdx) => {
    const start = slideIdx * itemsPerSlide;
    return pollingItems.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="hidden md:block w-full bg-white dark:bg-[#0A0A0A] font-sans py-16 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 overflow-hidden">
        
        {/* Header: Title & Navigation Buttons */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
              <div>
                <span className="text-[#D91B1B] font-bold uppercase tracking-widest text-sm block">
                  Suara Anda
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight uppercase text-[#1a1a1a] dark:text-white transition-colors">
                  <span className="text-[#D91B1B]">JAJAK</span> PENDAPAT
                </h2>
              </div>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 text-[#1a1a1a] dark:text-white rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shadow-sm"
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 text-[#1a1a1a] dark:text-white rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shadow-sm"
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div className="relative w-full">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideItems = getSlideItems(slideIndex);
              return (
                <div
                  key={slideIndex}
                  className={`w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 ${slideIndex !== totalSlides - 1 ? "mb-8 md:mb-0" : ""}`}
                >
                  {slideItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col h-full group bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 p-5 rounded-lg hover:shadow-xl transition-all duration-300"
                      >
                        {/* Image */}
                        <div className="w-full aspect-[16/9] overflow-hidden mb-5 bg-gray-100 dark:bg-gray-800 rounded-md relative">
                          <img 
                            src={item.image} 
                            alt={item.category} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <span className="absolute top-2 left-2 bg-white/90 text-[#1a1a1a] text-[10px] font-bold px-2 py-1 uppercase rounded-sm shadow-sm backdrop-blur-sm">
                             {item.category}
                          </span>
                        </div>

                        {/* Question */}
                        <h3 className="text-lg font-serif font-bold text-[#1a1a1a] dark:text-gray-100 leading-snug mb-4 h-[56px] overflow-hidden line-clamp-2 group-hover:text-[#D91B1B] transition-colors">
                          {item.question}
                        </h3>

                        {/* Options */}
                        <div className="space-y-3 mb-6 flex-grow">
                          {item.options.map((option, opIdx) => (
                            <div key={opIdx} className="relative group/option">
                               <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-700 rounded-md cursor-pointer hover:bg-white dark:hover:bg-[#222] hover:border-[#D91B1B] dark:hover:border-[#D91B1B] transition-colors">
                                   <span className="text-[13px] text-gray-600 dark:text-gray-300 font-medium group-hover/option:text-[#1a1a1a] dark:group-hover/option:text-white transition-colors">{option}</span>
                                   <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 group-hover/option:border-[#D91B1B]"></div>
                               </div>
                            </div>
                          ))}
                        </div>

                        {/* Footer Metadata */}
                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${item.status.includes("selesai") ? 'bg-gray-400 dark:bg-gray-600' : 'bg-green-500 animate-pulse'}`}></span>
                            <span className="font-medium">{item.status}</span>
                          </div>
                          <span className="font-semibold text-gray-600 dark:text-gray-400">{item.responses}</span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}