"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DICTIONARY = {
  pt: {
    confidential: "Arquivo Confidencial",
    alt_logo: "Nestlé Logo com Sangue",
    title_1: "A EMPRESA MAIS",
    title_cruel: "CRUEL",
    title_2: "DO MUNDO",
    subtitle: "Um dossiê investigativo sobre décadas de escândalos, exploração e violações de direitos humanos disfarçados de produtos alimentícios.",
    scroll: "Desça para acessar os arquivos"
  },
  en: {
    confidential: "Confidential File",
    alt_logo: "Nestlé Blood Logo",
    title_1: "THE MOST",
    title_cruel: "CRUEL",
    title_2: "COMPANY ON EARTH",
    subtitle: "An investigative dossier on decades of scandals, exploitation, and human rights violations disguised as food products.",
    scroll: "Scroll to access the files"
  },
  es: {
    confidential: "Archivo Confidencial",
    alt_logo: "Logo de Nestlé con Sangre",
    title_1: "LA EMPRESA MÁS",
    title_cruel: "CRUEL",
    title_2: "DEL MUNDO",
    subtitle: "Un dosier de investigación sobre décadas de escándalos, explotación y violaciones de derechos humanos disfrazados de productos alimenticios.",
    scroll: "Desplázate para acceder a los archivos"
  }
};

export default function HeroSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={ref}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#0f0f0f]"
    >
      {/* SVG Filters */}
      <svg className="hidden">
        <filter id="blue-to-white">
          <feColorMatrix type="matrix" values="
            1 1.5 1.5 0 0
            0 1.5 1.5 0 0
            0 1.5 1.5 0 0
            0 0 0 1 0" />
        </filter>
      </svg>

      {/* Background Texture/Noise */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        <span className="text-red-600 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base typewriter-font">
          {t('confidential', DICTIONARY)}
        </span>
        
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/logo.png" 
            alt={t('alt_logo', DICTIONARY)} 
            className="w-48 md:w-72 lg:w-96 mx-auto mix-blend-screen"
            style={{ filter: "url(#blue-to-white)" }}
          />
        </div>

        {/* Title */}
        <div className="relative mb-6">
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase leading-none"
          >
            {t('title_1', DICTIONARY)} <br/><span className="text-red-600">{t('title_cruel', DICTIONARY)}</span> {t('title_2', DICTIONARY)}
          </h1>
        </div>
        
        <p className="max-w-2xl text-zinc-400 mt-6 text-lg md:text-xl typewriter-font font-bold">
          {t('subtitle', DICTIONARY)}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-500 uppercase tracking-widest text-xs typewriter-font">{t('scroll', DICTIONARY)}</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="text-red-600 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}
