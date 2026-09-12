"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { TIMELINE_DATA_PT } from "@/lib/timelineData.pt";
import { TIMELINE_DATA_EN } from "@/lib/timelineData.en";
import { TIMELINE_DATA_ES } from "@/lib/timelineData.es";

const TIMELINE_DATA: Record<string, any[]> = {
  pt: TIMELINE_DATA_PT,
  en: TIMELINE_DATA_EN,
  es: TIMELINE_DATA_ES
};

const LABELS = {
  pt: {
    title_1: "Linha do Tempo da",
    title_2: "Devastação",
    subtitle: "O histórico corporativo documentado. Clique nos registros para expandir as análises profundas de impacto e consequência de cada evento.",
    hide: "Ocultar Detalhes",
    expand: "Expandir Arquivo",
    problem: "A Infração (O Problema)",
    impact: "O Custo Humano (O Impacto)",
    consequence: "A Resposta (Consequência)",
    source: "Fonte:"
  },
  en: {
    title_1: "Timeline of",
    title_2: "Devastation",
    subtitle: "The documented corporate history. Click on the records to expand the in-depth analysis of the impact and consequence of each event.",
    hide: "Hide Details",
    expand: "Expand File",
    problem: "The Infraction (The Problem)",
    impact: "The Human Cost (The Impact)",
    consequence: "The Response (Consequence)",
    source: "Source:"
  },
  es: {
    title_1: "Línea de Tiempo de",
    title_2: "Devastación",
    subtitle: "El historial corporativo documentado. Haz clic en los registros para expandir el análisis profundo del impacto y la consecuencia de cada evento.",
    hide: "Ocultar Detalles",
    expand: "Expandir Archivo",
    problem: "La Infracción (El Problema)",
    impact: "El Costo Humano (El Impacto)",
    consequence: "La Respuesta (Consecuencia)",
    source: "Fuente:"
  }
};

export default function TimelineSection() {
  const { language, t } = useLanguage();
  const currentData = TIMELINE_DATA[language] || TIMELINE_DATA.pt;
  
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-24 bg-[#0f0f0f] relative w-full overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            {t('title_1', LABELS)} <span className="text-red-600">{t('title_2', LABELS)}</span>
          </h2>
          <p className="text-zinc-400 typewriter-font max-w-2xl mx-auto text-sm md:text-base">
            {t('subtitle', LABELS)}
          </p>
        </div>

        {/* Central Line */}
        <div className="absolute left-[40px] md:left-1/2 top-[250px] bottom-0 w-1 bg-zinc-800 -translate-x-1/2">
          <motion.div 
            className="w-full bg-red-600 origin-top shadow-[0_0_15px_#ff0000]"
            style={{ height: lineHeight }}
          />
        </div>

        <div className="space-y-8 md:space-y-12 relative z-10">
          {currentData.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <TimelineItem 
                key={index} 
                item={item} 
                isEven={isEven} 
                t={t}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, isEven, t }: { item: any, isEven: boolean, t: any }) {
  const itemRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 90%", "center center"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const xDesktop = useTransform(scrollYProgress, [0, 1], [isEven ? 50 : -50, 0]);
  const mobileX = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div ref={itemRef} className="flex flex-col md:flex-row items-start md:items-start justify-between w-full relative">
      
      {/* Icon node */}
      <motion.div 
        style={{ scale, opacity }}
        className={`absolute left-[40px] md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-[#0f0f0f] ${item.color} shadow-[0_0_15px_rgba(255,0,0,0.5)] flex items-center justify-center z-20 mt-1 md:mt-0`}
      >
        {item.icon}
      </motion.div>

      {/* Content - Desktop Layout */}
      <div className="hidden md:flex w-full group">
        {isEven ? (
          <>
            <motion.div style={{ opacity, x: xDesktop }} className="w-1/2 pr-16 text-right flex flex-col items-end">
              <span className="text-red-600 font-bold text-xl typewriter-font bg-red-900/10 px-3 py-1 border border-red-900/30 rounded-sm mb-2">{item.year}</span>
              <h3 className="text-2xl lg:text-3xl font-black text-white mt-1 mb-3 uppercase">{item.title}</h3>
              <p className="text-zinc-400 font-medium mb-4 text-sm lg:text-base">{item.description}</p>
              
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-xs uppercase font-bold text-red-500 hover:text-red-400 transition-colors bg-zinc-900/50 p-2 border border-red-900/30 mb-4"
              >
                {isExpanded ? t('hide', LABELS) : t('expand', LABELS)}
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden w-full text-left"
                  >
                    <div className="bg-[#111] border-r-4 border-red-800 p-5 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      <div className="mb-4">
                        <h4 className="text-red-600 font-black uppercase text-xs mb-1">{t('problem', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.problem}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-orange-500 font-black uppercase text-xs mb-1">{t('impact', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.impact}</p>
                      </div>
                      <div>
                        <h4 className="text-yellow-600 font-black uppercase text-xs mb-1">{t('consequence', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.consequence}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-2 items-end">
                {item.sources.map((src: any, idx: number) => (
                  <a 
                    key={idx}
                    href={src.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500 hover:text-red-400 transition-colors group/link"
                  >
                    <span className="border-b border-zinc-800 group-hover/link:border-red-400 pb-0.5">{t('source', LABELS)} {src.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
            <div className="w-1/2" />
          </>
        ) : (
          <>
            <div className="w-1/2" />
            <motion.div style={{ opacity, x: xDesktop }} className="w-1/2 pl-16 text-left flex flex-col items-start">
              <span className="text-red-600 font-bold text-xl typewriter-font bg-red-900/10 px-3 py-1 border border-red-900/30 rounded-sm mb-2">{item.year}</span>
              <h3 className="text-2xl lg:text-3xl font-black text-white mt-1 mb-3 uppercase">{item.title}</h3>
              <p className="text-zinc-400 font-medium mb-4 text-sm lg:text-base">{item.description}</p>

              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 text-xs uppercase font-bold text-red-500 hover:text-red-400 transition-colors bg-zinc-900/50 p-2 border border-red-900/30 mb-4"
              >
                {isExpanded ? t('hide', LABELS) : t('expand', LABELS)}
                <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden w-full text-left"
                  >
                    <div className="bg-[#111] border-l-4 border-red-800 p-5 mb-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                      <div className="mb-4">
                        <h4 className="text-red-600 font-black uppercase text-xs mb-1">{t('problem', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.problem}</p>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-orange-500 font-black uppercase text-xs mb-1">{t('impact', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.impact}</p>
                      </div>
                      <div>
                        <h4 className="text-yellow-600 font-black uppercase text-xs mb-1">{t('consequence', LABELS)}</h4>
                        <p className="text-zinc-300 text-sm typewriter-font leading-relaxed">{item.expandedDetails.consequence}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex flex-col gap-2 items-start">
                {item.sources.map((src: any, idx: number) => (
                  <a 
                    key={idx}
                    href={src.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-zinc-500 hover:text-red-400 transition-colors group/link"
                  >
                    <span className="border-b border-zinc-800 group-hover/link:border-red-400 pb-0.5">{t('source', LABELS)} {src.text}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* Content - Mobile Layout */}
      <div className="md:hidden flex w-full pl-20 pt-1 pb-6">
        <motion.div style={{ opacity, x: mobileX }} className="w-full text-left flex flex-col items-start">
          <span className="text-red-600 font-bold text-lg typewriter-font bg-red-900/10 px-2 py-0.5 border border-red-900/30 rounded-sm mb-1 inline-block">{item.year}</span>
          <h3 className="text-xl font-black text-white mt-1 mb-2 uppercase">{item.title}</h3>
          <p className="text-zinc-400 text-sm font-medium mb-3">{item.description}</p>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 text-[10px] uppercase font-bold text-red-500 bg-zinc-900/50 p-2 border border-red-900/30 mb-4 w-full justify-between"
          >
            {isExpanded ? t('hide', LABELS) : t('expand', LABELS)}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden w-full text-left"
              >
                <div className="bg-[#111] border-l-2 border-red-800 p-4 mb-4">
                  <div className="mb-3">
                    <h4 className="text-red-600 font-black uppercase text-[10px] mb-1">{t('problem', LABELS)}</h4>
                    <p className="text-zinc-300 text-xs typewriter-font leading-relaxed">{item.expandedDetails.problem}</p>
                  </div>
                  <div className="mb-3">
                    <h4 className="text-orange-500 font-black uppercase text-[10px] mb-1">{t('impact', LABELS)}</h4>
                    <p className="text-zinc-300 text-xs typewriter-font leading-relaxed">{item.expandedDetails.impact}</p>
                  </div>
                  <div>
                    <h4 className="text-yellow-600 font-black uppercase text-[10px] mb-1">{t('consequence', LABELS)}</h4>
                    <p className="text-zinc-300 text-xs typewriter-font leading-relaxed">{item.expandedDetails.consequence}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex flex-col gap-2 items-start mt-2">
            {item.sources.map((src: any, idx: number) => (
              <a 
                key={idx}
                href={src.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2 text-[9px] uppercase font-bold text-zinc-600 hover:text-red-400 transition-colors"
              >
                <span className="border-b border-zinc-800 pb-0.5">{src.text}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </div>
  );
}
