"use client";
import React, { useState, useEffect } from "react";
import { Search, Menu, Moon, Sun, User, X as CloseIcon } from "lucide-react";
import { useTheme } from "./ThemeToggle";
import LogoLight from "../images/sinpo.svg";
import LogoDark from "../images/sinpodark.svg";

// --- Components Helper ---
const SocialIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="text-[#1a1a1a] dark:text-gray-300 hover:text-[#D91B1B] dark:hover:text-[#D91B1B] transition-colors duration-200 cursor-pointer">
    {children}
  </div>
);

const TwitterIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 12 12" fill="currentColor">
    <path d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312zM1.47.706l7.404 10.588h1.733L3.203.706z" />
  </svg>
);

const InstagramIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" fill="currentColor">
    <path d="M16 0c-4.349 0-4.891.021-6.593.093c-1.709.084-2.865.349-3.885.745a7.847 7.847 0 0 0-2.833 1.849A7.757 7.757 0 0 0 .84 5.52C.444 6.54.179 7.696.095 9.405c-.077 1.703-.093 2.244-.093 6.593s.021 4.891.093 6.593c.084 1.704.349 2.865.745 3.885a7.847 7.847 0 0 0 1.849 2.833a7.757 7.757 0 0 0 2.833 1.849c1.02.391 2.181.661 3.885.745c1.703.077 2.244.093 6.593.093s4.891-.021 6.593-.093c1.704-.084 2.865-.355 3.885-.745a7.847 7.847 0 0 0-1.849-2.833A7.716 7.716 0 0 0 26.478.838c-1.02-.396-2.181-.661-3.885-.745C20.89.016 20.349 0 16 0zm0 2.88c4.271 0 4.781.021 6.469.093c1.557.073 2.405.333 2.968.553a4.989 4.989 0 0 1 1.844 1.197a4.931 4.931 0 0 1 1.192 1.839c.22.563.48 1.411.553 2.968c.072 1.688.093 2.199.093 6.469s-.021 4.781-.099 6.469c-.084 1.557-.344 2.405-.563 2.968c-.303.751-.641 1.276-1.199 1.844a5.048 5.048 0 0 1-1.844 1.192c-.556.22-1.416.48-2.979.553c-1.697.072-2.197.093-6.479.093s-4.781-.021-6.48-.099c-1.557-.084-2.416-.344-2.979-.563c-.76-.303-1.281-.641-1.839-1.199c-.563-.563-.921-1.099-1.197-1.844c-.224-.556-.48-1.416-.563-2.979c-.057-1.677-.084-2.197-.084-6.459c0-4.26.027-4.781.084-6.479c.083-1.563.339-2.421.563-2.979c.276-.761.635-1.281 1.197-1.844c.557-.557 1.079-.917 1.839-1.199c.563-.219 1.401-.479 2.964-.557c1.697-.061 2.197-.083 6.473-.083zm0 4.907A8.21 8.21 0 0 0 7.787 16A8.21 8.21 0 0 0 16 24.213A8.21 8.21 0 0 0 24.213 16A8.21 8.21 0 0 0 16 7.787zm0 13.546c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333S18.948 21.333 16 21.333zM26.464 7.459a1.923 1.923 0 0 1-1.923 1.921a1.919 1.919 0 1 1 0-3.838c1.057 0 1.923.86 1.923 1.917z" />
  </svg>
);

const FacebookIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor">
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
  </svg>
);

const TiktokIcon = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" stroke="currentColor">
    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z" />
  </svg>
);

interface HeaderProps {
  onNavigateToHome: () => void;
  onNavigateToCategory: (id?: string | number) => void;
  onNavigateToGallery: () => void;
}

export default function HeaderSection({ onNavigateToHome, onNavigateToCategory, onNavigateToGallery }: HeaderProps) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [dateStr, setDateStr] = useState("");
  
  // Ambil state dari ThemeToggle
  const { theme, toggleTheme, isMounted } = useTheme();

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const datePart = now.toLocaleDateString("id-ID", options);
      const timePart = now.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setDateStr(`${datePart} | ${timePart} WIB`);
    };
    updateDate();
    const timer = setInterval(updateDate, 60000);
    return () => clearInterval(timer);
  }, []);

  const navItems = [
    "POLITIK", "HUKUM", "EKBIS", "PERISTIWA", 
    "GALERI", "OLAHRAGA", "BUDAYA",
  ];

  // Fungsi helper untuk menentukan logo yang ditampilkan
  const getLogoSrc = () => {
    // Tampilkan logo default (Light) jika belum mounted untuk menghindari hydration mismatch
    // ATAU jika tema memang 'light'
    if (!isMounted) return LogoLight.src || LogoLight;
    return theme === 'light' ? (LogoLight.src || LogoLight) : (LogoDark.src || LogoDark);
  };

  return (
    <header className="w-full bg-white dark:bg-[#0A0A0A] transition-colors duration-300 font-sans border-b border-gray-100 dark:border-gray-800 relative z-50 sticky top-0">
      
      {/* MOBILE HEADER */}
      <div className="md:hidden flex flex-col w-full bg-white dark:bg-[#0A0A0A]">
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
           <span className="text-[10px] text-gray-500 dark:text-gray-400 w-auto max-w-[35%] truncate">
             {dateStr}
           </span>

           <div className="flex justify-center w-auto">
             <a href="/" className="block">
                <img 
                  src={getLogoSrc()}
                  alt="SIN PO Logo" 
                  className="h-6 w-auto object-contain"
                />
             </a>
           </div>

           <div className="flex justify-end gap-3 w-auto items-center">
              <button 
                onClick={toggleTheme}
                className="w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 relative transition-colors flex items-center px-1"
                aria-label="Toggle Theme"
              >
                 {/* Circle Knob - Posisi diatur oleh translate */}
                 {isMounted && (
                   <div 
                     className={`w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center transform transition-transform duration-300 ${
                       theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
                     }`}
                   >
                      {theme === 'dark' 
                        ? <Moon size={10} className="text-black fill-black" /> 
                        : <Sun size={10} className="text-yellow-500 fill-yellow-500" />
                      }
                   </div>
                 )}
                 {!isMounted && (
                    <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                 )}
              </button>
              
              <div className="h-5 w-px bg-gray-300 dark:bg-gray-700 mx-1"></div>
              
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#1a1a1a] dark:text-white">
                 {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
              </button>
           </div>
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-[#0A0A0A]">
            <div className="flex-shrink-0 mr-4">
               <div className="bg-black text-white px-2.5 py-1 rounded-sm flex items-center gap-1.5 shadow-sm">
                  <span className="font-bold text-[10px] tracking-wider">LIVE TV</span>
                  <span className="w-1.5 h-1.5 bg-[#D91B1B] rounded-full animate-pulse border border-white/50"></span>
               </div>
            </div>

            <div className="flex-1 overflow-x-auto flex gap-5 scrollbar-hide no-scrollbar items-center"> 
               <style jsx>{`
                 .no-scrollbar::-webkit-scrollbar { display: none; }
                 .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
               `}</style>
               {navItems.map((item) => (
                 <button 
                   key={item} 
                   onClick={() => {
                     if (item === "INDEKS") {
                       onNavigateToCategory();
                     } else if (item === "GALERI") {
                       onNavigateToGallery();
                     } else {
                       onNavigateToCategory(item.toLowerCase());
                     }
                   }}
                   className="text-[11px] font-bold text-[#1a1a1a] dark:text-gray-300 whitespace-nowrap uppercase hover:text-[#D91B1B] transition-colors"
                 >
                    {item}
                 </button>
               ))}
            </div>

            <button className="flex-shrink-0 ml-4 text-[#1a1a1a] dark:text-white">
               <Search size={18} />
            </button>
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between relative">
          
          <div className="flex items-center gap-4 md:w-1/3">
            <div className="hidden md:flex bg-black text-white px-3 py-1.5 items-center gap-2 rounded-sm shadow-md hover:bg-[#D91B1B] transition-colors cursor-pointer">
              <span className="font-serif font-bold text-[11px] tracking-widest leading-none">
                SIN PO TV
              </span>
              <span className="w-2 h-2 bg-[#D91B1B] rounded-full animate-pulse border border-white"></span>
            </div>

            <div className="hidden lg:flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              <SocialIcon><TwitterIcon size={14} /></SocialIcon>
              <SocialIcon><InstagramIcon size={16} /></SocialIcon>
              <SocialIcon><FacebookIcon size={16} /></SocialIcon>
              <SocialIcon><TiktokIcon size={16} /></SocialIcon>
            </div>
          </div>

          <div className="w-auto md:w-1/3 flex justify-center absolute left-1/2 transform -translate-x-1/2">
            <a href="/" className="block group">
              <img 
                src={getLogoSrc()}
                alt="SIN PO Logo" 
                className="h-8 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 md:gap-4 md:w-1/3">
            <div className="relative flex items-center justify-end">
               <div className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-48 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                 <input 
                   type="text" 
                   placeholder="Cari berita..." 
                   className="w-full bg-gray-100 dark:bg-gray-800 text-sm px-4 py-1.5 rounded-full focus:outline-none border border-transparent focus:border-[#D91B1B] text-black dark:text-white"
                 />
               </div>
               <button 
                 onClick={() => setIsSearchOpen(!isSearchOpen)}
                 className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 dark:bg-gray-800 text-[#1a1a1a] dark:text-white hover:bg-[#D91B1B] hover:text-white transition-all duration-300"
               >
                 {isSearchOpen ? <CloseIcon size={16} /> : <Search size={16} />}
               </button>
            </div>
            
            <button 
              onClick={toggleTheme}
              className="w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 relative transition-colors flex items-center px-1"
              aria-label="Toggle Theme"
            >
               {isMounted && (
                 <div 
                   className={`w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center transform transition-transform duration-300 ${
                     theme === 'dark' ? 'translate-x-[26px]' : 'translate-x-0'
                   }`}
                 >
                    {theme === 'dark' 
                      ? <Moon size={12} className="text-black fill-black" /> 
                      : <Sun size={12} className="text-yellow-500 fill-yellow-500" />
                    }
                 </div>
               )}
               {!isMounted && (
                  <div className="w-5 h-5 rounded-full bg-white shadow-sm" />
               )}
            </button>
          </div>
        </div>

        <div className="hidden lg:block border-t border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0A0A0A]">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
              {dateStr}
            </div>

            <nav>
              <ul className="flex space-x-1">
                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        if (item === "INDEKS") onNavigateToCategory();
                        else if (item === "GALERI") onNavigateToGallery();
                        else onNavigateToCategory(item.toLowerCase());
                      }}
                      className="block px-5 py-3 text-[13px] font-bold text-[#1a1a1a] dark:text-gray-300 hover:text-[#D91B1B] dark:hover:text-white transition-colors tracking-wide border-b-2 border-transparent hover:border-[#D91B1B]"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-3">
              <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 text-[#1a1a1a] dark:text-white hover:bg-[#D91B1B] hover:text-white transition-all">
                 <User size={16} />
              </button>
              <button
                className="text-[#1a1a1a] dark:text-white p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-[#0A0A0A] shadow-xl border-t border-gray-100 dark:border-gray-800 z-[60] animate-in slide-in-from-top-2">
          <div className="p-4 flex flex-col gap-2">
            <div className="mb-4 relative">
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#D91B1B] text-black dark:text-white pl-10"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16}/>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "INDEKS" ? "#" : `/category/${item.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-bold text-[#1a1a1a] dark:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#D91B1B] transition-colors"
                  onClick={(e) => {
                    if (item === "INDEKS" && onNavigateToCategory) {
                      e.preventDefault();
                      onNavigateToCategory();
                    }
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-center gap-6">
              <SocialIcon><TwitterIcon size={20} /></SocialIcon>
              <SocialIcon><InstagramIcon size={20} /></SocialIcon>
              <SocialIcon><FacebookIcon size={20} /></SocialIcon>
              <SocialIcon><TiktokIcon size={20} /></SocialIcon>
            </div>
            
            <div className="text-center mt-4 text-[10px] text-gray-400">
               {dateStr}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}