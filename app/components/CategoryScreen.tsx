import React from 'react';
import { User } from 'lucide-react';

// Tipe data untuk artikel
interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  author?: string;
  excerpt?: string;
  showImage?: boolean; 
}

interface CategoryScreenProps {
  onNavigateToHome?: () => void;
  onNavigateToCategory?: () => void;
}

import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";

const CategoryScreen = ({ onNavigateToHome, onNavigateToCategory }: CategoryScreenProps) => {
  // === DATA DUMMY BAGIAN HERO (ATAS) ===
  const mainStory = {
    author: "GEORGE ASEP",
    title: "PENGAMANAN VIP CAGUB-CAWAGUB JAKARTA, 118 PERSONEL POLDA METRO DITERJUNKAN",
    excerpt: "Personel TNI melakukan simulasi pengamanan untuk persiapan pelantikan Presiden dan Wakil Presiden terpilih (2024-2029), di ruang Rapat Paripurna I, Gedung Nusantara, Kompleks Parlemen, Senayan, Jakarta, Jumat (18 Oktober 2024).",
    date: "Senin, 13 Mei 2024",
    backgroundImage: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=2033&auto=format&fit=crop"
  };

  const sideStories: NewsItem[] = [
    {
      id: 1,
      title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
      date: "Senin, 13 Mei 2024",
      image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      title: "KPK UNGKAP KERUGIAN DARI FRAUD BIDANG KESEHATAN SEKITAR RP20 TRILIUN",
      date: "Senin, 13 Mei 2024",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      title: "CEO ARSARI GROUP HASHIM DJOJOHADIKUSUMO RAIH PENGHARGAAN DARI ...",
      date: "Senin, 13 Mei 2024",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      title: "UJI KELAYAKAN DAN KEPATUTAN CALON KEPALA BIN",
      date: "Senin, 13 Mei 2024",
      image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=500&auto=format&fit=crop&q=60"
    }
  ];

  // === DATA DUMMY BAGIAN CATEGORY (TENGAH) ===
  const categoryLeftStory: NewsItem = {
    id: 101,
    author: "GEORGE ASEP",
    title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
    date: "Senin, 13 Mei 2024",
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800&auto=format&fit=crop&q=60",
    showImage: true
  };

  const categoryMiddleStories: NewsItem[] = [
    {
      id: 102,
      author: "GEORGE ASEP",
      title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
      date: "Senin, 13 Mei 2024",
      image: "", 
      showImage: false
    },
    {
      id: 103,
      author: "GEORGE ASEP",
      title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
      date: "Senin, 13 Mei 2024",
      image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?w=800&auto=format&fit=crop&q=60",
      showImage: true
    }
  ];

  // === DATA DUMMY BAGIAN TERBARU (BAWAH) ===
  // Menggunakan array untuk membuat duplikasi list seperti di gambar
  const latestNewsItems = Array(5).fill({
    id: 200,
    author: "GEORGE ASEP",
    title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
    date: "Senin, 13 Mei 2024",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=500&auto=format&fit=crop&q=60"
  }).map((item, index) => ({ ...item, id: 200 + index }));

  const trendingNewsItems = Array(7).fill({
    id: 300,
    author: "GEORGE ASEP",
    title: "MENPORA PASTIKAN PENUTUPAN PON XXI ACEH-SUMUT 2024 SIAP DIGELAR",
    date: "Rabu, 15 Mei 2024 - 21:30 WIB"
  }).map((item, index) => ({ ...item, id: 300 + index }));

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <HeaderSection onNavigateToCategory={onNavigateToCategory} />
      
      {/* ================= HERO SECTION (FULL SCREEN) ================= */}
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row overflow-hidden">
        
        {/* BACKGROUND IMAGE (FULL SCREEN DESKTOP) */}
        <div className="absolute inset-0 z-0">
          <img 
            src={mainStory.backgroundImage} 
            alt="Main Story" 
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
          />
          {/* Global Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/20 to-transparent"></div>
        </div>

        {/* KIRI: Berita Utama */}
        <div className="relative z-10 lg:w-[65%] w-full p-8 lg:p-24 flex flex-col justify-end min-h-[60vh] lg:min-h-screen order-1 lg:order-1">
          {/* Content Wrapper */}
          <div className="mt-10 lg:mt-0 max-w-4xl text-white -translate-y-26">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden border-2 border-gray-400">
                 <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Author" className="w-full h-full object-cover" />
              </div>
              <span className="text-sm font-bold tracking-widest uppercase text-gray-200">
                {mainStory.author}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase leading-none mb-8 tracking-tight shadow-black drop-shadow-lg">
              {mainStory.title}
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-8 drop-shadow-md">
              {mainStory.excerpt}
            </p>
            <div className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-bold text-sm px-6 py-3 uppercase tracking-wide rounded-sm shadow-lg">
              {mainStory.date}
            </div>
          </div>
        </div>

        {/* KANAN: Sidebar List */}
        <div className="relative z-20 lg:w-[35%] w-full flex flex-col justify-center min-h-[40vh] lg:min-h-screen order-2 lg:order-2">
          {/* 
            Mobile: Solid Background (covers the fixed bg image behind it)
            Desktop: Transparent/Overlay Background
          */}
          <div className="bg-white dark:bg-[#0a0a0a] lg:bg-black/50 lg:backdrop-blur-sm 
                h-[60vh] w-full 
                border border-gray-800 rounded-lg lg:-ml-40">
            <div className="p-8 lg:p-12 space-y-8 overflow-y-auto max-h-screen custom-scrollbar h-full flex flex-col justify-center">
              {sideStories.map((story) => (
                <div key={story.id} className="group flex items-center space-x-6 cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden bg-gray-200 lg:bg-gray-800 transition-all duration-300 shadow-md">
                      <img 
                        src={story.image} 
                        alt={story.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 lg:grayscale lg:group-hover:grayscale-0"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm lg:text-[15px] font-bold uppercase leading-tight text-black dark:text-white lg:text-gray-100 group-hover:text-red-500 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-xs text-gray-500 lg:text-gray-400 mt-2 font-medium tracking-wide">
                      {story.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ================= CATEGORY SECTION ================= */}
      <section className="bg-white text-black pt-16 pb-8">
        <div className="container mx-auto px-4">
          
          {/* Header Category */}
          <div className="flex items-center mb-10">
            <h2 className="text-3xl font-black uppercase tracking-tight mr-6">CATEGORY</h2>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            
            {/* COLUMN 1 */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
               <div className="w-full h-full aspect-video overflow-hidden rounded-sm bg-gray-200">
                 <img src={categoryLeftStory.image} alt={categoryLeftStory.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
               </div>
               <div className="flex items-center space-x-2 text-xs text-gray-500 mt-2">
                  <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Author" className="w-full h-full object-cover" /></div>
                  <span className="font-bold text-black uppercase">{categoryLeftStory.author}</span>
                  <span className="text-gray-300">|</span>
                  <span>{categoryLeftStory.date}</span>
               </div>
               <h3 className="text-lg font-bold uppercase leading-tight hover:text-red-600 cursor-pointer transition-colors">{categoryLeftStory.title}</h3>
            </div>

            {/* COLUMN 2 */}
            <div className="lg:col-span-4 flex flex-col space-y-10">
              <div className="flex flex-col space-y-3 pb-8 border-b border-gray-200">
                 <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Author" className="w-full h-full object-cover" /></div>
                    <span className="font-bold text-black uppercase">{categoryMiddleStories[0].author}</span>
                    <span className="text-gray-300">|</span>
                    <span>{categoryMiddleStories[0].date}</span>
                 </div>
                 <h3 className="text-lg font-bold uppercase leading-tight hover:text-red-600 cursor-pointer transition-colors">{categoryMiddleStories[0].title}</h3>
              </div>
              <div className="flex flex-col space-y-4">
                 <div className="w-full h-full aspect-video overflow-hidden rounded-sm bg-gray-200">
                   <img src={categoryMiddleStories[1].image} alt={categoryMiddleStories[1].title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                 </div>
                 <div className="flex items-center space-x-2 text-xs text-gray-500 mt-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Author" className="w-full h-full object-cover" /></div>
                    <span className="font-bold text-black uppercase">{categoryMiddleStories[1].author}</span>
                    <span className="text-gray-300">|</span>
                    <span>{categoryMiddleStories[1].date}</span>
                 </div>
                 <h3 className="text-lg font-bold uppercase leading-tight hover:text-red-600 cursor-pointer transition-colors">{categoryMiddleStories[1].title}</h3>
              </div>
            </div>

            {/* COLUMN 3: Iklan */}
            <div className="lg:col-span-4">
              <div className="w-full h-full min-h-[300px] bg-gray-200 flex items-center justify-center text-white font-bold text-2xl tracking-widest rounded-sm">
                <span className="text-gray-400">ADS</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= LATEST NEWS SECTION (NEW) ================= */}
      <section className="bg-white text-black pb-20">
        <div className="container mx-auto px-4 border-t border-gray-200 pt-10">
          
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* LEFT COLUMN: News Feed (70%) */}
            <div className="lg:w-8/12 w-full">
              <div className="flex flex-col space-y-2">
                {latestNewsItems.map((item) => (
                  <div key={item.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-gray-100 last:border-0">
                    {/* Thumbnail Image */}
                    <div className="md:w-5/12 w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-xs shrink-0">
                       <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center -mt-12">
                       {/* Meta Header */}
                       <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden shrink-0">
                             <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="Author" className="w-full h-full object-cover" />
                          </div>
                          <div className="flex flex-col md:flex-row md:items-center text-xs text-gray-500 font-medium">
                            <span className="font-bold text-black uppercase mr-2">{item.author}</span>
                            <span className="hidden md:inline text-gray-300 mr-2">|</span>
                            <span>{item.date}</span>
                          </div>
                       </div>
                       {/* Title */}
                       <h3 className="text-xl md:text-2xl font-bold uppercase leading-tight group-hover:text-red-600 transition-colors">
                         {item.title}
                       </h3>
                    </div>
                  </div>
                ))}

                {/* Button Load More */}
                <button className="w-full py-4 bg-white border border-black hover:bg-black hover:text-white text-black font-bold uppercase tracking-widest text-sm transition-colors rounded-sm mt-4">
                  Muat lagi
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Sidebar Berita Terkini (30%) */}
            <div className="lg:w-4/12 w-full">
               <div className="sticky top-36">
                 {/* Sidebar Header */}
                 <div className="flex items-center mb-8">
                    <h2 className="text-xl font-black uppercase tracking-tight mr-4 whitespace-nowrap">BERITA TERKINI</h2>
                    <div className="flex-grow h-px bg-gray-300"></div>
                 </div>

                 {/* News List Text Only */}
                 <div className="flex flex-col space-y-6">
                   {trendingNewsItems.map((item) => (
                     <div key={item.id} className="group cursor-pointer border-b border-gray-100 pb-4 last:border-0">
                        <div className="text-xs font-bold text-gray-500 uppercase mb-1">{item.author}</div>
                        <h4 className="text-sm font-bold uppercase leading-snug mb-2 group-hover:text-red-600 transition-colors">
                          {item.title}
                        </h4>
                        <div className="text-[10px] text-gray-400 font-medium">{item.date}</div>
                     </div>
                   ))}
                 </div>

                 {/* Button Index */}
                 <button className="w-full py-4 border border-gray-300 hover:bg-black hover:text-white hover:border-black text-gray-500 font-bold uppercase tracking-widest text-sm transition-all rounded-sm mt-8">
                   INDEKS BERITA
                 </button>
               </div>
            </div>

          </div>

        </div>
      </section>

      <FooterSection />

    </div>
  );

};

export default CategoryScreen;