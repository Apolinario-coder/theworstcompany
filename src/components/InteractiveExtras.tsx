"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertOctagon, ChevronRight, RefreshCcw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const QUIZ_QUESTIONS = {
  pt: [
    {
      question: "Qual foi a porcentagem do portfólio de alimentos e bebidas convencionais da empresa que a própria corporação reconheceu não ser saudável em um documento interno vazado (2021)?",
      options: ["Cerca de 25%", "Exatamente 40%", "Mais de 60%", "Aproximadamente 80%"],
      answer: 2,
      explanation: "Documentos vazados pelo Financial Times revelaram que mais de 60% do portfólio não atendia aos padrões básicos de saúde definidos por autoridades médicas. A empresa construiu seu império sobre açúcar e sódio.",
      source: { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    },
    {
      question: "Quanto a corporação pagava anualmente pelo direito de extrair mais de 100 milhões de litros de água de reservas florestais na Califórnia, mesmo durante graves secas?",
      options: ["US$ 2.500.000", "US$ 150.000", "US$ 15.000", "US$ 524 (Isso mesmo, 524 dólares)"],
      answer: 3,
      explanation: "Por anos, a empresa operou utilizando uma licença ambiental que havia expirado em 1988, pagando taxas irrisórias de apenas US$ 524 por ano ao Serviço Florestal dos EUA, enquanto engarrafava e lucrava bilhões com o recurso público.",
      source: { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    },
    {
      question: "Em 2002, enquanto a Etiópia enfrentava uma das piores crises de fome de sua história recente, qual foi a atitude da empresa?",
      options: ["Doou 10 milhões em alimentos", "Suspendeu suas operações e perdoou dívidas locais", "Exigiu o pagamento imediato de US$ 6 milhões do governo", "Enviou médicos voluntários"],
      answer: 2,
      explanation: "Demonstrando extrema insensibilidade corporativa, a empresa processou a Etiópia por uma compensação de US$ 6 milhões referente à nacionalização de uma empresa nos anos 70. Eles só recuaram após serem alvo de um furioso boicote global de ativistas.",
      source: { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    },
    {
      question: "Em 2001, a empresa assinou um acordo formal para erradicar o trabalho escravo infantil de suas fazendas fornecedoras de cacau na África. O que aconteceu depois?",
      options: ["Erradicaram totalmente o problema em 5 anos", "O trabalho infantil foi reduzido em 90%", "Criaram um selo de verificação perfeito", "Falharam em todos os prazos e o problema persistiu por décadas"],
      answer: 3,
      explanation: "Eles assinaram o Protocolo Harkin-Engel, mas perderam sucessivamente os prazos de 2005, 2008 e 2010. Duas décadas depois, milhões de crianças continuaram sendo expostas a trabalho perigoso, com facões e agrotóxicos, para suprir o cacau.",
      source: { text: "Washington Post", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" }
    },
    {
      question: "Qual era a consequência comum da estratégia da empresa de induzir mães pobres a abandonarem o aleitamento materno nos anos 70?",
      options: ["Melhora na imunidade dos bebês", "Diluição excessiva da fórmula com água contaminada para economizar, causando morte", "Aumento da expectativa de vida", "Redução de custos médicos familiares"],
      answer: 1,
      explanation: "Mães sem recursos não conseguiam manter a compra da cara fórmula artificial. Para fazer durar, diluíam o pó excessivamente com a única água que tinham (frequentemente não potável), causando subnutrição aguda e diarreia letal.",
      source: { text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }
    },
    {
      question: "Em 2015, por que o famoso macarrão instantâneo Maggi foi banido e recolhido das prateleiras em toda a Índia?",
      options: ["Tinha gosto ruim", "Foi encontrado com excesso de chumbo venenoso acima do limite legal", "Faltava tempero na embalagem", "Concorrência desleal"],
      answer: 1,
      explanation: "Reguladores alimentares indianos descobriram níveis perigosos de chumbo nos pacotes de Maggi, forçando a empresa a destruir quase 30.000 toneladas do produto num enorme escândalo sanitário.",
      source: { text: "Times of India", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" }
    },
    {
      question: "O que a corporação foi formalmente acusada de fazer no Canadá ao lado de seus concorrentes (Mars, Hershey)?",
      options: ["Promover a paz mundial", "Formar um cartel criminoso para fixar artificialmente os preços do chocolate", "Construir escolas", "Zerar a emissão de carbono"],
      answer: 1,
      explanation: "Escritórios foram revistados numa gigantesca investigação revelando um cartel onde os executivos supostamente combinavam preços secretamente em restaurantes para lesar milhões de consumidores.",
      source: { text: "The Globe and Mail", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
    },
    {
      question: "Durante a invasão da Ucrânia em 2022, enquanto as gigantes ocidentais deixavam a Rússia, qual foi a atitude da empresa?",
      options: ["Saiu imediatamente", "Manteve grandes operações no país financiando o regime através de impostos", "Doou todo lucro para refugiados", "Fechou 99% das fábricas"],
      answer: 1,
      explanation: "Ao contrário de centenas de corporações que realizaram boicotes, eles mantiveram vastas operações na Rússia, justificando 'direito humano à comida'. O governo ucraniano os colocou na lista oficial de 'patrocinadores internacionais da guerra'.",
      source: { text: "NACP Ucrânia", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" }
    },
    {
      question: "O que a ONG suíça Public Eye revelou em 2024 sobre o 'Racismo Nutricional' da empresa?",
      options: ["Produtos são iguais no mundo todo", "Fórmulas infantis vendidas em países ricos têm muito mais açúcar do que em países pobres", "Fórmulas vendidas no 'Terceiro Mundo' têm secretamente mais açúcar adicionado (viciante) do que na Europa", "As fórmulas europeias são piores"],
      answer: 2,
      explanation: "Laboratórios confirmaram que a empresa obedece leis rigorosas na Europa cortando açúcar, mas despeja níveis perigosos e viciantes de açúcar adicionado nas fórmulas infantis idênticas vendidas na África, Ásia e América Latina.",
      source: { text: "Public Eye", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
    },
    {
      question: "Qual era a verdadeira função das chamadas 'Milk Nurses' (Enfermeiras do Leite) empregadas pela empresa nos anos 70?",
      options: ["Cuidar de bebês prematuros", "Vacinar crianças", "Vender fórmulas em hospitais vestindo uniformes para enganar mães com uma falsa autoridade médica", "Inspecionar qualidade da água"],
      answer: 2,
      explanation: "Elas não eram enfermeiras de verdade. Eram vendedoras uniformizadas de branco que circulavam pelas maternidades para induzir mães vulneráveis a parar a amamentação e comprarem o produto da corporação.",
      source: { text: "Congresso dos EUA", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }
    }
  ],
  en: [
    {
      question: "What percentage of the company's conventional food and beverage portfolio was internally acknowledged as unhealthy in a leaked document (2021)?",
      options: ["Around 25%", "Exactly 40%", "Over 60%", "Approximately 80%"],
      answer: 2,
      explanation: "Documents leaked by the Financial Times revealed that over 60% of the portfolio did not meet the recognized definition of health. The company built its empire on sugar and sodium.",
      source: { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    },
    {
      question: "How much did the corporation pay annually for the right to extract over 100 million liters of water from California forest reserves, even during severe droughts?",
      options: ["US$ 2,500,000", "US$ 150,000", "US$ 15,000", "US$ 524 (Yes, 524 dollars)"],
      answer: 3,
      explanation: "For years, the company operated using an environmental permit that expired in 1988, paying a measly US$ 524 a year to the US Forest Service, while bottling and profiting billions from a public resource.",
      source: { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    },
    {
      question: "In 2002, while Ethiopia faced one of the worst famines in its recent history, what was the company's attitude?",
      options: ["Donated 10 million in food", "Suspended operations and forgave local debts", "Demanded immediate payment of US$ 6 million from the government", "Sent volunteer doctors"],
      answer: 2,
      explanation: "Displaying extreme corporate insensitivity, the company sued Ethiopia for US$ 6 million in compensation over a nationalized business from the 70s. They only backed down after being targeted by a furious global activist boycott.",
      source: { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    },
    {
      question: "In 2001, the company signed a formal agreement to eradicate child slave labor from its cocoa supplier farms in Africa. What happened next?",
      options: ["Completely eradicated the problem in 5 years", "Child labor was reduced by 90%", "They created a perfect verification seal", "They missed all deadlines and the problem persisted for decades"],
      answer: 3,
      explanation: "They signed the Harkin-Engel Protocol but successively missed the 2005, 2008, and 2010 deadlines. Two decades later, millions of children were still exposed to hazardous work, using machetes and pesticides, to supply cocoa.",
      source: { text: "Washington Post", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" }
    },
    {
      question: "What was the common consequence of the company's strategy of inducing poor mothers to abandon breastfeeding in the 70s?",
      options: ["Improved infant immunity", "Excessive dilution of formula with contaminated water to save money, causing death", "Increased life expectancy", "Reduced family medical costs"],
      answer: 1,
      explanation: "Mothers without resources could not maintain the purchase of expensive artificial formula. To make it last, they excessively diluted the powder with the only water they had (often unpotable), causing acute malnutrition and lethal diarrhea.",
      source: { text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }
    },
    {
      question: "In 2015, why were the famous Maggi instant noodles banned and recalled from shelves all over India?",
      options: ["Tasted bad", "Found to have excess poisonous lead above the legal limit", "Missing seasoning in the package", "Unfair competition"],
      answer: 1,
      explanation: "Indian food regulators discovered dangerous levels of lead in Maggi packets, forcing the company to destroy nearly 30,000 tons of the product in a massive health scandal.",
      source: { text: "Times of India", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" }
    },
    {
      question: "What was the corporation formally accused of doing in Canada alongside its competitors (Mars, Hershey)?",
      options: ["Promoting world peace", "Forming a criminal cartel to artificially fix chocolate prices", "Building schools", "Zeroing carbon emissions"],
      answer: 1,
      explanation: "Offices were raided in a massive investigation revealing a cartel where executives allegedly colluded on prices secretly in restaurants to defraud millions of consumers.",
      source: { text: "The Globe and Mail", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
    },
    {
      question: "During the invasion of Ukraine in 2022, while Western giants left Russia, what was the company's stance?",
      options: ["Left immediately", "Maintained huge operations in the country financing the regime through taxes", "Donated all profits to refugees", "Closed 99% of factories"],
      answer: 1,
      explanation: "Unlike hundreds of corporations that enacted boycotts, they maintained vast operations in Russia, claiming a 'human right to food'. The Ukrainian government placed them on the official list of 'international sponsors of war'.",
      source: { text: "NACP Ukraine", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" }
    },
    {
      question: "What did the Swiss NGO Public Eye reveal in 2024 about the company's 'Nutritional Racism'?",
      options: ["Products are the same worldwide", "Infant formulas sold in rich countries have much more sugar than in poor countries", "Formulas sold in the 'Third World' secretly have more added sugar (addictive) than in Europe", "European formulas are worse"],
      answer: 2,
      explanation: "Laboratories confirmed that the company obeys strict laws in Europe cutting sugar, but dumps dangerous and addictive levels of added sugar into identical infant formulas sold in Africa, Asia, and Latin America.",
      source: { text: "Public Eye", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
    },
    {
      question: "What was the true function of the so-called 'Milk Nurses' employed by the company in the 70s?",
      options: ["Taking care of premature babies", "Vaccinating children", "Selling formulas in hospitals wearing uniforms to trick mothers with a false medical authority", "Inspecting water quality"],
      answer: 2,
      explanation: "They were not real nurses. They were saleswomen in white uniforms who roamed maternity wards to induce vulnerable mothers to stop breastfeeding and buy the corporation's product.",
      source: { text: "US Congress", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }
    }
  ],
  es: [
    {
      question: "¿Qué porcentaje del portafolio de alimentos y bebidas convencionales de la empresa reconoció la propia corporación como no saludable en un documento interno filtrado (2021)?",
      options: ["Cerca del 25%", "Exactamente el 40%", "Más del 60%", "Aproximadamente el 80%"],
      answer: 2,
      explanation: "Documentos filtrados por el Financial Times revelaron que más del 60% del portafolio no cumplía con los estándares básicos de salud. La empresa construyó su imperio sobre azúcar y sodio.",
      source: { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    },
    {
      question: "¿Cuánto pagaba anualmente la corporación por el derecho a extraer más de 100 millones de litros de agua de reservas forestales en California, incluso durante sequías severas?",
      options: ["US$ 2.500.000", "US$ 150.000", "US$ 15.000", "US$ 524 (Así es, 524 dólares)"],
      answer: 3,
      explanation: "Durante años, la empresa operó utilizando un permiso ambiental expirado en 1988, pagando tasas irrisorias de solo US$ 524 al año al Servicio Forestal de EE. UU., mientras embotellaba y ganaba miles de millones con un recurso público.",
      source: { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    },
    {
      question: "En 2002, mientras Etiopía enfrentaba una de las peores crisis de hambruna de su historia reciente, ¿cuál fue la actitud de la empresa?",
      options: ["Donó 10 millones en alimentos", "Suspendió sus operaciones y perdonó deudas locales", "Exigió el pago inmediato de US$ 6 millones del gobierno", "Envió médicos voluntarios"],
      answer: 2,
      explanation: "Demostrando una extrema insensibilidad corporativa, la empresa demandó a Etiopía por US$ 6 millones en compensación por un negocio nacionalizado en los 70. Solo retrocedieron tras ser blanco de un furioso boicot activista global.",
      source: { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    },
    {
      question: "En 2001, la empresa firmó un acuerdo formal para erradicar el trabajo esclavo infantil de sus granjas proveedoras de cacao en África. ¿Qué pasó después?",
      options: ["Erradicaron totalmente el problema en 5 años", "El trabajo infantil se redujo en un 90%", "Crearon un sello de verificación perfecto", "Fallaron todos los plazos y el problema persistió por décadas"],
      answer: 3,
      explanation: "Firmaron el Protocolo Harkin-Engel, pero perdieron sucesivamente los plazos de 2005, 2008 y 2010. Dos décadas después, millones de niños seguían expuestos a trabajos peligrosos, usando machetes y pesticidas, para suministrar cacao.",
      source: { text: "Washington Post", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" }
    },
    {
      question: "¿Cuál fue la consecuencia común de la estrategia de la empresa de inducir a las madres pobres a abandonar la lactancia materna en los años 70?",
      options: ["Mejora en la inmunidad de los bebés", "Dilución excesiva de la fórmula con agua contaminada para ahorrar, causando muerte", "Aumento de la esperanza de vida", "Reducción de costos médicos familiares"],
      answer: 1,
      explanation: "Las madres sin recursos no podían mantener la compra de la costosa fórmula artificial. Para hacerla durar, diluían excesivamente el polvo con la única agua que tenían (a menudo no potable), causando desnutrición aguda y diarrea letal.",
      source: { text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }
    },
    {
      question: "En 2015, ¿por qué los famosos fideos instantáneos Maggi fueron prohibidos y retirados de los estantes en toda la India?",
      options: ["Sabían mal", "Se encontró un exceso de plomo venenoso por encima del límite legal", "Faltaba condimento en el paquete", "Competencia desleal"],
      answer: 1,
      explanation: "Los reguladores alimentarios indios descubrieron niveles peligrosos de plomo en los paquetes de Maggi, obligando a la empresa a destruir casi 30.000 toneladas del producto en un enorme escándalo sanitario.",
      source: { text: "Times of India", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" }
    },
    {
      question: "¿De qué fue acusada formalmente la corporación en Canadá junto a sus competidores (Mars, Hershey)?",
      options: ["Promover la paz mundial", "Formar un cártel criminal para fijar artificialmente los precios del chocolate", "Construir escuelas", "Reducir a cero las emisiones de carbono"],
      answer: 1,
      explanation: "Las oficinas fueron allanadas en una enorme investigación revelando un cártel donde los ejecutivos presuntamente acordaban precios en secreto en restaurantes para defraudar a millones de consumidores.",
      source: { text: "The Globe and Mail", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
    },
    {
      question: "Durante la invasión de Ucrania en 2022, mientras los gigantes occidentales abandonaban Rusia, ¿cuál fue la postura de la empresa?",
      options: ["Salió inmediatamente", "Mantuvo enormes operaciones en el país financiando al régimen a través de impuestos", "Donó todas las ganancias a refugiados", "Cerró el 99% de las fábricas"],
      answer: 1,
      explanation: "A diferencia de cientos de corporaciones que realizaron boicots, mantuvieron vastas operaciones en Rusia, justificando el 'derecho humano a la alimentación'. El gobierno ucraniano los colocó en la lista oficial de 'patrocinadores internacionales de la guerra'.",
      source: { text: "NACP Ucrania", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" }
    },
    {
      question: "¿Qué reveló la ONG suiza Public Eye en 2024 sobre el 'Racismo Nutricional' de la empresa?",
      options: ["Los productos son iguales en todo el mundo", "Las fórmulas infantiles vendidas en países ricos tienen mucha más azúcar que en países pobres", "Las fórmulas vendidas en el 'Tercer Mundo' secretamente tienen más azúcar agregada (adictiva) que en Europa", "Las fórmulas europeas son peores"],
      answer: 2,
      explanation: "Laboratorios confirmaron que la empresa obedece leyes estrictas en Europa reduciendo el azúcar, pero vierte niveles peligrosos y adictivos de azúcar agregada en fórmulas infantiles idénticas vendidas en África, Asia y América Latina.",
      source: { text: "Public Eye", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
    },
    {
      question: "¿Cuál era la verdadera función de las llamadas 'Milk Nurses' (Enfermeras de la Leche) empleadas por la empresa en los 70?",
      options: ["Cuidar a bebés prematuros", "Vacunar niños", "Vender fórmulas en hospitales usando uniformes para engañar a las madres con una falsa autoridad médica", "Inspeccionar la calidad del agua"],
      answer: 2,
      explanation: "No eran enfermeras de verdad. Eran vendedoras con uniformes blancos que recorrían salas de maternidad para inducir a madres vulnerables a detener la lactancia y comprar el producto de la corporación.",
      source: { text: "Congreso de EE. UU.", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }
    }
  ]
};

const LABELS = {
  pt: {
    title_1: "Arquivo",
    title_2: "Confidencial",
    subtitle: "A verdade sobre as operações globais da corporação costuma ser pior do que a ficção. Tente adivinhar os fatos.",
    file_count: "Arquivo #{current} de {total}",
    restricted: "Acesso Restrito",
    correct: "Acerto Assustador.",
    incorrect: "Incorreto. A realidade é pior.",
    source: "Analisar Documento:",
    next: "Próximo Arquivo",
    verdict: "Ver Veredito",
    result_title_1: "Nível de",
    result_title_2: "Cinismo",
    msg_high: "Você conhece bem a face sombria do corporativismo sem limites. O histórico não mente.",
    msg_med: "É difícil de acreditar, mas a realidade destas práticas supera as piores estimativas.",
    msg_low: "Você ainda subestima até onde o lucro acima da vida pode chegar. As evidências estão aí.",
    restart: "Reiniciar Interrogatório"
  },
  en: {
    title_1: "Confidential",
    title_2: "File",
    subtitle: "The truth about the corporation's global operations is often worse than fiction. Try to guess the facts.",
    file_count: "File #{current} of {total}",
    restricted: "Restricted Access",
    correct: "Frighteningly Correct.",
    incorrect: "Incorrect. The reality is worse.",
    source: "Analyze Document:",
    next: "Next File",
    verdict: "See Verdict",
    result_title_1: "Level of",
    result_title_2: "Cynicism",
    msg_high: "You know well the dark side of limitless corporatism. The record doesn't lie.",
    msg_med: "It's hard to believe, but the reality of these practices exceeds the worst estimates.",
    msg_low: "You still underestimate how far profit over life can go. The evidence is right here.",
    restart: "Restart Interrogation"
  },
  es: {
    title_1: "Archivo",
    title_2: "Confidencial",
    subtitle: "La verdad sobre las operaciones globales de la corporación a menudo es peor que la ficción. Intenta adivinar los hechos.",
    file_count: "Archivo #{current} de {total}",
    restricted: "Acceso Restringido",
    correct: "Acierto Aterrador.",
    incorrect: "Incorrecto. La realidad es peor.",
    source: "Analizar Documento:",
    next: "Siguiente Archivo",
    verdict: "Ver Veredicto",
    result_title_1: "Nivel de",
    result_title_2: "Cinismo",
    msg_high: "Conoces bien la cara oscura del corporativismo sin límites. El historial no miente.",
    msg_med: "Es difícil de creer, pero la realidad de estas prácticas supera las peores estimaciones.",
    msg_low: "Todavía subestimas hasta dónde puede llegar el lucro por encima de la vida. Las evidencias están ahí.",
    restart: "Reiniciar Interrogatorio"
  }
};

export default function InteractiveExtras() {
  const { language, t } = useLanguage();
  const currentQuestions = QUIZ_QUESTIONS[language] || QUIZ_QUESTIONS.pt;

  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const question = currentQuestions[currentQ];
  const isFinished = currentQ >= currentQuestions.length;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOpt(idx);
    setShowResult(true);
    if (idx === question.answer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedOpt(null);
    setShowResult(false);
    setCurrentQ(q => q + 1);
  };

  const restart = () => {
    setCurrentQ(0);
    setScore(0);
    setSelectedOpt(null);
    setShowResult(false);
  };

  return (
    <section className="py-24 bg-black border-t-2 border-red-900 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">
            {t('title_1', LABELS)} <span className="text-red-600">{t('title_2', LABELS)}</span>
          </h2>
          <p className="text-zinc-400 typewriter-font max-w-2xl mx-auto">
            {t('subtitle', LABELS)}
          </p>
        </div>

        <div className="bg-[#0f0f0f] p-6 md:p-10 border-2 border-zinc-800 rounded-sm shadow-[0_0_30px_rgba(255,0,0,0.1)] relative min-h-[400px]">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentQ}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="w-full"
              >
                <div className="flex justify-between items-center mb-6 border-b border-red-900/30 pb-4">
                  <span className="text-red-600 font-bold typewriter-font">
                    {t('file_count', LABELS).replace('{current}', String(currentQ + 1)).replace('{total}', String(currentQuestions.length))}
                  </span>
                  <span className="text-zinc-500 font-bold uppercase text-xs">{t('restricted', LABELS)}</span>
                </div>

                <h3 className="text-xl md:text-2xl text-white font-black uppercase leading-snug mb-8">
                  {question.question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {question.options.map((opt, idx) => {
                    const isCorrect = idx === question.answer;
                    const isSelected = selectedOpt === idx;
                    
                    let btnClass = "bg-transparent border-zinc-800 text-zinc-400 hover:border-red-800 hover:text-white";
                    
                    if (showResult) {
                      if (isCorrect) btnClass = "bg-green-900/40 border-green-500 text-white shadow-[0_0_15px_rgba(0,255,0,0.2)]";
                      else if (isSelected) btnClass = "bg-red-900/40 border-red-500 text-white";
                      else btnClass = "bg-black/50 border-zinc-900 text-zinc-700 opacity-50";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        disabled={showResult}
                        className={`p-4 border-2 font-bold uppercase transition-all text-left text-sm md:text-base ${btnClass}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-6 p-6 bg-black border border-red-900/50 flex flex-col gap-4 overflow-hidden"
                    >
                      <div className="flex items-start gap-4">
                        <AlertOctagon className={`w-6 h-6 shrink-0 mt-1 ${selectedOpt === question.answer ? "text-green-500" : "text-red-600"}`} />
                        <div>
                          <h4 className={`font-black uppercase mb-2 ${selectedOpt === question.answer ? "text-green-500" : "text-red-600"}`}>
                            {selectedOpt === question.answer ? t('correct', LABELS) : t('incorrect', LABELS)}
                          </h4>
                          <p className="text-zinc-300 typewriter-font text-sm leading-relaxed mb-4">
                            {question.explanation}
                          </p>
                          <a href={question.source.url} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase text-red-500 hover:text-red-400 underline decoration-red-900/50 underline-offset-4 font-bold">
                            {t('source', LABELS)} {question.source.text}
                          </a>
                        </div>
                      </div>
                      
                      <button 
                        onClick={nextQuestion}
                        className="self-end mt-4 px-6 py-2 bg-red-900 hover:bg-red-800 text-white font-bold uppercase text-sm flex items-center gap-2 transition-colors"
                      >
                        {currentQ === currentQuestions.length - 1 ? t('verdict', LABELS) : t('next', LABELS)}
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full flex flex-col items-center justify-center text-center py-12"
              >
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
                  {t('result_title_1', LABELS)} <span className="text-red-600">{t('result_title_2', LABELS)}</span>
                </h3>
                <div className="text-8xl font-black text-red-600 mb-6 drop-shadow-[0_0_20px_rgba(255,0,0,0.5)] glitch" data-text={`${score}/${currentQuestions.length}`}>
                  {score}/{currentQuestions.length}
                </div>
                <p className="text-zinc-400 typewriter-font max-w-lg mb-8">
                  {score === currentQuestions.length 
                    ? t('msg_high', LABELS)
                    : score > 1 
                    ? t('msg_med', LABELS)
                    : t('msg_low', LABELS)}
                </p>
                <button 
                  onClick={restart}
                  className="px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white font-bold uppercase text-sm flex items-center gap-2 transition-colors"
                >
                  <RefreshCcw className="w-4 h-4" />
                  {t('restart', LABELS)}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
