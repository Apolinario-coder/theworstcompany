"use client";

import { WIKI_REFS } from "@/lib/wikiRefs";
import { ExternalLink, ShieldCheck, AlertOctagon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const DICTIONARY = {
  pt: {
    title_1: "O Que Você",
    title_2: "Pode Fazer?",
    subtitle: "A superexploração só continua enquanto o boicote for silencioso. Vote com sua carteira e exija transparência de empresas e legisladores.",
    box1_title: "Boicote Consciente",
    box1_text: "Corte os produtos não essenciais da marca. Substitua águas engarrafadas pela empresa, chocolates convencionais e ração industrializada por alternativas éticas locais.",
    box2_title: "Consuma Local",
    box2_text: "Apoie o agricultor familiar, os mercados de bairro e as marcas independentes que possuem certificações abertas de comércio justo e selos cruelty-free.",
    archive_title: "Arquivo Documental",
    archive_desc: "Base de referências que compõe as denúncias registradas na enciclopédia pública e documentações abertas:"
  },
  en: {
    title_1: "What Can",
    title_2: "You Do?",
    subtitle: "Super-exploitation only continues as long as the boycott remains silent. Vote with your wallet and demand transparency from companies and lawmakers.",
    box1_title: "Conscious Boycott",
    box1_text: "Cut out the brand's non-essential products. Replace bottled waters, conventional chocolates, and industrialized pet food with ethical local alternatives.",
    box2_title: "Consume Locally",
    box2_text: "Support family farmers, neighborhood markets, and independent brands that have open fair trade certifications and cruelty-free seals.",
    archive_title: "Document Archive",
    archive_desc: "Reference base comprising the complaints registered in the public encyclopedia and open documentation:"
  },
  es: {
    title_1: "¿Qué Puedes",
    title_2: "Hacer?",
    subtitle: "La superexplotación solo continúa mientras el boicot sea silencioso. Vota con tu billetera y exige transparencia a las empresas y legisladores.",
    box1_title: "Boicot Consciente",
    box1_text: "Elimina los productos no esenciales de la marca. Reemplaza el agua embotellada por la empresa, los chocolates convencionales y la comida industrializada para mascotas por alternativas éticas locales.",
    box2_title: "Consume Local",
    box2_text: "Apoya al agricultor familiar, los mercados de barrio y las marcas independientes que cuentan con certificaciones abiertas de comercio justo y sellos libres de crueldad.",
    archive_title: "Archivo Documental",
    archive_desc: "Base de referencias que componen las denuncias registradas en la enciclopedia pública y documentación abierta:"
  }
};

export default function ActionSection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-[#0a0a0a] border-t-8 border-red-900">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Action Call */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-8">
              {t('title_1', DICTIONARY)} <span className="text-red-600">{t('title_2', DICTIONARY)}</span>
            </h2>
            <p className="text-zinc-400 font-medium mb-8 text-lg">
              {t('subtitle', DICTIONARY)}
            </p>

            <div className="space-y-6">
              <div className="bg-[#111] border-l-4 border-red-600 p-6 shadow-xl">
                <h4 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                  <AlertOctagon className="w-5 h-5 text-red-600" />
                  {t('box1_title', DICTIONARY)}
                </h4>
                <p className="text-zinc-400 text-sm">
                  {t('box1_text', DICTIONARY)}
                </p>
              </div>

              <div className="bg-[#111] border-l-4 border-green-700 p-6 shadow-xl">
                <h4 className="text-white font-bold uppercase mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-green-700" />
                  {t('box2_title', DICTIONARY)}
                </h4>
                <p className="text-zinc-400 text-sm">
                  {t('box2_text', DICTIONARY)}
                </p>
              </div>
            </div>
          </div>

          {/* References Box (Wikipedia) */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-white uppercase mb-6 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-red-600" />
              {t('archive_title', DICTIONARY)}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">
              {t('archive_desc', DICTIONARY)}
            </p>
            
            <div className="bg-black border border-zinc-800 p-6 h-[400px] overflow-y-auto custom-scrollbar">
              <ul className="space-y-4">
                {WIKI_REFS.map((ref, i) => (
                  <li key={i}>
                    <a 
                      href={ref.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-red-500 transition-colors text-xs flex items-start gap-2 typewriter-font"
                    >
                      <ExternalLink className="w-3 h-3 mt-0.5 shrink-0" />
                      <span>{ref.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
