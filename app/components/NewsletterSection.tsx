"use client";
import React, { useState } from "react";
import { Mail, Send, RefreshCw, Check } from "lucide-react";
import { getNewsletter } from "../services/api";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus("idle");
    try {
      const res = await getNewsletter.subscribe(email);
      if (res.success) {
        setStatus("success");
        setMessage("Terima kasih! Anda telah terdaftar di newsletter kami.");
        setEmail("");
      } else {
        throw new Error(res.message || "Gagal mendaftar.");
      }
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Gagal mendaftar. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#D91B1B]/10 to-transparent p-8 rounded-lg border border-[#D91B1B]/20 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-3 text-[#D91B1B]">
            <Mail size={24} />
            <h3 className="text-xl font-black uppercase tracking-tight text-white">Newsletter</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-medium">
            Dapatkan berita terbaru dan terpercaya langsung di kotak masuk email Anda setiap hari.
          </p>
        </div>

        <div className="w-full md:w-auto min-w-[320px]">
          {status === "success" ? (
            <div className="flex items-center gap-3 text-green-500 bg-green-500/10 p-4 rounded-sm border border-green-500/20 animate-in zoom-in-95">
              <Check size={20} />
              <span className="text-sm font-bold uppercase tracking-wide">{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Alamat Email Anda..." 
                  required
                  className="flex-1 bg-black/50 border border-gray-800 px-4 py-3 rounded-sm focus:outline-none focus:border-[#D91B1B] text-sm text-white transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit" 
                  disabled={loading}
                  className="bg-[#D91B1B] hover:bg-red-700 text-white font-bold p-3 rounded-sm transition-all disabled:opacity-50"
                >
                  {loading ? <RefreshCw className="animate-spin" size={20} /> : <Send size={20} />}
                </button>
              </div>
              {status === "error" && (
                <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{message}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
