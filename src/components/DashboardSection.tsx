"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const DICTIONARY = {
  pt: {
    years: "Anos de Controvérsias",
    countries: "Países Afetados",
    lawsuits: "Processos Judiciais",
    water: "Milhões de Litros de Água/Dia"
  },
  en: {
    years: "Years of Controversies",
    countries: "Affected Countries",
    lawsuits: "Lawsuits Filed",
    water: "Million Liters of Water/Day"
  },
  es: {
    years: "Años de Controversias",
    countries: "Países Afectados",
    lawsuits: "Demandas Judiciales",
    water: "Millones de Litros de Agua/Día"
  }
};

interface CounterProps {
  end: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function Counter({ end, label, suffix = "", delay = 0 }: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = (time - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.min(Math.floor(end * progress), end));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      const timeout = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isInView, end, delay]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 border-b lg:border-b-0 lg:border-r border-red-900/30 last:border-0 bg-black/40 relative overflow-hidden group">
      <div className="absolute inset-0 bg-red-600/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
      <span className="text-5xl md:text-7xl font-black text-red-600 mb-2 relative z-10">
        {count}{suffix}
      </span>
      <span className="text-sm md:text-base text-zinc-400 uppercase tracking-widest text-center font-bold relative z-10 typewriter-font">
        {label}
      </span>
    </div>
  );
}

export default function DashboardSection() {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-[#0f0f0f] border-y border-red-900/50 py-12 lg:py-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Counter end={50} label={t('years', DICTIONARY)} suffix="+" delay={0} />
        <Counter end={86} label={t('countries', DICTIONARY)} delay={200} />
        <Counter end={100} label={t('lawsuits', DICTIONARY)} suffix="+" delay={400} />
        <Counter end={15} label={t('water', DICTIONARY)} suffix="M" delay={600} />
      </div>
    </section>
  );
}
