"use client";
import React, { useState, useEffect, useCallback } from "react";
import { MessageSquare, Send, User, RefreshCw, AlertCircle } from "lucide-react";
import { getKomentar } from "../services/api";
import { Komentar } from "../types/api";
import { safeArray, formatRelativeTime } from "../utils/helpers";

interface CommentSectionProps {
  articleId: string | number;
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<Komentar[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const fetchComments = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getKomentar.list({ id_berita: articleId });
      setComments(safeArray(res.data));
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    } finally {
      setLoading(false);
    }
  }, [articleId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    setSubmitting(true);
    setError(null);
    try {
      const res = await getKomentar.store({
         berita_id: articleId,
         name: formData.name,
         email: formData.email,
         comment: formData.comment
      });
      
      if (res.success) {
        setFormData({ name: "", email: "", comment: "" });
        alert("Komentar Anda telah dikirim dan sedang menunggu moderasi.");
        fetchComments();
      } else {
        throw new Error(res.message || "Gagal mengirim komentar.");
      }
    } catch (err: any) {
      setError(err.message || "Gagal mengirim komentar. Silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-16 bg-white dark:bg-[#0A0A0A] border-t border-gray-100 dark:border-gray-800 pt-12 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-10">
        <MessageSquare size={24} className="text-[#D91B1B]" />
        <h2 className="text-2xl font-black uppercase tracking-tight">Komentar ({comments.length})</h2>
        <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800"></div>
      </div>

      {/* COMMENT FORM */}
      <form onSubmit={handleSubmit} className="mb-16 bg-gray-50 dark:bg-black p-6 md:p-8 rounded-md border border-gray-100 dark:border-gray-900">
        <h3 className="text-lg font-bold uppercase mb-6 tracking-wide">Tinggalkan Komentar</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input 
            type="text" 
            placeholder="Nama Lengkap *" 
            required
            className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-sm focus:outline-none focus:border-[#D91B1B] text-sm"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            placeholder="Email (Opsional)" 
            className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-sm focus:outline-none focus:border-[#D91B1B] text-sm"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <textarea 
          placeholder="Tulis komentar Anda di sini... *" 
          required
          rows={4}
          className="w-full bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 px-4 py-3 rounded-sm focus:outline-none focus:border-[#D91B1B] text-sm mb-6"
          value={formData.comment}
          onChange={(e) => setFormData({...formData, comment: e.target.value})}
        ></textarea>
        
        {error && (
          <div className="flex items-center gap-2 text-red-500 text-xs mb-4">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        <button 
          type="submit" 
          disabled={submitting}
          className="bg-[#D91B1B] hover:bg-red-700 text-white font-bold uppercase py-3 px-8 rounded-sm text-sm tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-50"
        >
          {submitting ? <RefreshCw className="animate-spin" size={16} /> : <Send size={16} />}
          KIRIM KOMENTAR
        </button>
      </form>

      {/* COMMENTS LIST */}
      <div className="space-y-8">
        {loading ? (
          <div className="flex justify-center py-10">
            <RefreshCw className="animate-spin text-gray-300" size={24} />
          </div>
        ) : comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="flex gap-4 md:gap-6 items-start animate-in slide-in-from-bottom-2 duration-500">
               <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0">
                 <User size={24} className="text-gray-300 dark:text-gray-600" />
               </div>
               <div className="flex-1">
                 <div className="flex items-center justify-between mb-2">
                   <h4 className="font-bold text-sm md:text-base uppercase tracking-tight">{comment.name}</h4>
                   <span className="text-[10px] md:text-xs text-gray-400 font-medium">
                     {formatRelativeTime(comment.date)}
                   </span>
                 </div>
                 <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
                   {comment.comment}
                 </p>
               </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10 border-2 border-dashed border-gray-100 dark:border-gray-900 rounded-lg">
            <p className="text-gray-400 font-medium uppercase tracking-widest text-xs">Belum ada komentar. Jadilah yang pertama!</p>
          </div>
        )}
      </div>
    </div>
  );
}
