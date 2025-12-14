"use client";
import React from 'react';

export default function FooterSection() {
  const channels = ["POLITIK", "HUKUM", "GAYA HIDUP", "PERISTIWA"];
  
  const companyLeft = ["TENTANG", "REDAKSI", "HAK JAWAB", "KEBIJAKAN PRIVASI"];
  const companyRight = ["TIP", "KARIR", "PEDOMAN MEDIA SIBER"];

  const socialsLeft = ["GOOGLE NEWS", "WHATSAPP", "INSTAGRAM", "TELEGRAM"];
  const socialsRight = ["TIKTOK", "FACEBOOK", "X (TWITTER)"];

  return (
    <footer className="w-full bg-[#0A0A0A] text-white font-sans pt-20 pb-10 border-t border-[#D91B1B]/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* --- KOLOM 1: Identitas (Logo & Alamat) --- */}
          <div className="lg:col-span-4 flex flex-col gap-8">
             {/* Logo Type */}
             <div className="flex flex-col gap-1">
               <h2 
                 className="text-5xl font-black text-[#D91B1B] tracking-tighter"
                 style={{ fontFamily: '"Times New Roman", Times, serif' }}
               >
                 SIN PO MEDIA
               </h2>
             </div>

             {/* Address */}
             <div className="flex flex-col gap-4">
               <div className="w-12 h-1 bg-[#D91B1B]"></div>
               <p className="text-xs font-medium text-gray-400 leading-relaxed uppercase max-w-sm tracking-wide">
                 GEDUNG SENATAMA, LT.3, JLN. KRAMAT KWITANG NO. 8, KWITANG, SENEN, JAKARTA PUSAT.
               </p>
             </div>
          </div>

          {/* --- KOLOM 2: SALURAN --- */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black text-white uppercase mb-6 tracking-widest">SALURAN</h3>
            <ul className="space-y-4">
              {channels.map((item, idx) => (
                <li key={idx} className="text-xs font-bold text-gray-400 hover:text-white cursor-pointer transition-colors tracking-wide">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* --- KOLOM 3: PERUSAHAAN --- */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black text-white uppercase mb-6 tracking-widest">PERUSAHAAN</h3>
            <div className="flex gap-10">
               {/* Sub Kolom Kiri */}
               <ul className="space-y-4">
                  {companyLeft.map((item, idx) => (
                    <li key={idx} className="text-xs font-bold text-gray-400 hover:text-white cursor-pointer transition-colors tracking-wide">
                      {item}
                    </li>
                  ))}
               </ul>
               {/* Sub Kolom Kanan */}
               <ul className="space-y-4">
                  {companyRight.map((item, idx) => (
                    <li key={idx} className="text-xs font-bold text-gray-400 hover:text-white cursor-pointer transition-colors tracking-wide">
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

          {/* --- KOLOM 4: SOSIAL --- */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-black text-white uppercase mb-6 tracking-widest">SOSIAL MEDIA</h3>
            <div className="flex gap-12">
               {/* Sub Kolom Kiri */}
               <ul className="space-y-4">
                  {socialsLeft.map((item, idx) => (
                    <li key={idx} className="text-xs font-bold text-gray-400 hover:text-white cursor-pointer transition-colors tracking-wide">
                      {item}
                    </li>
                  ))}
               </ul>
               {/* Sub Kolom Kanan */}
               <ul className="space-y-4">
                  {socialsRight.map((item, idx) => (
                    <li key={idx} className="text-xs font-bold text-gray-400 hover:text-white cursor-pointer transition-colors tracking-wide">
                      {item}
                    </li>
                  ))}
               </ul>
            </div>
          </div>

        </div>

        {/* --- COPYRIGHT --- */}
        <div className="mt-20 pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
            © 2025 Sin Po - PT Catra Media Nusantara
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase">Privacy</a>
             <a href="#" className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase">Terms</a>
             <a href="#" className="text-[10px] text-gray-500 hover:text-white transition-colors uppercase">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}