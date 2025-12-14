"use client";
import React from 'react';
import { Play } from 'lucide-react';

export default function FourthSection() {
  const playlist = [
    {
      id: 1,
      image: "https://placehold.co/120x80/red/white?text=News+1",
      title: "PIMPINAN DPR RI TERIMA AUDIENSI SOLIDARITAS ...",
      duration: "00:01:44",
      active: true
    },
    {
      id: 2,
      image: "https://placehold.co/120x80/333/white?text=News+2",
      title: "RAPAT PLENO TERBUKA PENGUNDIAN NOMOR URUT",
      duration: "00:02:10",
      active: false
    },
    {
      id: 3,
      image: "https://placehold.co/120x80/555/white?text=News+3",
      title: "DEBAT PILGUB JAKARTA: ADU GAGASAN TIGA PASLON",
      duration: "00:03:15",
      active: false
    },
    {
      id: 4,
      image: "https://placehold.co/120x80/777/white?text=News+4",
      title: "UPDATE TERKINI: SITUASI LALU LINTAS IBU KOTA",
      duration: "00:01:20",
      active: false
    },
    {
      id: 5,
      image: "https://placehold.co/120x80/999/white?text=News+5",
      title: "KONFERENSI PERS KPU TERKAIT PILKADA SERENTAK",
      duration: "00:05:45",
      active: false
    }
  ];

  return (
    <section className="w-full font-sans relative">
      
      {/* --- BACKGROUND LAYER --- */}
      {/* Setengah hitam di atas, setengah putih di bawah untuk efek 'mix' */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-[#0A0A0A] z-0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white z-0"></div>

      {/* --- CONTENT LAYER --- */}
      <div className="container mx-auto px-4 relative z-10 pt-16 pb-16">
        
        {/* Title */}
        <div className="text-center mb-10">
           <h2 className="text-4xl md:text-6xl font-serif font-black text-white tracking-widest uppercase">
             SIN PO TV
           </h2>
           <div className="w-24 h-1 bg-[#D91B1B] mx-auto mt-4"></div>
        </div>

        {/* --- VIDEO PLAYER CONTAINER --- */}
        <div className="bg-[#111] rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row max-w-7xl mx-auto border border-gray-800">
          
          {/* LEFT: MAIN VIDEO PLAYER */}
          <div className="w-full lg:w-8/12 bg-black relative aspect-video group cursor-pointer">
            {/* Main Video Thumbnail / Content */}
            <img 
              src="https://placehold.co/800x450/darkred/white?text=SIN+PO+TV+LIVE" 
              alt="Main Video" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" 
            />
            
            {/* Breaking News Overlay (Left) */}
            <div className="absolute top-8 left-8 hidden md:block">
              <div className="flex flex-col items-start gap-1">
                <div className="text-white text-[10px] font-bold py-1 uppercase tracking-widest rounded-sm">
                  LIVE STREAMING
                </div>
                <div className="flex flex-col shadow-lg">
                  <span className="bg-white text-black text-4xl font-black px-4 py-2 leading-none uppercase tracking-tight">
                    BREAKING
                  </span>
                  <span className="bg-black text-white text-4xl font-black px-4 py-2 leading-none uppercase tracking-tight border border-white">
                    NEWS
                  </span>
                </div>
              </div>
            </div>

            {/* Title Overlay (Bottom) */}
            <div className="absolute bottom-12 left-0 right-0 text-center px-4">
               <h2 className="text-2xl md:text-4xl font-serif font-black text-white uppercase leading-tight drop-shadow-md">
                 PENGUNDIAN NOMOR URUT<br/>PILGUB JAKARTA
               </h2>
            </div>

            {/* Play Button (Center) */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
               <div className="w-20 h-20 bg-[#D91B1B]/90 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-transform duration-300">
                  <Play size={40} className="text-white fill-current ml-2" />
               </div>
            </div>
          </div>

          {/* RIGHT: PLAYLIST SIDEBAR */}
          <div className="w-full lg:w-4/12 bg-[#1a1a1a] text-white flex flex-col border-l border-gray-800">
            {/* Playlist Header */}
            <div className="p-5 bg-[#222] border-b border-gray-700 flex justify-between items-center">
               <div>
                  <span className="text-xs text-[#D91B1B] font-bold uppercase tracking-wider block mb-1">Sedang Tayang</span>
                  <h4 className="font-bold text-sm text-gray-100 uppercase truncate max-w-[200px]">PENGUNDIAN NOMOR URUT ...</h4>
               </div>
                <div className="w-2 h-2 rounded-full bg-[#D91B1B] animate-pulse"></div>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
               {playlist.map((item) => (
                 <div 
                   key={item.id} 
                   className={`flex gap-4 p-4 border-b border-gray-800 cursor-pointer hover:bg-white/5 transition-colors group ${item.active ? 'bg-white/5' : ''}`}
                 >
                    {/* Thumb */}
                    <div className="w-28 h-18 flex-shrink-0 bg-black relative rounded-sm overflow-hidden">
                       <img src={item.image} alt="thumb" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                       {item.active && (
                         <div className="absolute inset-0 border-2 border-[#D91B1B] z-10"></div>
                       )}
                       <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[9px] px-1 rounded-sm">
                          {item.duration}
                       </div>
                    </div>
                    
                    {/* Meta */}
                    <div className="flex flex-col justify-center">
                       <h5 className={`text-sm font-bold leading-tight line-clamp-2 mb-1 group-hover:text-[#D91B1B] transition-colors ${item.active ? 'text-white' : 'text-gray-400'}`}>
                         {item.title}
                       </h5>
                       <span className="text-[10px] text-gray-500 uppercase tracking-wide">Sin Po TV</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>

        {/* --- ADVERTISEMENT --- */}
        <div className="mt-16 flex justify-center">
           <div className="w-full max-w-[970px] h-[120px] bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden rounded-md">
              <img 
                src="https://placehold.co/970x120/f3f4f6/d1d5db?text=Iklan+Space+Banner" 
                alt="Ads" 
                className="w-full h-full object-cover opacity-50 hover:opacity-100 transition-opacity"
              />
              <span className="absolute bottom-1 right-1 text-[9px] text-gray-400 bg-white/80 px-1 rounded-sm">IKLAN</span>
           </div>
        </div>

      </div>
    </section>
  );
}