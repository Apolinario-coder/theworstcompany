"use client";
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-black/80 border border-red-900/50 p-2 backdrop-blur-sm shadow-[0_0_10px_rgba(220,38,38,0.2)]">
      <Globe className="w-4 h-4 text-zinc-500" />
      <select 
        value={language}
        onChange={(e) => setLanguage(e.target.value as any)}
        className="bg-transparent text-xs font-bold text-red-500 uppercase tracking-widest outline-none cursor-pointer typewriter-font"
      >
        <option value="pt" className="bg-black text-white">PT-BR</option>
        <option value="en" className="bg-black text-white">EN</option>
        <option value="es" className="bg-black text-white">ES</option>
      </select>
    </div>
  );
}
