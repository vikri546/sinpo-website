import React from 'react';
import { MessageSquare, Type, User, Calendar, Share2, Clock, Play } from 'lucide-react';
import HeaderSection from './HeaderSection';
import FooterSection from './FooterSection';

interface ArticleDetailScreenProps {
  onNavigateToHome?: () => void;
}

export default function ArticleDetailScreen({ onNavigateToHome }: ArticleDetailScreenProps) {
  // Data untuk sidebar widget
  const sidebarNews = [
    {
      id: 1,
      category: "POJOK SINPO",
      title: "PECINAN SEMARANG, TERGESER KEBIJAKAN KOLONIAL ...",
      image: "https://images.unsplash.com/photo-1560964645-5c9f3e87d3a7?w=500&auto=format&fit=crop",
      isRedTitle: false
    },
    {
      id: 2,
      category: "BONGKAR",
      title: "POLEMIK KAMAR DAGANG INDUSTRI, ANINDYA VERSUS ARSJAD ...",
      image: "https://images.unsplash.com/photo-1575320181282-9afab399332c?w=500&auto=format&fit=crop",
      isRedTitle: true
    }
  ];

  // Data untuk Berita Terkini
  const latestNews = [
    {
      id: 1,
      title: "KPK SITA DOKUMEN DAN UANG RP300 JUTA TERKAIT PERKARA GUBERNUR KALSEL",
      author: "GEORGE ASEP",
      date: "Senin, 33 Mei 2024",
      image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      title: "KOMNAS HAM SODORKAN REKOMENDASI AGENDA HAM UNTUK PEMERINTAHAN PRABOWO",
      author: "GEORGE ASEP",
      date: "Senin, 33 Mei 2024",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      title: "RATUSAN PERSONEL GABUNGAN KAWAL KAMPANYE PILGUB JAKARTA HARI INI",
      author: "GEORGE ASEP",
      date: "Senin, 33 Mei 2024",
      image: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      title: "DUA JABATAN JENDERAL BINTANG 3 DI POLRI KOSONG",
      author: "GEORGE ASEP",
      date: "Senin, 33 Mei 2024",
      image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=300&h=200&fit=crop" // Placeholder badge
    },
    {
      id: 5,
      title: "POLISI JAGA KETAT GUDANG LOGISTIK KPU DKI JAKARTA DI PPK KECAMATAN SENEN",
      author: "GEORGE ASEP",
      date: "Senin, 33 Mei 2024",
      image: "https://images.unsplash.com/photo-1590412177306-033100df3f08?w=300&h=200&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <HeaderSection />
      {/* Container Utama */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Judul Artikel Utama */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase leading-tight tracking-tight mb-4">
            Tegas, Prabowo ke Para Menteri: Copot Pejabat Yang Tak Kerja Keras
          </h1>
          
          <div className="flex items-center text-xs text-gray-500 gap-4 uppercase font-semibold">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white rounded-full p-1"><User size={12}/></span>
              <span className="text-red-600">ACD</span>
              <span className="text-gray-400">|</span>
              <span className="text-red-600">SINPO.ID</span>
            </div>
            <span>Senin, 23 Okt 2024 - 17:15</span>
          </div>
        </div>

        {/* Layout Grid Artikel & Sidebar */}
        {/* Added items-start to ensure sticky column has track space to move */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
          
          {/* Kolom Kiri (Artikel Utama) */}
          <div className="lg:col-span-8">
            
            {/* Gambar Utama */}
            <div className="mb-3">
              <img 
                src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=1000&auto=format&fit=crop" 
                alt="Presiden Prabowo Subianto" 
                className="w-full h-auto object-cover rounded-sm aspect-video"
              />
              <p className="text-xs text-gray-500 mt-2 italic">
                Presiden Prabowo Subianto saat memimpin rapat Kabinet Merah Putih (SinPo.id/ Tim Media)
              </p>
            </div>

            {/* Toolbar Kecil (Font Size & Comment) */}
            <div className="flex justify-end items-center gap-4 border-b border-gray-100 pb-2 mb-6 text-gray-400">
              <button className="hover:text-black"><Type size={20} /></button>
              <button className="hover:text-black"><MessageSquare size={20} /></button>
            </div>

            {/* Isi Artikel */}
            <div className="prose max-w-none text-gray-800 leading-relaxed">
              <p className="mb-4">
                <strong className="text-black">Sinpo.id</strong> - Presiden RI Prabowo Subianto meminta para menterinya bisa mengarahkan pejabat-pejabat di bawah mereka agar bekerja keras memberikan pelayanan.
              </p>
              <p className="mb-4">
                terbaik bagi rakyat Indonesia. Hal ini disampaikannya saat membuka sidang kabinet paripurna perdana, di Istana Merdeka, Jakarta, Rabu, 23 Oktober 2024.
              </p>
              <p className="mb-6">
                Prabowo menyebut birokrasi di Indonesia sangat terkenal lambat dan 'ribet'. Para menteri pun diimbau untuk segera mengatasi kesulitan dan hambatan atau bottle neck yang ada.
              </p>

              {/* Kutipan 1 */}
              <div className="bg-gray-50 p-6 md:p-8 mb-8 mt-10 relative rounded-sm">
                <span className="text-6xl text-black absolute -top-6 left-6 font-serif font-bold leading-none">“</span>
                <p className="relative z-10 text-gray-900 leading-relaxed text-lg pt-2">
                  Bahkan ada pembicaraan oleh rakyat kita bahwa birokrasi pemerintah kita sering mempersulit, bukan mempermudah keperluan rakyat. Bahkan ada yang mengatakan kalau bisa dibikin sulit kenapa dibikin mudah. Ini saya minta menteri-menteri sekarang mari kita lebih berani, tidak ragu ragu untuk memberi pelayanan terbaik untuk rakyat kita," ujar Prabowo.
                </p>
              </div>

              <p className="mb-6">
                Ia melanjutkan para menteri melaporkan kesulitan yang ada, termasuk ketika menemukan pejabat-pejabat yang tidak bekerja dengan baik dan patuh, dan tidak ragu untuk mencopot mereka dengan wewenang yang sudah diberikan oleh Prabowo.
              </p>

              {/* Gambar Kedua */}
              <div className="mb-6">
                 <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000&auto=format&fit=crop" 
                  alt="Sidang Kabinet" 
                  className="w-full h-auto object-cover rounded-sm aspect-video"
                />
                <p className="text-xs text-gray-500 mt-2 italic">
                  Presiden Prabowo Subianto saat memimpin rapat Kabinet Merah Putih (SinPo.id/ Tim Media)
                </p>
              </div>

              {/* Kutipan 2 */}
              <div className="bg-gray-50 p-6 md:p-8 mb-8 mt-10 relative rounded-sm">
                <span className="text-6xl text-black absolute -top-6 left-6 font-serif font-bold leading-none">“</span>
                <p className="relative z-10 text-gray-900 leading-relaxed text-lg pt-2">
                  Kalau Anda tidak puas dengan pejabat pejabat di bawah Anda, laporkan, kita segera ganti. Begitu banyak orang yang mau mengabdi. Tidak ada orang di sini yang kebal. Yang tidak patuh, tidak bekerja keras untuk bangsa dan negara dan rakyat. Saudara saya beri wewenang, copot dan suruh tinggal di rumah saja dari pada bikin susah kita, tegasnya.
                </p>
              </div>

              <p className="mb-4">
                Presiden ke-8 RI itu juga menekankan kepada para menteri untuk bekerja cepat membentuk program kerjanya. "Saya beri kesempatan segera. Sewaktu-waktu akan saya panggil untuk koordinasi," kata Prabowo.
              </p>
              <p className="mb-8">
                Prabowo pun menekankan dirinya ingin salah satu program andalannya, yaitu Makan Bergizi Gratis (MBG) untuk segera dieksekusi. Para anggota kabinet diimbau untuk tak ragu dalam bergerak untuk mencapai target.
              </p>

              {/* Baca Juga Section */}
              <div className="border border-gray-200 rounded-lg p-6 my-8 relative overflow-hidden bg-white shadow-sm">
                
                {/* Watermark "S" Background */}
                <div className="absolute -right-4 -bottom-10 pointer-events-none select-none z-0">
                   <span className="font-serif text-[180px] leading-none text-red-50 opacity-80 italic">S</span>
                </div>

                {/* Header Section dengan Garis */}
                <div className="flex items-center mb-5 relative z-10">
                  <h4 className="font-bold text-sm text-black mr-4 shrink-0">Baca Juga</h4>
                  <div className="h-[1px] bg-gray-300 w-full"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10 cursor-pointer group">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop" 
                    alt="Luhut" 
                    className="w-full sm:w-40 h-24 object-cover rounded-lg shadow-sm flex-shrink-0"
                  />
                  <div className="flex flex-col justify-center h-full pt-1">
                    <h3 className="text-xl md:text-2xl font-normal text-gray-900 group-hover:text-red-600 transition-colors leading-tight mb-2">
                      PKS Puji Luhut: Orang Yang Responsif, Wajar Diberi 2 Jabatan
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">Senin, 23 Mei 2023 - 19:15</span>
                  </div>
                </div>
              </div>

              {/* Subheading Program Andalan */}
              <div className="mb-4">
                <h3 className="text-xl font-bold uppercase border-b-2 border-gray-200 inline-block pb-1 pr-4">
                  PROGRAM ANDALAN MAKAN BERGIZI
                  <div className="h-[3px] w-1/2 bg-black mt-1 absolute"></div> 
                </h3>
              </div>
              
              <p className="mb-4">
                Saya masih mendengar beberapa tokoh meragukan kemampuan kita untuk melaksanakan itu. Saya tidak katakan bahwa ini bisa selesai dalam 1 minggu 2 minggu atau 3 bulan, tidak ada di antara kita yang punya tongkat Nabi Sulaiman. Tapi kita bisa berhitung kita bisa mengelola kita bisa alokasi dana kita bisa kerahkan sumber daya," kata dia.
              </p>
              <p>
                Bagi saya makan bergizi untuk anak-anak dan ibu hamil ini adalah strategik. Yang tidak mendukung hal ini silakan keluar dari pemerintahan yang saya pimpin, kita satu tim harus yakin semuanya ini bagian dari pada kebangkitan bangsa Indonesia," tandasnya.
              </p>
            </div>
          </div>

          {/* Kolom Kanan (Sidebar) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-8 h-fit self-start">
            
            {/* Widget: TDK KALAH PENTING */}
            <div className="bg-black dark:bg-[#111] text-white p-6 rounded-md shadow-lg transition-colors">
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

            {/* Widget: BERITA TERPOPULER */}
            <div className="bg-white mt-8">
              <h3 className="text-3xl font-black uppercase text-[#222] mb-6 tracking-tight">
                BERITA TERPOPULER
              </h3>

              {/* Featured Popular Item */}
              <div className="mb-8 cursor-pointer group">
                <div className="overflow-hidden rounded-sm mb-3">
                  <img 
                    src="https://images.unsplash.com/photo-1596529847208-d8d17e69c110?w=500&auto=format&fit=crop" 
                    alt="TNI"
                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center text-[11px] mb-2 font-sans">
                  <span className="font-bold text-gray-600 mr-4 text-xs">Junot</span>
                  <span className="text-gray-400 font-medium">Senin, 23 Mei 2024 / 19:15 WIB</span>
                </div>
                <h3 className="font-bold text-lg leading-snug text-gray-900 group-hover:text-red-600 transition-colors">
                  Jalankan Misi Perdamaian, Satgas Kizi TNI Berangkat Ke Afrika Tengah
                </h3>
              </div>

              {/* List Berita Populer */}
              <div className="space-y-6">
                {[
                  {
                    title: "Berdampak Ke UMKM, Legislator Minta Kenaikan PPN Di Pertimbangkan Ulang",
                    author: "Ipang",
                    date: "Senin, 23 Mei 2024 / 19:15 WIB",
                    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=100&h=100&fit=crop"
                  },
                  {
                    title: "Marselino Usai Cetak Dua Gol: Saya Berdoa Supaya Bisa Bermain Baik",
                    author: "Ipang",
                    date: "Senin, 23 Mei 2024 / 19:15 WIB",
                    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=100&h=100&fit=crop"
                  },
                  {
                    title: "Indonesia Masuk Tiga Besar Grup C Kualifikasi Piala Dunia 2026",
                    author: "Ipang",
                    date: "Senin, 23 Mei 2024 / 19:15 WIB",
                    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&fit=crop"
                  },
                  {
                    title: "Menkop Budi Arie Yakin Koperasi Bisa Bantu Tumbuhkan Ekonomi RI 8 Persen",
                    author: "Ipang",
                    date: "Senin, 23 Mei 2024 / 19:15 WIB",
                    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=100&h=100&fit=crop"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 group cursor-pointer items-start">
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                        <img src={item.img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col pt-0.5">
                      <h4 className="text-[13px] font-bold leading-snug text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                        {item.title}
                      </h4>
                      <div className="flex items-center text-[10px] text-gray-500 font-sans mt-auto">
                        <span className="font-bold text-gray-600 mr-3">{item.author}</span>
                        <span className="text-gray-400 font-medium">{item.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SECTION BERITA TERKAIT */}
        <div className="border-t-2 border-gray-100 pt-8 mt-12 mb-20">
          <h2 className="text-3xl font-bold uppercase text-gray-700 mb-8 tracking-tight">BERITA TERKAIT</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            
            {/* Kolom 1 */}
            <div>
              {/* Featured Item */}
              <div className="flex gap-5 mb-6 group cursor-pointer items-start">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop" 
                  alt="BPKH" 
                  className="w-40 h-28 object-cover rounded-sm flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[11px] uppercase font-bold tracking-wide">
                    <img src="https://i.pravatar.cc/150?u=dimas" className="w-5 h-5 rounded-full grayscale" alt="author"/>
                    <span className="text-gray-800">DIMAS ANUGERAH</span>
                    <span className="font-medium text-gray-400 normal-case ml-1">Senin, 23 Mei 2024</span>
                  </div>
                  <h3 className="font-bold text-md leading-snug group-hover:text-red-600 transition-colors uppercase text-gray-900">
                    AGAR EFISIEN, AKADEMISI USUL BPKH DAN BADAN PENYELENGGARA HAJI DILEBUR
                  </h3>
                </div>
              </div>

              {/* Text Links */}
              <div className="space-y-5 mt-6 border-t border-gray-100 pt-5">
                 <div className="cursor-pointer group">
                    <h4 className="font-bold text-sm leading-relaxed text-gray-800 group-hover:text-red-600 uppercase">
                      JADI KETUA KOMISI IV, TITIEK SOEHARTO SIAP PERCEPAT SWASEMBADA & KETAHANAN PANGAN
                    </h4>
                 </div>
                 <div className="cursor-pointer group">
                    <h4 className="font-bold text-sm leading-relaxed text-gray-800 group-hover:text-red-600 uppercase">
                      KEJAGUNG TANGKAP TIGA HAKIM PN SURABAYA YANG BERI VONIS BEBAS RONALD TANNUR
                    </h4>
                 </div>
              </div>
            </div>

            {/* Kolom 2 */}
            <div>
              {/* Featured Item */}
              <div className="flex gap-5 mb-6 group cursor-pointer items-start">
                <img 
                  src="https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=400&h=250&fit=crop" 
                  alt="KPK" 
                  className="w-40 h-28 object-cover rounded-sm flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[11px] uppercase font-bold tracking-wide">
                    <img src="https://i.pravatar.cc/150?u=george" className="w-5 h-5 rounded-full grayscale" alt="author"/>
                    <span className="text-gray-800">GEORGE ASEP</span>
                    <span className="font-medium text-gray-400 normal-case ml-1">Senin, 23 Mei 2024</span>
                  </div>
                  <h3 className="font-bold text-md leading-snug group-hover:text-red-600 transition-colors uppercase text-gray-900">
                    KPK PANGGIL MANTAN PEJABAT DITJEN PAJAK TERKAIT KLARIFIKASI LHKPN
                  </h3>
                </div>
              </div>

              {/* Text Links */}
              <div className="space-y-5 mt-6 border-t border-gray-100 pt-5">
                 <div className="cursor-pointer group">
                    <h4 className="font-bold text-sm leading-relaxed text-gray-800 group-hover:text-red-600 uppercase">
                      PEMERINTAH SIAPKAN ANGGARAN RP 71 TRILIUN UNTUK PROGRAM MAKAN BERGIZI GRATIS
                    </h4>
                 </div>
                 <div className="cursor-pointer group">
                    <h4 className="font-bold text-sm leading-relaxed text-gray-800 group-hover:text-red-600 uppercase">
                      PRESIDEN JOKOWI RESMIKAN BENDUNGAN AMERORO DI SULAWESI TENGGARA
                    </h4>
                 </div>
              </div>
            </div>

          </div>
        </div>

      </main>

      {/* VISUAL SLIDER POSTER SECTION */}
      {/* Update: Menghapus border-t border-gray-100 (divider atas) */}
      <div className="w-full bg-white relative py-12 mt-4 pb-24 overflow-hidden">
        
        {/* Update: Mengubah padding container agar lebih lebar (menghapus px-8 md:px-20 lg:px-32) */}
        {/* Menggunakan max-w-full atau max-w-7xl dengan padding standar agar menyentuh sisi ke sisi secara proporsional */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
            
            {/* Background Watermark */}
            <h2 className="absolute -top-12 -left-4 text-[100px] md:text-[140px] font-black text-gray-100/80 tracking-tighter select-none z-0 pointer-events-none uppercase -rotate-6 transform origin-bottom-left">
                VISUAL
            </h2>
            
            <div className="relative z-10 pt-16">
            {/* Grid poster tetap, namun karena container lebih lebar, poster akan otomatis melebar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                
                {/* Poster 1: PRESIDEN */}
                <div className="relative group cursor-pointer overflow-hidden h-[450px] shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?q=80&w=600&auto=format&fit=crop" 
                    alt="Presiden" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                </div>

                {/* Poster 2: BRICS */}
                <div className="relative group cursor-pointer overflow-hidden h-[450px] shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&auto=format&fit=crop" 
                    alt="BRICS" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                </div>

                {/* Poster 3: BPOM */}
                <div className="relative group cursor-pointer overflow-hidden h-[450px] shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop" 
                    alt="BPOM" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                </div>

                {/* Poster 4: PRIORITAS */}
                <div className="relative group cursor-pointer overflow-hidden h-[450px] shadow-lg">
                <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" 
                    alt="Prioritas" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-10">
             <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-800 transition-colors"></button>
             <button className="w-2.5 h-2.5 rounded-full bg-gray-800"></button>
             <button className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-gray-800 transition-colors"></button>
          </div>
          </div>
        </div>
      </div>

      {/* BERITA TERKINI SECTION (New Centered Vertical List) */}
      <div className="w-full bg-gray-50/50 py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative">
          
          {/* Background Watermark Centered */}
          <div className="absolute top-0 left-0 right-0 flex justify-center z-0 pointer-events-none select-none overflow-hidden">
            <h2 className="text-[100px] md:text-[150px] font-black text-gray-200/60 uppercase tracking-tighter leading-none text-center">
              BERITA<br/>TERKINI
            </h2>
          </div>

          <div className="relative z-10 pt-20 space-y-4">
             {latestNews.map((news) => (
               <div key={news.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-center group cursor-pointer hover:shadow-md transition-all">
                  {/* Image */}
                  <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-md">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center gap-3 mb-3">
                       <img src={`https://i.pravatar.cc/150?u=${news.id}`} className="w-8 h-8 rounded-full grayscale" alt="author"/>
                       <div className="flex flex-col">
                          <span className="text-[10px] font-bold uppercase text-gray-900 tracking-wide">{news.author}</span>
                          <span className="text-[10px] text-gray-400 font-medium">{news.date}</span>
                       </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-900 leading-tight group-hover:text-red-600 transition-colors">
                      {news.title}
                    </h3>
                  </div>
               </div>
             ))}

             {/* Button Muat Lagi */}
             <div className="pt-8">
               <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-500 font-bold py-4 rounded-lg uppercase tracking-wider text-sm transition-colors">
                 Muat lagi
               </button>
             </div>
          </div>

        </div>
      </div>

      <FooterSection />
    </div>
  );
}