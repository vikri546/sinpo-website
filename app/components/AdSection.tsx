"use client";
import React, { useState, useEffect } from "react";
import { getIklan } from "../services/api";
import { Iklan } from "../types/api";
import { getImageUrl, safeArray } from "../utils/helpers";

interface AdSectionProps {
  position: "top" | "sidebar" | "middle";
  className?: string;
}

export default function AdSection({ position, className = "" }: AdSectionProps) {
  const [ads, setAds] = useState<Iklan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const res = await getIklan.list({ posisi: position, limit: 1 });
        setAds(safeArray(res.data));
      } catch (err) {
        console.error("Failed to fetch ads for position:", position, err);
      } finally {
        setLoading(false);
      }
    };
    fetchAds();
  }, [position]);

  if (loading || ads.length === 0) return null;

  const ad = ads[0];

  return (
    <div className={`ad-container overflow-hidden rounded-sm bg-gray-50 dark:bg-[#111] ${className}`}>
      <a href={ad.url || "#"} target="_blank" rel="noopener noreferrer" className="block relative group">
        <img 
          src={getImageUrl(ad.image)} 
          alt={ad.name} 
          className="w-full h-auto rounded-sm shadow-sm"
          loading="lazy"
          onError={(e) => { 
            console.error("Ad image load failed:", ad.name);
            e.currentTarget.src = 'https://placehold.co/800x600/eee/999?text=Advertisement'; 
          }}
        />

        <div className="absolute top-1 right-1 bg-black/40 text-[8px] text-white px-1 font-bold uppercase tracking-widest pointer-events-none">
          Advertisement
        </div>
      </a>
    </div>
  );
}
