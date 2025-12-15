"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, Menu, Moon, Sun, User, X as CloseIcon, 
  Play, ArrowLeft, ArrowRight, MessageSquare, Type, 
  Share2, Clock, Calendar 
} from "lucide-react";

// --- Asset Imports ---
// Assuming these work based on previous files
import LogoLight from "../images/sinpo.svg";
import LogoDark from "../images/sinpodark.svg";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";

interface HomeScreenProps {
  onNavigateToDetail: () => void;
  onNavigateToCategory: () => void;
}

// --- COMPONENTS ---

// 2. FIRST SECTION
const FirstSection = ({ onNavigateToDetail }: { onNavigateToDetail: () => void }) => {
  const UpDownDuotone = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4v16m0-16L9 7m3-3l3 3m-3 13l-3-3m3 3l3-3"></path>
    </svg>
  );

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
      time: "1 Jam yang lalu",
      isLink: true // Marker for linking
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
    <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans pt-0 md:pt-8 pb-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-0 md:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 md:gap-8">
          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 relative group cursor-pointer">
            <div className="w-full h-auto aspect-[4/3] md:aspect-auto md:h-[600px] overflow-hidden md:rounded-md relative shadow-none md:shadow-sm">
              <img src="https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0005-860x482.webp" alt="Main News" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" />
            </div>
            <div className="block md:hidden px-4 py-4">
                <div className="flex justify-between items-center text-[10px] text-gray-400 dark:text-gray-500 mb-3">
                    <span>Senin, 13 Desember 2025</span>
                    <span>Foto: Kontributor Sin Po</span>
                </div>
                {/* Mobile Link Here */}
                <div onClick={onNavigateToDetail} className="cursor-pointer">
                  <h2 className="text-xl font-bold leading-tight text-center text-black dark:text-white mb-4 uppercase hover:text-[#D91B1B] transition-colors">
                    TEGAS, PRABOWO KE PARA MENTERI: COPOT PEJABAT YANG TAK KERJA KERAS
                  </h2>
                </div>
                <div className="flex justify-center gap-1.5 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                </div>
            </div>
            <div className="hidden md:block absolute left-4 bottom-4 right-4 md:left-20 md:bottom-20 md:right-auto md:max-w-[85%] z-10">
              <div className="bg-[#D91B1B] p-6 rounded-[5px] shadow-lg">
                <span className="inline-block text-white text-[10px] font-bold mb-3 uppercase tracking-wider">Politik</span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold leading-tight mb-4 text-white group-hover:underline decoration-white decoration-2 underline-offset-4">
                  Prabowo: Demokratisasi yang Paling Cepat Dirasakan Rakyat Adalah Akses Pendidikan
                </h2>
                <div className="flex items-center gap-4 text-xs md:text-sm text-gray-100 font-medium">
                  <div className="flex items-center gap-2">
                     <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50 bg-white"><img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" alt="Author" className="w-full h-full object-cover" /></div>
                     <span className="uppercase tracking-wide text-white">Sinpo Redaksi</span>
                  </div>
                  <span className="w-1 h-1 bg-white/60 rounded-full"></span>
                  <span>Senin, 13 Desember 2025</span>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6 px-4 md:px-0">
            <div className="hidden md:flex flex-col gap-3 group cursor-pointer bg-white dark:bg-[#0A0A0A] transition-colors">
              <div className="w-full h-48 overflow-hidden rounded-md relative bg-gray-100 dark:bg-gray-900">
                <img src="https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kilang-pertamina-dumai-tingkatkan-kualitas-produksi-bahan-bakar-1765349771-615x410.webp" alt="Side News 1" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                 <span className="absolute top-2 left-2 bg-[#D91B1B] text-white text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-sm">EKONOMI</span>
              </div>
              <div className="flex flex-col gap-2">
                 {/* Link Here too */}
                 <div onClick={onNavigateToDetail} className="cursor-pointer">
                   <h3 className="text-xl font-serif font-bold text-black dark:text-white leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-3">
                     Tegas, Prabowo ke Para Menteri: Copot Pejabat yang Tak Kerja Keras
                   </h3>
                 </div>
                 <div className="flex justify-between text-[11px] text-gray-500 dark:text-gray-400 font-medium">
                   <span>Oleh: Redaksi</span>
                   <span>10 Menit yang lalu</span>
                 </div>
              </div>
            </div>
            <hr className="hidden md:block border-gray-100 dark:border-gray-800" />
            <div className="relative md:h-[300px] group/list bg-gray-50 dark:bg-[#111] md:bg-white md:dark:bg-[#0A0A0A] rounded-xl md:rounded-none p-4 md:p-0 transition-colors">
               <div className="hidden md:block absolute -mt-6 left-0 w-full h-2 bg-gradient-to-b from-white dark:from-[#0A0A0A] via-white/80 dark:via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
               <div className="hidden md:flex absolute right-0 mt-30 transform -translate-y-1/2 z-20 pl-2 bg-white dark:bg-[#0A0A0A] items-center justify-center text-gray-300 dark:text-gray-600 hover:text-[#D91B1B] dark:hover:text-[#D91B1B] transition-colors cursor-pointer pointer-events-none md:pointer-events-auto">
                  <UpDownDuotone width={24} height={24} />
               </div>
               <div className="h-auto md:h-full overflow-y-visible md:overflow-y-auto pr-0 md:pr-8 scrollbar-hide flex flex-col snap-y snap-mandatory -mt-0 md:-mt-6 gap-4 md:gap-0">
                  <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
                  {scrollableNews.map((item, index) => (
                    <div key={item.id} className="snap-start flex flex-col justify-between min-h-0 md:min-h-[100px]">
                        <div className="flex gap-4 group cursor-pointer items-start md:items-center py-2 relative">
                           <div className="block md:hidden w-8 text-center flex-shrink-0"><span className="text-6xl font-bold text-gray-200 dark:text-gray-700 leading-[0.8] font-sans">{index + 1}</span></div>
                           <div className="hidden md:block w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800"><img src={item.image} alt={item.category} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" /></div>
                           <div className="flex-1 flex flex-col justify-center">
                             <span className={`hidden md:inline-block ${item.color} text-white text-[9px] font-bold px-1.5 py-0.5 mb-1 w-fit uppercase tracking-wider rounded-sm`}>{item.category}</span>
                             {item.isLink ? (
                                <div onClick={onNavigateToDetail} className="cursor-pointer">
                                  <h4 className="text-sm md:text-sm font-bold text-black dark:text-gray-100 leading-snug mb-1 group-hover:text-[#D91B1B] transition-colors line-clamp-3 md:line-clamp-2 md:font-serif uppercase md:normal-case">{item.title}</h4>
                                </div>
                             ) : (
                                <h4 className="text-sm md:text-sm font-bold text-black dark:text-gray-100 leading-snug mb-1 group-hover:text-[#D91B1B] transition-colors line-clamp-3 md:line-clamp-2 md:font-serif uppercase md:normal-case">{item.title}</h4>
                             )}
                             <p className="hidden md:block text-[10px] text-gray-400 dark:text-gray-500">{item.time}</p>
                           </div>
                        </div>
                        <hr className="hidden md:block border-gray-50 dark:border-gray-800 w-full" />
                    </div>
                  ))}
               </div>
               <div className="hidden md:block absolute -mt-2 left-0 w-full h-4 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-white/80 dark:via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. SECOND SECTION
const SecondSection = () => {
    // ... Implement logic similar to FirstSection ...
    const sidebarNews = [
        { category: "POJOK SIN PO", image: "https://www.owrite.id/wp-content/uploads/2025/12/Luban_17653769715179a927ffc-2ee5-4afd-95d5-8213ad1bfcc3-860x645.webp", title: "PECINAN SEMARANG, TERGESER KEBIJAKAN KOLONIAL ...", id: 1 },
        { category: "BONGKAR", image: "https://www.owrite.id/wp-content/uploads/2025/12/Screenshot-2025-12-10-160356-420x280.webp", title: "POLEMIK KAMAR DAGANG INDUSTRI, ANINDYA VERSUS ARSJAD ...", isRedTitle: true, id: 2 }
    ];
    const recentNews = [
        { id: 1, image: "https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0002-615x410.webp", author: "George Asep", date: "Senin, 33 Mei 2024", title: "Prabowo: Demokratisasi Yang Paling Cepat Dirasakan Rakyat Adalah Akses Pendidikan ..." },
        { id: 2, image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kayu-gelondongan-pascabanjir-bandang-di-aceh-utara-1765255762-615x410.webp", author: "George Asep", date: "Senin, 33 Mei 2024", title: "PKS Puji Luhut: Orang Yang Responsif, Wajar Diberi 2 Jabatan" },
        { id: 3, image: "https://www.owrite.id/wp-content/uploads/2025/12/IMG-20251210-WA0005-615x410.webp", author: "George Asep", date: "Senin, 33 Mei 2024", title: "Dewan Pers, Bawaslu, KPU Dan KPI Bentuk Gugus Tugas Pemantauan Pemberitaan Pilkada" },
        { id: 4, image: "https://www.owrite.id/wp-content/uploads/2025/12/image-6942445-615x410.webp", author: "George Asep", date: "Senin, 33 Mei 2024", title: "Tim Inafis Identifikasi Korban Pesawat Jatuh Di Pohuwato Gorontalo" },
        { id: 5, image: "https://www.owrite.id/wp-content/uploads/2025/10/Ilustrasi-Emas-Batang-615x410.webp", author: "George Asep", date: "Senin, 33 Mei 2024", title: "Mobil Di Bekasi Dibakar OTK Pakai Bom Molotov, Ciri-Ciri Pelaku Terekam CCTV" }
    ];
    const featuredNews = recentNews[0];
    const otherNews = recentNews.slice(1);

    return (
        <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans py-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="hidden lg:block lg:col-span-4 bg-black dark:bg-[#111] text-white p-6 rounded-md h-fit top-36 shadow-lg sticky transition-colors">
                        <div className="mb-6 pb-4">
                            <h2 className="text-3xl font-bold uppercase tracking-wider text-white">TDK KALAH PENTING</h2>
                            <div className="w-16 h-1 bg-red-500 mt-2"></div>
                        </div>
                        <div className="flex flex-col gap-8">
                            {sidebarNews.map((item) => (
                                <div key={item.id} className="group cursor-pointer">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className={`font-black text-xl uppercase ${item.isRedTitle ? 'text-red-500' : 'text-white'}`}>{item.category}</span>
                                        <div className="flex-1 h-px bg-gray-700"></div>
                                    </div>
                                    <div className="w-full aspect-video overflow-hidden mb-3 rounded-sm border border-gray-700/50">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                    </div>
                                    <h4 className="text-lg font-serif font-bold leading-snug text-gray-100 group-hover:text-red-500 transition-colors">{item.title}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-8">
                        <div className="block md:hidden">
                            <div className="mb-6 leading-none"><h1 className="text-5xl font-black text-gray-400 dark:text-gray-600 uppercase tracking-tight">BERITA <br /> <span className="text-gray-400 dark:text-gray-600">TERKINI</span><span className="text-black dark:text-white">.</span></h1></div>
                            <div className="mb-8 group cursor-pointer">
                                <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm bg-gray-100 dark:bg-gray-800"><img src={featuredNews.image} alt={featuredNews.title} className="w-full h-full object-cover" /></div>
                                <h2 className="text-xl font-bold text-black dark:text-white leading-snug">{featuredNews.title}</h2>
                            </div>
                            <div className="relative border-l border-gray-200 dark:border-gray-800 ml-2 pl-6 flex flex-col gap-6">
                                {otherNews.map((news) => (
                                    <div key={news.id} className="relative flex gap-4 items-start group cursor-pointer">
                                        <div className="absolute -left-[31px] top-4 w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-red-500 transition-colors"></div>
                                        <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800"><img src={news.image} alt={news.title} className="w-full h-full object-cover" /></div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-700"><img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" className="w-full h-full object-cover grayscale opacity-70" alt="avatar" /></div>
                                                <span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">{news.author}</span>
                                                <span className="text-[10px] text-gray-400 dark:text-gray-600 font-light">{news.date}</span>
                                            </div>
                                            <h3 className="text-sm font-bold text-black dark:text-gray-200 leading-snug line-clamp-3 group-hover:text-red-600 transition-colors">{news.title}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-center gap-4 mb-8"><h2 className="text-2xl font-serif font-bold uppercase text-black dark:text-white whitespace-nowrap">Berita Terkini</h2><div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div></div>
                            <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 pl-8 flex flex-col gap-8">
                                {recentNews.map((news) => (
                                    <div key={news.id} className="relative group cursor-pointer bg-white dark:bg-[#0A0A0A] hover:bg-gray-50 dark:hover:bg-[#111] p-4 rounded-lg transition-all border border-transparent hover:border-gray-100 dark:hover:border-gray-800 shadow-sm hover:shadow-md">
                                        <div className="absolute -left-[40px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-[#0A0A0A] rounded-full border-2 border-gray-300 dark:border-gray-700 group-hover:bg-red-500 group-hover:border-red-500 group-hover:scale-125 transition-all z-10"></div>
                                        <div className="flex flex-col md:flex-row gap-6 items-start">
                                            <div className="w-full md:w-56 h-36 flex-shrink-0 overflow-hidden rounded-md relative shadow-sm bg-gray-100 dark:bg-gray-900"><img src={news.image} alt={news.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" /></div>
                                            <div className="flex-1 flex flex-col justify-between h-36 py-1">
                                                <h3 className="text-xl font-serif font-bold text-black dark:text-gray-100 leading-snug group-hover:text-red-500 transition-colors line-clamp-2">{news.title}</h3>
                                                <div className="mt-auto">
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-3 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore...</p>
                                                    <div className="flex items-center gap-3 border-t border-gray-100 dark:border-gray-800 pt-3">
                                                        <div className="w-5 h-5 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700"><img src="https://secure.gravatar.com/avatar/842c75b28a72bddc6ea5f5f3ae1a5ca65cfb2d15077564912755f90bcb86298c?s=200&d=monsterid&r=g" alt="Author" className="w-full h-full object-cover grayscale" /></div>
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
                            <div className="mt-8 flex justify-center"><button className="px-6 py-2 w-full md:w-auto bg-white dark:bg-[#1a1a1a] hover:bg-[#1a1a1a] dark:hover:bg-white hover:text-white dark:hover:text-[#1a1a1a] text-[#1a1a1a] dark:text-white font-bold text-sm rounded-sm border-2 border-[#1a1a1a] dark:border-gray-600 transition-all uppercase tracking-widest shadow-sm hover:shadow-lg">Lihat Berita Lainnya</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// 3. THIRD SECTION
const ThirdSection = () => {
  const trendNews = [
    { id: 1, image: "https://www.owrite.id/wp-content/uploads/2025/12/image-25-615x410.webp", author: "JONI DE KILL", date: "Senin, 13 Mei 2024", title: "BPK SELAMATKAN UANG NEGARA RP13,6 TRILIUN SELAMA SEMESTER I 2024" },
    { id: 2, image: "https://www.owrite.id/wp-content/uploads/2025/12/aco-hafidz-nc-hideo-kojima-artwork-615x410.webp", author: "JONI DE KILL", date: "Senin, 13 Mei 2024", title: "BANYAK KEMENTERIAN YANG DIPECAH, DPR: TUGAS PENGAWASAN AKAN SEMAKIN ..." },
    { id: 3, image: "https://www.owrite.id/wp-content/uploads/2025/12/doll-figures-3015495_1280-615x410.webp", author: "JONI DE KILL", date: "Senin, 13 Mei 2024", title: "RAJA JULI SEBUT SERAGAM PEMBEKALAN KABINET SUDAH DIBAGIKAN MAYOR TEDDY" },
    { id: 4, image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-kebakaran-gedung-perusahaan-penyedia-pesawat-nirawak-1765352318-615x410.webp", author: "JONI DE KILL", date: "Senin, 13 Mei 2024", title: "RI-QATAR TEKEN KERJASAMA BEASISWA BAGI MAHASISWA AFGHANISTAN" },
    { id: 5, image: "https://www.owrite.id/wp-content/uploads/2025/12/pray-6268224_1280-615x410.webp", author: "JONI DE KILL", date: "Senin, 13 Mei 2024", title: "BENTUK BADAN PERCEPATAN PENGENTASAN KEMISKINAN: KESULITAN HARUS SEGERA ..." }
  ];
  const trendingTopics = [{ name: "Pemilu 2024", link: "#" }, { name: "Pembekalan Menteri", link: "#" }, { name: "Jakarta", link: "#" }, { name: "btc", link: "#" }, { name: "DPR", link: "#" }, { name: "Jakarta", link: "#" }, { name: "Kasus Travel", link: "#" }, { name: "eth", link: "#" }];

  return (
    <section className="hidden md:block w-full bg-gray-100 dark:bg-[#0A0A0A] font-sans py-12 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10"><h2 className="text-3xl font-black uppercase text-[#1a1a1a] dark:text-white tracking-tight">Tren Hari Ini</h2></div>
        <div className="relative">
          <div className="flex overflow-x-auto md:grid md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 pb-6 snap-x snap-mandatory scrollbar-hide">
            <style dangerouslySetInnerHTML={{__html: `.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}} />
            {trendNews.map((item, index) => (
              <div key={item.id} className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-center group cursor-pointer flex flex-col">
                <div className="relative w-full aspect-[4/3] overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800 shadow-sm">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" />
                  <span className="absolute top-0 left-0 bg-[#D91B1B] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wide">NASIONAL</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-end text-[10px] font-medium text-white/90"><span className="uppercase tracking-wider">{item.author}</span><span>{item.date}</span></div>
                </div>
                <div className="flex gap-3"><span className="text-3xl font-black text-gray-400 dark:text-gray-600 group-hover:text-[#D91B1B] transition-colors leading-none pt-1 lg:hidden">{index + 1}</span><h3 className="text-sm font-bold leading-relaxed text-[#1a1a1a] dark:text-gray-200 uppercase group-hover:text-[#D91B1B] transition-colors line-clamp-3">{item.title}</h3></div>
              </div>
            ))}
            <div className="min-w-[260px] md:min-w-0 flex-shrink-0 snap-center flex flex-col bg-gray-50 dark:bg-[#111] p-6 rounded-sm border border-gray-100 dark:border-gray-800 lg:hidden">
              <div className="text-center mb-6"><h3 className="text-xl font-medium tracking-wide uppercase text-gray-700 dark:text-gray-300">Trending Topics</h3></div>
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 content-start">{trendingTopics.map((topic, i) => <a key={i} href={topic.link} className="text-[11px] text-gray-500 dark:text-gray-400 hover:text-[#D91B1B] border-b border-transparent hover:border-[#D91B1B] transition-colors">{topic.name}</a>)}</div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-2 md:hidden"><div className="w-2 h-2 rounded-full bg-[#D91B1B]"></div><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div><div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div></div>
        </div>
      </div>
    </section>
  );
};

// 4. FOURTH SECTION
const FourthSection = () => {
  const playlist = [
    { id: 1, image: "https://placehold.co/120x80/red/white?text=News+1", title: "PIMPINAN DPR RI TERIMA AUDIENSI SOLIDARITAS ...", duration: "00:01:44", active: true },
    { id: 2, image: "https://placehold.co/120x80/333/white?text=News+2", title: "RAPAT PLENO TERBUKA PENGUNDIAN NOMOR URUT", duration: "00:02:10", active: false },
    { id: 3, image: "https://placehold.co/120x80/555/white?text=News+3", title: "DEBAT PILGUB JAKARTA: ADU GAGASAN TIGA PASLON", duration: "00:03:15", active: false },
    { id: 4, image: "https://placehold.co/120x80/777/white?text=News+4", title: "UPDATE TERKINI: SITUASI LALU LINTAS IBU KOTA", duration: "00:01:20", active: false },
    { id: 5, image: "https://placehold.co/120x80/999/white?text=News+5", title: "KONFERENSI PERS KPU TERKAIT PILKADA SERENTAK", duration: "00:05:45", active: false }
  ];

  return (
    <section className="w-full font-sans relative">
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#0A0A0A] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white dark:bg-[#0A0A0A] z-0 transition-colors duration-300"></div>
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-16">
        <div className="text-center mb-10"><h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-widest uppercase">SIN PO TV</h2><div className="w-24 h-1 bg-[#D91B1B] mx-auto mt-4"></div></div>
        <div className="bg-[#111] rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-7xl mx-auto border border-gray-800">
          <div className="w-full lg:w-8/12 bg-black relative aspect-video group cursor-pointer">
            <img src="https://placehold.co/800x450/darkred/white?text=SIN+PO+TV+LIVE" alt="Main Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute top-8 left-8 hidden md:block"><div className="flex flex-col items-start gap-1"><div className="text-white text-[10px] font-bold py-1 uppercase tracking-widest rounded-sm">LIVE STREAMING</div><div className="flex flex-col shadow-lg"><span className="bg-white text-black text-4xl font-black px-4 py-2 leading-none uppercase tracking-tight">BREAKING</span><span className="bg-black text-white text-4xl font-black px-4 py-2 leading-none uppercase tracking-tight border border-white">NEWS</span></div></div></div>
            <div className="absolute bottom-12 left-0 right-0 text-center px-4"><h2 className="text-2xl md:text-4xl font-serif font-black text-white uppercase leading-tight drop-shadow-md">PENGUNDIAN NOMOR URUT<br/>PILGUB JAKARTA</h2></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><div className="w-20 h-20 bg-[#D91B1B]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300"><Play size={40} className="text-white fill-current ml-2" /></div></div>
          </div>
          <div className="w-full lg:w-4/12 bg-[#1a1a1a] text-white flex flex-col border-l border-gray-800">
            <div className="p-5 bg-[#222] border-b border-gray-700 flex justify-between items-center"><div><span className="text-xs text-[#D91B1B] font-bold uppercase tracking-wider block mb-1">Sedang Tayang</span><h4 className="font-bold text-sm text-gray-100 uppercase truncate max-w-[200px]">PENGUNDIAN NOMOR URUT ...</h4></div><div className="w-2 h-2 rounded-full bg-[#D91B1B] animate-pulse"></div></div>
            <div className="flex-1 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
               {playlist.map((item) => (
                 <div key={item.id} className={`flex gap-4 p-4 border-b border-gray-800 cursor-pointer hover:bg-white/5 transition-colors group ${item.active ? 'bg-white/5' : ''}`}>
                    <div className="w-28 h-18 flex-shrink-0 bg-black relative rounded-sm overflow-hidden"><img src={item.image} alt="thumb" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />{item.active && <div className="absolute inset-0 border-2 border-[#D91B1B] z-10"></div>}<div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded-sm">{item.duration}</div></div>
                    <div className="flex flex-col justify-center"><h5 className={`text-sm font-bold leading-tight line-clamp-2 mb-1 group-hover:text-[#D91B1B] transition-colors ${item.active ? 'text-white' : 'text-gray-400'}`}>{item.title}</h5><span className="text-[10px] text-gray-500 uppercase tracking-wide">Sin Po TV</span></div>
                 </div>
               ))}
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-center"><div className="w-full max-w-[970px] h-[120px] bg-gray-50 dark:bg-[#111] border border-gray-100 dark:border-gray-800 flex items-center justify-center relative overflow-hidden rounded-md transition-colors"><img src="https://placehold.co/970x120/f3f4f6/d1d5db?text=Iklan+Space+Banner" alt="Ads" className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity" /><span className="absolute bottom-1 right-1 text-[9px] text-gray-400 bg-white/80 dark:bg-black/80 px-1 rounded-sm">IKLAN</span></div></div>
      </div>
    </section>
  );
};

// 5. FIFTH SECTION
const FifthSection = () => {
    const pollingItems = [
    { id: 1, category: "BISNIS", image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-mobil-mbg-tabrak-siswa-dan-guru-sdn-kalibaru-01-pagi-1765448194-860x572.webp", question: "POLLING: CICILAN KPR RP 300 RIBU PER BULAN SELAMA 40 TAHUN, TERTARIK?", options: ["Tertarik", "Enggak sih"], status: "1 hari", responses: "553 Respon", isActive: true },
    { id: 2, category: "GAYA HIDUP", image: "https://www.owrite.id/wp-content/uploads/2025/12/image-7-615x410.webp", question: "POLLING: APA HAL YANG PALING MEMBUAT KAMU STRES AKHIR-AKHIR INI?", options: ["Percintaan", "Keuangan", "Pekerjaan"], status: "Polling selesai", responses: "1.2K Respon", isActive: false },
    { id: 3, category: "BISNIS", image: "https://www.owrite.id/wp-content/uploads/2025/12/bappenas-58.webp", question: "POLLING: CICILAN KPR RP 300 RIBU PER BULAN SELAMA 40 TAHUN, TERTARIK?", options: ["Tertarik", "Enggak sih"], status: "19 hari", responses: "553 Respon", isActive: true }
  ];
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(pollingItems.length / itemsPerSlide);
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const getSlideItems = (slideIdx: number) => pollingItems.slice(slideIdx * itemsPerSlide, (slideIdx * itemsPerSlide) + itemsPerSlide);

  return (
    <section className="hidden md:block w-full bg-white dark:bg-[#0A0A0A] font-sans py-16 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4"><div><span className="text-[#D91B1B] font-bold uppercase tracking-widest text-sm block">Suara Anda</span><h2 className="text-3xl md:text-4xl font-serif font-black tracking-tight uppercase text-[#1a1a1a] dark:text-white transition-colors"><span className="text-[#D91B1B]">JAJAK</span> PENDAPAT</h2></div></div>
          <div className="flex gap-3">
            <button onClick={prevSlide} className="w-10 h-10 text-[#1a1a1a] dark:text-white rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shadow-sm"><ArrowLeft size={18} strokeWidth={2} /></button>
            <button onClick={nextSlide} className="w-10 h-10 text-[#1a1a1a] dark:text-white rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white hover:border-[#1a1a1a] dark:hover:bg-white dark:hover:text-black dark:hover:border-white transition-all shadow-sm"><ArrowRight size={18} strokeWidth={2} /></button>
          </div>
        </div>
        <div className="relative w-full">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {Array.from({ length: totalSlides }).map((_, slideIndex) => {
              const slideItems = getSlideItems(slideIndex);
              return (
                <div key={slideIndex} className={`w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-8 ${slideIndex !== totalSlides - 1 ? "mb-8 md:mb-0" : ""}`}>
                  {slideItems.map((item) => (
                      <div key={item.id} className="flex flex-col h-full group bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 p-5 rounded-lg hover:shadow-xl transition-all duration-300">
                        <div className="w-full aspect-[16/9] overflow-hidden mb-5 bg-gray-100 dark:bg-gray-800 rounded-md relative">
                          <img src={item.image} alt={item.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /><span className="absolute top-2 left-2 bg-white/90 text-[#1a1a1a] text-[10px] font-bold px-2 py-1 uppercase rounded-sm shadow-sm backdrop-blur-sm">{item.category}</span>
                        </div>
                        <h3 className="text-lg font-serif font-bold text-[#1a1a1a] dark:text-gray-100 leading-snug mb-4 h-[56px] overflow-hidden line-clamp-2 group-hover:text-[#D91B1B] transition-colors">{item.question}</h3>
                        <div className="space-y-3 mb-6 flex-grow">{item.options.map((option, opIdx) => <div key={opIdx} className="relative group/option"><div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-700 rounded-md cursor-pointer hover:bg-white dark:hover:bg-[#222] hover:border-[#D91B1B] dark:hover:border-[#D91B1B] transition-colors"><span className="text-[13px] text-gray-600 dark:text-gray-300 font-medium group-hover/option:text-[#1a1a1a] dark:group-hover/option:text-white transition-colors">{option}</span><div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 group-hover/option:border-[#D91B1B]"></div></div></div>)}</div>
                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mt-auto pt-4 border-t border-gray-50 dark:border-gray-800"><div className="flex items-center gap-2"><span className={`w-2 h-2 rounded-full ${item.status.includes("selesai") ? 'bg-gray-400 dark:bg-gray-600' : 'bg-green-500 animate-pulse'}`}></span><span className="font-medium">{item.status}</span></div><span className="font-semibold text-gray-600 dark:text-gray-400">{item.responses}</span></div>
                      </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};


// 6. SIXTH SECTION
const AnchorLogoBlock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm-.5 17.145s.638-.579.706-.983c.025-.154-.037-.624-.116-1.22c-.188-1.413-.47-3.532.116-3.78c.5-.21 1.24 1.231 1.834 2.39c.394.77.725 1.414.88 1.37c.132-.038-.005-.84-.185-1.902c-.348-2.044-.86-5.047.077-5.388c.91-.33 2.109 2.54 2.976 4.62c.49 1.175.876 2.097 1.043 2.043c.183-.058-.03-1.786-.282-3.851c-.387-3.154-.87-7.096-.193-7.096c1.19 0 2.47 3.86 3.428 6.747c.58 1.75 1.043 3.142 1.294 3.1c.263-.044.273-.774.285-1.679c.019-1.381.043-3.17.983-3.551c.82-.333 1.651 0 1.651 0l.503 2.007c-.522-.09-1.52.045-1.594.932c-.022.268-.032.732-.044 1.294c-.043 2.067-.115 5.472-.944 5.472c-.964 0-2.22-3.62-3.115-6.197c-.509-1.467-.9-2.596-1.055-2.529c-.156.068-.047 1.243.09 2.71c.235 2.51.55 5.876-.256 6.016c-.833.145-2.028-2.728-2.85-4.705c-.437-1.05-.769-1.847-.884-1.802c-.123.047-.057.897.027 1.968c.143 1.848.338 4.354-.293 4.54c-.849.248-1.48-1.4-1.947-2.617c-.27-.704-.484-1.263-.653-1.229c-.133.027-.104.375-.064.852c.092 1.104.24 2.897-1.418 2.993z" clipRule="evenodd"></path>
  </svg>
);

const SixthSection = () => {
  const leftNews = Array.from({ length: 7 }).map((_, i) => ({
    id: i + 1,
    image: `https://unsplash.it/300/200?random=${i}`,
    author: "George Asep",
    date: "Senin, 33 Mei 2024",
    title: i % 2 === 0 ? "Komnas HAM Sodorkan Rekomendasi Agenda HAM Untuk Pemerintahan Prabowo" : "Ratusan Personel Gabungan Kawal Kampanye Pilgub Jakarta Hari Ini",
  }));
  const opinions = [
    { id: 1, author: "HAFIDZ NURCAHYO", avatar: "https://placehold.co/50x50/333/fff?text=HN", title: "BICARA SOAL DEMOKRASI YANG SEHARUSNYA TIDAK LAGI ADA KEKELIRUAN", date: "Senin, 33 Mei 2024" },
    { id: 2, author: "TIKANIA CO", avatar: "https://placehold.co/50x50/555/fff?text=TC", title: "KAI ALIHKAN 32 PERJALANAN KE STASIUN JATINEGARA SAAT PELANTIKAN ...", date: "Senin, 33 Mei 2024" }
  ];
  const visualSlides = [
    { id: 1, image: "https://www.owrite.id/wp-content/uploads/2025/12/cf0a911c-1202-46f6-ac39-aaa3dced4cac-615x410.webp", title: "PRABOWO TERCATAT RAJIN LAPORKAN LHKPN" },
    { id: 2, image: "https://www.owrite.id/wp-content/uploads/2025/12/WhatsApp-Image-2025-12-11-at-12.21.10_63b73acf-615x410.webp", title: "MERAH PUTIH BERKIBAR DI KANCAH DUNIA" },
    { id: 3, image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-raker-komisi-xi-dpr-dengan-menteri-keuangan-1765427806-615x410.webp", title: "HIJAU ALAM INDONESIA YANG MEMUKAU" }
  ];
  const [currentVisual, setCurrentVisual] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => { setCurrentVisual((prev) => (prev === visualSlides.length - 1 ? 0 : prev + 1)); }, 5000);
    return () => clearInterval(interval);
  }, [visualSlides.length]);

  return (
    <section className="w-full bg-white dark:bg-[#0A0A0A] font-sans py-16 border-b border-gray-100 dark:border-gray-800 overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
          <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2"><h2 className="text-2xl font-serif font-bold uppercase text-black dark:text-white whitespace-nowrap">Berita Lainnya</h2><div className="w-full h-px bg-gray-200 dark:bg-gray-800"></div></div>
            <div className="block md:hidden">
                {leftNews.length > 0 && (
                  <div className="mb-8 group cursor-pointer">
                      <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 shadow-sm bg-gray-100 dark:bg-gray-800"><img src={leftNews[0].image} alt={leftNews[0].title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                      <div className="flex items-center gap-2 mb-2"><span className="text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase">{leftNews[0].author}</span><span className="text-[10px] text-gray-400 dark:text-gray-600 font-light">• {leftNews[0].date}</span></div>
                      <h2 className="text-xl font-bold text-black dark:text-white leading-snug group-hover:text-[#D91B1B] transition-colors">{leftNews[0].title}</h2>
                  </div>
                )}
                <div className="flex flex-col gap-6 border-l border-gray-200 dark:border-gray-800 ml-2 pl-6">
                    {leftNews.slice(1).map((item) => (
                        <div key={item.id} className="relative flex gap-4 items-start group cursor-pointer">
                            <div className="absolute -left-[31px] top-4 w-2.5 h-2.5 bg-gray-300 dark:bg-gray-700 rounded-full group-hover:bg-[#D91B1B] transition-colors"></div>
                            <div className="w-24 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-800"><img src={item.image} alt={item.title} className="w-full h-full object-cover" /></div>
                            <div className="flex-1"><h3 className="text-sm font-bold text-black dark:text-gray-200 leading-snug line-clamp-3 group-hover:text-[#D91B1B] transition-colors mb-1">{item.title}</h3><div className="flex items-center gap-2"><span className="text-[10px] text-gray-400 dark:text-gray-500 font-light">{item.date}</span></div></div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex flex-col gap-6">
              {leftNews.map((item) => (
                <div key={item.id} className="group cursor-pointer bg-white dark:bg-[#0A0A0A] border-b border-gray-100 dark:border-gray-800 pb-6 hover:bg-gray-50/50 dark:hover:bg-[#111]/50 transition-colors flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-[240px] aspect-[4/3] md:h-[160px] flex-shrink-0 overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 shadow-sm relative"><img src={item.image} alt="News Thumbnail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity"></div></div>
                  <div className="flex-1 py-1">
                     <div className="flex items-center gap-3 mb-3"><div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border border-white dark:border-gray-600 shadow-sm"><img src="https://placehold.co/50x50/333/fff?text=GA" alt="Author" className="w-full h-full object-cover grayscale" /></div><div className="flex flex-col"><span className="text-xs font-bold text-black dark:text-gray-300">{item.author}</span><span className="text-[10px] text-gray-400 dark:text-gray-500">{item.date}</span></div></div>
                     <h3 className="text-xl font-serif font-bold text-black dark:text-white leading-tight group-hover:text-[#D91B1B] transition-colors line-clamp-2">{item.title}</h3>
                     <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-2 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8"><button className="w-full bg-white dark:bg-[#111] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-gray-600 dark:text-gray-400 font-bold py-3 rounded-sm transition-all text-sm uppercase tracking-wider border border-black dark:border-gray-800 hover:border-black dark:hover:border-white hover:shadow-lg">Muat Berita Lainnya</button></div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col gap-12">
            <div className="relative">
               <h2 className="absolute -top-4 -left-6 text-7xl md:text-8xl font-black text-gray-100 dark:text-[#1a1a1a] -rotate-6 select-none z-0 transition-colors" style={{ fontFamily: 'sans-serif' }}>OPINI</h2>
               <div className="relative z-10 pt-16">
                  <div className="flex flex-col gap-6">
                     {opinions.map((op, idx) => (
                        <div key={op.id} className="bg-white dark:bg-[#111] p-5 rounded-lg border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all cursor-pointer group">
                           <div className="flex justify-between items-start mb-3"><span className="text-xs font-bold text-blue-900 dark:text-blue-400 uppercase tracking-wider">{op.author}</span><div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-2 border-white dark:border-gray-600 shadow-sm group-hover:border-[#D91B1B] transition-colors"><img src={op.avatar} alt={op.author} className="w-full h-full object-cover grayscale" /></div></div>
                           <h3 className="text-lg font-serif font-bold text-black dark:text-white leading-tight mb-3 group-hover:text-[#D91B1B] transition-colors">{op.title}</h3><span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">{op.date}</span>
                        </div>
                     ))}
                  </div>
                  <div className="flex items-center justify-end gap-2 mt-4 mb-8"><div className="h-px bg-gray-200 dark:bg-gray-800 flex-1"></div><span className="text-xs font-bold text-gray-400 dark:text-gray-500 cursor-pointer hover:text-[#D91B1B] uppercase tracking-wider hover:underline">Lihat Opini Lainnya</span></div>
                  <div className="bg-[#ffffff] dark:bg-[#1a1a1a] rounded-md p-5 flex flex-col gap-4 shadow-lg text-[#1a1a1a] dark:text-white relative overflow-hidden group border border-gray-100 dark:border-gray-800 transition-colors">
                    <div className="flex items-center gap-4 relative z-10"><div className="flex items-center justify-center flex-shrink-0"><div className="w-12 h-12 flex items-center justify-center text-[#1a1a1a] dark:text-white"><AnchorLogoBlock style={{ fontSize: '48px' }} /></div></div><h4 className="text-sm font-bold leading-tight line-clamp-2 text-[#1a1a1a]/90 dark:text-white/90">JUBIR DEMOKRAT OPTIMIS AHY SUKSES PIMPIN KEMENKO INFRASTRUKTUR DAN ...</h4></div>
                    <div className="flex items-center gap-3 relative z-10"><button className="w-8 h-8 rounded-full bg-[#ffffff] dark:bg-[#333] flex items-center justify-center text-[#000000] dark:text-white hover:bg-[#D91B1B] hover:text-[#ffffff] transition-colors flex-shrink-0"><Play size={14} fill="currentColor" /></button><div className="h-1 bg-[#ffffff]/20 dark:bg-white/10 flex-1 rounded-full overflow-hidden"><div className="h-full w-full bg-[#D91B1B] rounded-full"></div></div><span className="text-[10px] text-[#1a1a1a]/60 dark:text-white/60 font-mono">03:51</span></div>
                  </div>
               </div>
            </div>
            <div className="relative mt-12">
               <h2 className="absolute -top-4 -left-6 text-7xl md:text-8xl font-black text-gray-100 dark:text-[#1a1a1a] -rotate-6 select-none z-0 transition-colors" style={{ fontFamily: 'sans-serif' }}>VISUAL</h2>
               <div className="relative z-10 pt-16">
                  <div className="w-full aspect-[4/6] bg-black rounded-sm overflow-hidden relative group shadow-lg">
                     {visualSlides.map((slide, index) => (
                        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentVisual ? 'opacity-100' : 'opacity-0'}`}>
                           <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8"><h3 className="text-white text-2xl font-serif font-bold text-center leading-tight drop-shadow-md">{slide.title}</h3></div>
                        </div>
                     ))}
                  </div>
                  <div className="flex justify-center gap-2 mt-4">{visualSlides.map((_, idx) => <button key={idx} onClick={() => setCurrentVisual(idx)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === currentVisual ? 'bg-[#D91B1B] w-6' : 'bg-gray-300 dark:bg-gray-700 w-2 hover:bg-gray-400'}`} aria-label={`Pindah ke slide ${idx + 1}`} />)}</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 7. SEVENTH SECTION
const SeventhSection = () => {
    const newsCategories = [
    { id: 1, category: "POLITIK", borderColor: "border-[#D91B1B]", mainNews: { image: "https://www.owrite.id/wp-content/uploads/2025/12/a97d6fd2-6051-4d29-983c-d47e13fe0dc1-615x410.webp", title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }, subNews: [{ id: 101, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }] },
    { id: 2, category: "EKBIS", borderColor: "border-[#D91B1B]", mainNews: { image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-sampah-kayu-gelondongan-banjir-bandang-di-tapanuli-selatan-1764575769-615x410.webp", title: "Lestari Moerdijat: Tantangan Dalam Pengembangan Sektor UMKM Harus Dapat ..." }, subNews: [{ id: 201, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }] },
    { id: 3, category: "OLAHRAGA", borderColor: "border-[#D91B1B]", mainNews: { image: "https://www.owrite.id/wp-content/uploads/2025/12/antarafoto-jumlah-penerima-manfaat-program-mbg-1765430610-615x410.webp", title: "STY Bicara Jelang Indonesia Versus Bahrain: Laga Sangat Penting Bagi Kami" }, subNews: [{ id: 301, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }] },
    { id: 4, category: "BUDAYA", borderColor: "border-[#D91B1B]", mainNews: { image: "https://www.owrite.id/wp-content/uploads/2025/12/3808menpora-erick-harap-pundi-medali-emas-indonesia-terus-bertambah-di-ajang-sea-games-2025-thailand-615x410.webp", title: "Perjamuan Makan Siang, Gibran Kenalkan Kuliner Nusantara Ke Wapres RRT" }, subNews: [{ id: 401, title: "KAI Alihkan 32 Perjalanan Ke Stasiun Jatinegara Saat Pelantikan ..." }] }
  ];

  return (
    <section className="hidden md:block w-full bg-white dark:bg-[#0A0A0A] font-sans py-16 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {newsCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col group/cat">
              <div className="flex items-center justify-between mb-5 border-b border-gray-200 dark:border-gray-800 pb-2">
                 <h2 className={`text-xl font-bold uppercase text-[#1a1a1a] dark:text-white tracking-wide pl-2 border-l-4 ${cat.borderColor}`}>{cat.category}</h2>
                 <ArrowRight size={16} className="text-gray-400 group-hover/cat:text-[#D91B1B] transition-colors opacity-0 group-hover/cat:opacity-100" />
              </div>
              <div className="group cursor-pointer mb-6">
                <div className="w-full aspect-[16/10] overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 mb-4 shadow-sm relative">
                  <img src={cat.mainNews.image} alt={cat.category} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-black/5 dark:bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <h3 className="text-base font-serif font-bold text-[#1a1a1a] dark:text-gray-100 leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-3">{cat.mainNews.title}</h3>
              </div>
              <div className="w-full h-px bg-gray-200 dark:bg-gray-800 mb-4"></div>
              <div className="flex flex-col gap-4">
                {cat.subNews.map((sub) => (
                  <div key={sub.id} className="group cursor-pointer"><h4 className="text-[15px] font-medium text-gray-700 dark:text-gray-400 leading-snug group-hover:text-[#D91B1B] transition-colors line-clamp-2">{sub.title}</h4></div>
                ))}
                <div className="w-full h-px bg-gray-100 dark:bg-gray-800 mt-2"></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex justify-center"><button className="px-10 py-3 w-full md:w-auto bg-white dark:bg-[#1a1a1a] hover:bg-[#1a1a1a] dark:hover:bg-white hover:text-white dark:hover:text-[#1a1a1a] text-[#1a1a1a] dark:text-white font-bold text-sm rounded-sm border-2 border-[#1a1a1a] dark:border-gray-600 transition-all uppercase tracking-widest shadow-sm hover:shadow-lg">Indeks Berita Terkini</button></div>
      </div>
    </section>
  );
};

// 7. SEVENTH SECTION was up there (no changes needed to params but need to be careful with range)

export default function HomeScreen({ onNavigateToDetail, onNavigateToCategory }: HomeScreenProps) {
  return (
    <>
      <HeaderSection onNavigateToCategory={onNavigateToCategory} />
      <FirstSection onNavigateToDetail={onNavigateToDetail} />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <FooterSection />
    </>
  );
}
