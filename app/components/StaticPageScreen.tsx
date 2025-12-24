"use client";
import React, { useState, useEffect, useCallback } from "react";
import { RefreshCw, AlertCircle, Clock } from "lucide-react";
import HeaderSection from "./HeaderSection";
import FooterSection from "./FooterSection";
import { getStatis } from "../services/api";
import { Statis } from "../types/api";
import { fixContentImages } from "../utils/helpers";

interface StaticPageScreenProps {
  staticId: string | number;
  onNavigateToHome: () => void;
  onNavigateToCategory: (id?: string | number) => void;
}

export default function StaticPageScreen({
  staticId,
  onNavigateToHome,
  onNavigateToCategory,
}: StaticPageScreenProps) {
  const [data, setData] = useState<Statis | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getStatis.detail(staticId);
      if (res.success && res.data) {
        setData(res.data);
      } else {
        throw new Error("Gagal memuat halaman.");
      }
    } catch (err: any) {
      setError(err.message || "Gagal memuat data halaman.");
    } finally {
      setLoading(false);
    }
  }, [staticId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] space-y-4">
        <RefreshCw className="animate-spin text-[#D91B1B]" size={32} />
        <p className="text-gray-500">Memuat halaman...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#0A0A0A] p-4 text-center">
        <AlertCircle size={48} className="text-[#D91B1B] mb-4" />
        <p className="text-gray-500 mb-6">{error}</p>
        <button onClick={onNavigateToHome} className="underline text-blue-500">Kembali ke Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] font-sans text-black dark:text-white transition-colors duration-300">
      <HeaderSection 
        onNavigateToHome={onNavigateToHome} 
        onNavigateToCategory={onNavigateToCategory} 
        onNavigateToGallery={() => {}} // TODO: implement
      />

      <main className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <Clock size={14} />
            <span>Hak Cipta © SIN PO MEDIA</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed prose-img:rounded-md">
           <div dangerouslySetInnerHTML={{ __html: fixContentImages(data.content) }} />
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
