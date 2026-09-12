"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Paperclip, FileText } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORIES = {
  pt: [
    {
      id: "formula",
      title: "Marketing de Fórmulas Infantis",
      content: "Além da crise global nos anos 70, a empresa esteve sob escrutínio contínuo. No Paquistão, o denunciante Syed Aamir Raza expôs subornos a médicos nos anos 90 (que inspirou o filme 'Tigers'). No Laos (2011), ONGs lançaram boicotes pela recusa da marca em traduzir rótulos e por incentivar médicos locais. Na China, a empresa foi investigada por subornar hospitais para roubar prontuários médicos e focar marketing em recém-nascidos. Em 2024, a Public Eye revelou que as fórmulas vendidas em países de baixa renda contêm quantidades perigosamente maiores de açúcar do que as vendidas na Europa.",
      evidence: [
        { text: "The Baby Killer (1974)", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "Filme 'Tigers' (Paquistão)", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" },
        { text: "Relatório Public Eye (2024)", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" },
        { text: "Casos de suborno na China e Laos", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ],
      stamp: "HISTÓRICO"
    },
    {
      id: "trabalho",
      title: "Trabalho Forçado e Infantil",
      content: "Fazendas de cacau na África Ocidental (Costa do Marfim e Gana) têm laços diretos com trabalho infantil e escravidão moderna, resultando em processos judiciais que chegaram à Suprema Corte dos EUA. Em 2015, a própria empresa admitiu que seus fornecedores de frutos do mar na Tailândia, usados nas rações Purina, dependiam fortemente de trabalho escravo em embarcações.",
      evidence: [
        { text: "Doe v. Nestlé (US Supreme Court)", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" },
        { text: "Relatórios do Fair Labor Association", url: "https://www.bbc.co.uk/news/world-africa-18644870" },
        { text: "Processos envolvendo a Indústria Pesqueira Tailandesa", url: "https://www.nytimes.com/2015/11/24/business/nestle-reports-on-abuses-in-thailands-seafood-industry.html" }
      ],
      stamp: "CLASSIFICADO"
    },
    {
      id: "seguranca",
      title: "Segurança Alimentar",
      content: "Ocorreram graves crises sanitárias: leite em pó adulterado com melamina na China (2008) que matou recém-nascidos; surto de E. coli na massa de biscoito Toll House nos EUA (2009); o macarrão Maggi banido na Índia por excesso de chumbo (2015) e recolhido nas Filipinas por Salmonella (2011). Além disso, larvas e gorgulhos foram encontrados em papinhas Cerelac na Índia.",
      evidence: [
        { text: "Escândalo do Leite com Melamina (China, 2008)", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Recall do Toll House por E. coli (EUA, 2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Banimento do Macarrão Maggi (Índia, 2015)", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Salmonella no Maggi (Filipinas, 2011)", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ],
      stamp: "TÓXICO"
    },
    {
      id: "agua",
      title: "Água",
      content: "O ex-CEO Peter Brabeck foi severamente criticado após defender a mercantilização da água. A empresa é acusada de engarrafar e esgotar aquíferos públicos por centavos. Operações controversas continuaram durante secas severas na Califórnia (utilizando licenças vencidas desde 1988), e geraram conflitos gigantescos em Cascade Locks (Oregon) e em Osceola (Michigan), além da extração abusiva no Parque das Águas em São Lourenço (Brasil).",
      evidence: [
        { text: "Extração no Parque das Águas (Brasil)", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Processos na Califórnia, Oregon e Michigan", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "Declarações sobre Mercantilização da Água", url: "https://www.theguardian.com/sustainable-business/nestle-peter-brabeck-attitude-water-change-stewardship" }
      ],
      stamp: "EXPOSED"
    },
    {
      id: "precos",
      title: "Fixação de Preços",
      content: "A corporação foi multada repetidamente por liderar cartéis econômicos globais. No Canadá, os escritórios foram revistados numa gigantesca investigação de fixação de preços de chocolate. Na Espanha (2024), a empresa foi multada em milhões de euros por formar um cartel para afundar e fixar os preços de compra do leite cru, lesando milhares de agricultores locais.",
      evidence: [
        { text: "Investigação do Cartel de Chocolate (Canadá)", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" },
        { text: "Multa do Cartel do Leite na Audiência Nacional (Espanha, 2024)", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ],
      stamp: "CRIME ECONÔMICO"
    },
    {
      id: "maquiagem",
      title: "Maquiagem de Produtos",
      content: "Em diversos mercados, mas especialmente no Brasil, a empresa foi denunciada, multada e processada repetidamente pelo Ministério da Justiça, Procon e IDEC pela prática de 'reduflação' (shrinkflation) — diminuir disfarçadamente o peso e tamanho das embalagens (como biscoitos, barras de chocolate e papinhas infantis) enquanto os preços são mantidos ou elevados.",
      evidence: [
        { text: "Denúncias do IDEC e Multas do Procon e AGU (Brasil)", url: "https://www.coad.com.br/home/noticias-detalhe/65107/agu-confirma-multa-de-r-591-mil-contra-a-nestle-por-desrespeito-ao-consumidor" },
        { text: "Processos Públicos por Shrinkflation", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ],
      stamp: "FRAUDE"
    },
    {
      id: "etiopia",
      title: "Dívida Etíope na Fome",
      content: "Em 2002, a empresa exigiu agressivamente que o governo da Etiópia pagasse US$ 6 milhões devido à nacionalização de uma empresa em 1975. O detalhe nefasto: a Etiópia enfrentava uma das mais severas crises de fome do século. Uma gigantesca campanha mundial de ativistas forçou a companhia a desistir da cobrança e doar os fundos exigidos.",
      evidence: [
        { text: "Reportagens de 2002 (The Guardian)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" },
        { text: "Pressão de ONGs e Oxfam", url: "https://www.swissinfo.ch/eng/nestl%C3%A9-receives-compensation-from-ethiopia/3583294" }
      ],
      stamp: "IMORAL"
    },
    {
      id: "russia",
      title: "Rússia e Ucrânia",
      content: "Ao contrário das demais corporações ocidentais que deixaram a Rússia no início da invasão à Ucrânia (2022), a empresa manteve vastas operações, sendo listada pela Agência Nacional de Prevenção à Corrupção Ucraniana como 'patrocinadora internacional da guerra'. Além disso, em 2015, a marca exigiu que apenas apresentadores falantes de russo, e não ucraniano, fossem contratados para um programa patrocinado.",
      evidence: [
        { text: "Patrocinadores Internacionais da Guerra (NACP da Ucrânia)", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Vazamentos do Grupo Anonymous", url: "https://www.newsweek.com/nestles-russia-ties-puts-company-twitter-users-crosshairs-1689068" }
      ],
      stamp: "COMPLICAÇÃO"
    },
    {
      id: "sindical",
      title: "Violência Antissindical",
      content: "O Sindicato Colombiano dos Trabalhadores da Alimentação (Sinaltrainal) relatou o terror em fábricas na Colômbia. A corporação foi processada e publicamente acusada por cumplicidade ou extrema negligência no assassinato brutal de líderes sindicais (como Luciano Romero em 2005), além de utilizar intimidação paramilitar para afundar greves e movimentos operários.",
      evidence: [
        { text: "Assassinato de Luciano Romero (Colômbia, 2005)", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" },
        { text: "Ações do Tribunal Permanente dos Povos", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ],
      stamp: "SANGUE"
    },
    {
      id: "desmatamento",
      title: "Desmatamento e Greenwashing",
      content: "Campanhas do Greenpeace revelaram o desmatamento brutal em Gana, Costa do Marfim e Indonésia, ameaçando o habitat de orangotangos e chimpanzés para extrair cacau e óleo de palma. Simultaneamente, a empresa praticou severo 'greenwashing' no Canadá, divulgando mentiras sobre garrafas plásticas recicladas, enquanto ela própria era listada como uma das principais poluidoras de plásticos do planeta.",
      evidence: [
        { text: "Investigações Mighty Earth e Greenpeace", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" },
        { text: "Denúncias ao Advertising Standards Canada", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Extinção de habitats naturais em parques nacionais africanos", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ],
      stamp: "ECOCÍDIO"
    }
  ],
  en: [
    {
      id: "formula",
      title: "Infant Formula Marketing",
      content: "Beyond the global crisis in the 70s, the company remained under scrutiny. In Pakistan, whistleblower Syed Aamir Raza exposed bribery of doctors in the 90s (inspiring the movie 'Tigers'). In Laos (2011), NGOs launched boycotts over the brand's refusal to translate labels and for incentivizing local doctors. In China, the company was investigated for bribing hospitals to steal medical records and push marketing on newborns. In 2024, Public Eye revealed that formula sold in low-income countries contains dangerously higher sugar amounts than those sold in Europe.",
      evidence: [
        { text: "The Baby Killer (1974)", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "'Tigers' Movie (Pakistan)", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" },
        { text: "Public Eye Report (2024)", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" },
        { text: "Bribery cases in China and Laos", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ],
      stamp: "HISTORICAL"
    },
    {
      id: "trabalho",
      title: "Forced and Child Labor",
      content: "Cocoa farms in West Africa (Ivory Coast and Ghana) have direct ties to child labor and modern slavery, resulting in lawsuits reaching the US Supreme Court. In 2015, the company itself admitted its seafood suppliers in Thailand, used in Purina pet food, heavily relied on slave labor aboard fishing vessels.",
      evidence: [
        { text: "Doe v. Nestlé (US Supreme Court)", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" },
        { text: "Fair Labor Association Reports", url: "https://www.bbc.co.uk/news/world-africa-18644870" },
        { text: "Thai Seafood Industry Lawsuits", url: "https://www.nytimes.com/2015/11/24/business/nestle-reports-on-abuses-in-thailands-seafood-industry.html" }
      ],
      stamp: "CLASSIFIED"
    },
    {
      id: "seguranca",
      title: "Food Safety",
      content: "Severe health crises occurred: milk powder adulterated with melamine in China (2008) killing newborns; an E. coli outbreak in Toll House cookie dough in the US (2009); Maggi noodles banned in India for excess lead (2015) and recalled in the Philippines for Salmonella (2011). Furthermore, larvae and weevils were found in Cerelac baby food in India.",
      evidence: [
        { text: "Melamine Milk Scandal (China, 2008)", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Toll House E. coli Recall (US, 2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Maggi Noodles Ban (India, 2015)", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Salmonella in Maggi (Philippines, 2011)", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ],
      stamp: "TOXIC"
    },
    {
      id: "agua",
      title: "Water Commodification",
      content: "Former CEO Peter Brabeck faced fierce backlash after defending the commodification of water. The company is accused of bottling and draining public aquifers for pennies. Controversial operations persisted during severe droughts in California (using permits expired since 1988) and sparked massive conflicts in Cascade Locks (Oregon), Osceola (Michigan), and the abusive extraction at Parque das Águas in São Lourenço (Brazil).",
      evidence: [
        { text: "Extraction at Parque das Águas (Brazil)", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Lawsuits in California, Oregon, and Michigan", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "Water Commodification Statements", url: "https://www.theguardian.com/sustainable-business/nestle-peter-brabeck-attitude-water-change-stewardship" }
      ],
      stamp: "EXPOSED"
    },
    {
      id: "precos",
      title: "Price Fixing",
      content: "The corporation was repeatedly fined for leading global economic cartels. In Canada, offices were raided in a massive chocolate price-fixing probe. In Spain (2024), the company was fined millions of euros for forming a cartel to sink and fix raw milk purchase prices, defrauding thousands of local farmers.",
      evidence: [
        { text: "Chocolate Cartel Probe (Canada)", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" },
        { text: "Milk Cartel Fine at National Court (Spain, 2024)", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ],
      stamp: "ECONOMIC CRIME"
    },
    {
      id: "maquiagem",
      title: "Shrinkflation & Deception",
      content: "In several markets, especially Brazil, the company was repeatedly denounced, fined, and sued by the Ministry of Justice, Procon, and IDEC for the practice of 'shrinkflation'—sneaky reductions in weight and packaging size (like cookies, chocolate bars, and baby food) while maintaining or hiking up prices.",
      evidence: [
        { text: "IDEC Reports and Procon/AGU Fines (Brazil)", url: "https://www.coad.com.br/home/noticias-detalhe/65107/agu-confirma-multa-de-r-591-mil-contra-a-nestle-por-desrespeito-ao-consumidor" },
        { text: "Public Lawsuits over Shrinkflation", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ],
      stamp: "FRAUD"
    },
    {
      id: "etiopia",
      title: "Ethiopian Famine Debt",
      content: "In 2002, the company aggressively demanded the Ethiopian government pay US$ 6 million for the nationalization of a business in 1975. The grim detail: Ethiopia was facing one of the century's most severe famines. A massive global activist campaign forced the company to drop the claim and donate the demanded funds.",
      evidence: [
        { text: "2002 Reports (The Guardian)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" },
        { text: "NGO and Oxfam Pressure", url: "https://www.swissinfo.ch/eng/nestl%C3%A9-receives-compensation-from-ethiopia/3583294" }
      ],
      stamp: "IMMORAL"
    },
    {
      id: "russia",
      title: "Russia and Ukraine",
      content: "Unlike other Western corporations that left Russia at the onset of the Ukraine invasion (2022), the company maintained vast operations, being listed by the Ukrainian National Agency on Corruption Prevention as an 'international sponsor of war.' Moreover, in 2015, the brand demanded that only Russian-speaking, not Ukrainian-speaking, hosts be hired for a sponsored program.",
      evidence: [
        { text: "International Sponsors of War (NACP Ukraine)", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Anonymous Group Leaks", url: "https://www.newsweek.com/nestles-russia-ties-puts-company-twitter-users-crosshairs-1689068" }
      ],
      stamp: "COMPLICIT"
    },
    {
      id: "sindical",
      title: "Anti-Union Violence",
      content: "The Colombian Food Workers Union (Sinaltrainal) reported terror in factories in Colombia. The corporation was sued and publicly accused of complicity or extreme negligence in the brutal murder of union leaders (like Luciano Romero in 2005), as well as utilizing paramilitary intimidation to crush strikes and labor movements.",
      evidence: [
        { text: "Murder of Luciano Romero (Colombia, 2005)", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" },
        { text: "Actions of the Permanent Peoples' Tribunal", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ],
      stamp: "BLOOD"
    },
    {
      id: "desmatamento",
      title: "Deforestation & Greenwashing",
      content: "Greenpeace campaigns revealed brutal deforestation in Ghana, Ivory Coast, and Indonesia, threatening orangutan and chimpanzee habitats to extract cocoa and palm oil. Concurrently, the company practiced severe 'greenwashing' in Canada, spreading lies about recycled plastic bottles, while being listed as one of the planet's top plastic polluters.",
      evidence: [
        { text: "Mighty Earth and Greenpeace Investigations", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" },
        { text: "Complaints to Advertising Standards Canada", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Habitat Extinction in African National Parks", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ],
      stamp: "ECOCIDE"
    }
  ],
  es: [
    {
      id: "formula",
      title: "Marketing de Fórmulas Infantiles",
      content: "Más allá de la crisis global en los años 70, la empresa se mantuvo bajo escrutinio. En Pakistán, el denunciante Syed Aamir Raza expuso sobornos a médicos en los 90 (inspirando la película 'Tigers'). En Laos (2011), ONGs lanzaron boicots por la negativa de la marca a traducir etiquetas y por incentivar a médicos locales. En China, la empresa fue investigada por sobornar a hospitales para robar historiales médicos y enfocar su marketing en recién nacidos. En 2024, Public Eye reveló que la fórmula vendida en países de bajos ingresos contiene cantidades de azúcar peligrosamente más altas que en Europa.",
      evidence: [
        { text: "The Baby Killer (1974)", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "Película 'Tigers' (Pakistán)", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" },
        { text: "Informe de Public Eye (2024)", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" },
        { text: "Casos de soborno en China y Laos", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ],
      stamp: "HISTÓRICO"
    },
    {
      id: "trabalho",
      title: "Trabajo Forzado e Infantil",
      content: "Las granjas de cacao en África Occidental (Costa de Marfil y Ghana) tienen vínculos directos con el trabajo infantil y la esclavitud moderna, resultando en demandas que llegaron a la Corte Suprema de EE. UU. En 2015, la propia empresa admitió que sus proveedores de mariscos en Tailandia, usados en alimentos para mascotas Purina, dependían en gran medida de mano de obra esclava a bordo de embarcaciones.",
      evidence: [
        { text: "Doe v. Nestlé (Corte Suprema de EE. UU.)", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" },
        { text: "Informes de Fair Labor Association", url: "https://www.bbc.co.uk/news/world-africa-18644870" },
        { text: "Demandas de la Industria Pesquera Tailandesa", url: "https://www.nytimes.com/2015/11/24/business/nestle-reports-on-abuses-in-thailands-seafood-industry.html" }
      ],
      stamp: "CLASIFICADO"
    },
    {
      id: "seguranca",
      title: "Seguridad Alimentaria",
      content: "Ocurrieron crisis de salud severas: leche en polvo adulterada con melamina en China (2008) que mató a recién nacidos; un brote de E. coli en la masa de galletas Toll House en EE. UU. (2009); los fideos Maggi fueron prohibidos en India por exceso de plomo (2015) y retirados en Filipinas por Salmonella (2011). Además, se encontraron larvas y gorgojos en papillas Cerelac en India.",
      evidence: [
        { text: "Escándalo de la Leche con Melamina (China, 2008)", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Retiro de Toll House por E. coli (EE. UU., 2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Prohibición de Fideos Maggi (India, 2015)", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Salmonella en Maggi (Filipinas, 2011)", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ],
      stamp: "TÓXICO"
    },
    {
      id: "agua",
      title: "Mercantilización del Agua",
      content: "El ex CEO Peter Brabeck enfrentó duras críticas tras defender la mercantilización del agua. La empresa es acusada de embotellar y drenar acuíferos públicos por centavos. Las operaciones controvertidas persistieron durante sequías severas en California (usando permisos expirados desde 1988) y desataron conflictos masivos en Cascade Locks (Oregón), Osceola (Michigan) y la extracción abusiva en el Parque das Águas en São Lourenço (Brasil).",
      evidence: [
        { text: "Extracción en Parque das Águas (Brasil)", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Demandas en California, Oregón y Michigan", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "Declaraciones sobre Mercantilización del Agua", url: "https://www.theguardian.com/sustainable-business/nestle-peter-brabeck-attitude-water-change-stewardship" }
      ],
      stamp: "EXPUESTO"
    },
    {
      id: "precos",
      title: "Fijación de Precios",
      content: "La corporación fue multada repetidamente por liderar cárteles económicos globales. En Canadá, las oficinas fueron allanadas en una enorme investigación sobre fijación de precios del chocolate. En España (2024), la empresa fue multada con millones de euros por formar un cártel para hundir y fijar los precios de compra de leche cruda, defraudando a miles de agricultores locales.",
      evidence: [
        { text: "Investigación del Cártel del Chocolate (Canadá)", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" },
        { text: "Multa al Cártel de la Leche en la Audiencia Nacional (España, 2024)", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ],
      stamp: "CRIMEN ECONÓMICO"
    },
    {
      id: "maquiagem",
      title: "Reduflación y Engaño",
      content: "En varios mercados, especialmente en Brasil, la empresa fue denunciada, multada y demandada repetidamente por el Ministerio de Justicia, Procon e IDEC por la práctica de 'reduflación' (shrinkflation)—reducciones furtivas en peso y tamaño de los empaques (como galletas, barras de chocolate y papillas) mientras se mantenían o subían los precios.",
      evidence: [
        { text: "Denuncias del IDEC y Multas de Procon/AGU (Brasil)", url: "https://www.coad.com.br/home/noticias-detalhe/65107/agu-confirma-multa-de-r-591-mil-contra-a-nestle-por-desrespeito-ao-consumidor" },
        { text: "Demandas Públicas por Reduflación", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ],
      stamp: "FRAUDE"
    },
    {
      id: "etiopia",
      title: "Deuda de Hambruna Etíope",
      content: "En 2002, la empresa exigió agresivamente que el gobierno de Etiopía pagara 6 millones de dólares por la nacionalización de un negocio en 1975. El detalle sombrío: Etiopía enfrentaba una de las peores hambrunas del siglo. Una masiva campaña activista global obligó a la compañía a retirar el reclamo y donar los fondos exigidos.",
      evidence: [
        { text: "Reportes de 2002 (The Guardian)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" },
        { text: "Presión de ONGs y Oxfam", url: "https://www.swissinfo.ch/eng/nestl%C3%A9-receives-compensation-from-ethiopia/3583294" }
      ],
      stamp: "INMORAL"
    },
    {
      id: "russia",
      title: "Rusia y Ucrania",
      content: "A diferencia de otras corporaciones occidentales que abandonaron Rusia al inicio de la invasión a Ucrania (2022), la empresa mantuvo vastas operaciones, siendo incluida por la Agencia Nacional de Prevención de la Corrupción de Ucrania como un 'patrocinador internacional de la guerra'. Además, en 2015, la marca exigió que solo se contratara a presentadores rusohablantes, y no ucranianohablantes, para un programa patrocinado.",
      evidence: [
        { text: "Patrocinadores Internacionales de la Guerra (NACP Ucrania)", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Filtraciones del Grupo Anonymous", url: "https://www.newsweek.com/nestles-russia-ties-puts-company-twitter-users-crosshairs-1689068" }
      ],
      stamp: "CÓMPLICE"
    },
    {
      id: "sindical",
      title: "Violencia Antisindical",
      content: "El Sindicato Colombiano de Trabajadores de la Alimentación (Sinaltrainal) reportó terror en las fábricas en Colombia. La corporación fue demandada y acusada públicamente de complicidad o negligencia extrema en el brutal asesinato de líderes sindicales (como Luciano Romero en 2005), además de utilizar intimidación paramilitar para aplastar huelgas y movimientos obreros.",
      evidence: [
        { text: "Asesinato de Luciano Romero (Colombia, 2005)", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" },
        { text: "Acciones del Tribunal Permanente de los Pueblos", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ],
      stamp: "SANGRE"
    },
    {
      id: "desmatamento",
      title: "Deforestación y Greenwashing",
      content: "Campañas de Greenpeace revelaron brutal deforestación en Ghana, Costa de Marfil e Indonesia, amenazando los hábitats de orangutanes y chimpancés para extraer cacao y aceite de palma. Simultáneamente, la empresa practicó un severo 'greenwashing' en Canadá, difundiendo mentiras sobre botellas de plástico recicladas, mientras figuraba como una de las principales contaminadoras de plástico del planeta.",
      evidence: [
        { text: "Investigaciones de Mighty Earth y Greenpeace", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" },
        { text: "Denuncias a Advertising Standards Canada", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Extinción de hábitats en parques nacionales africanos", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ],
      stamp: "ECOCIDIO"
    }
  ]
};

const LABELS = {
  pt: {
    header_1: "Arquivos",
    header_2: "Confidenciais",
    attached_evidence: "Evidências Anexadas"
  },
  en: {
    header_1: "Confidential",
    header_2: "Files",
    attached_evidence: "Attached Evidence"
  },
  es: {
    header_1: "Archivos",
    header_2: "Confidenciales",
    attached_evidence: "Evidencias Adjuntas"
  }
};

export default function DossierSection() {
  const { language, t } = useLanguage();
  const currentCategories = CATEGORIES[language] || CATEGORIES.pt;
  
  const [activeTab, setActiveTab] = useState(currentCategories[0].id);
  const activeData = currentCategories.find(c => c.id === activeTab) || currentCategories[0];

  return (
    <section className="py-24 bg-[#0a0a0a] border-t-8 border-red-900 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16 uppercase tracking-tight">
          {t('header_1', LABELS)} <span className="text-red-600">{t('header_2', LABELS)}</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="md:w-1/3 flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
            {currentCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left px-4 py-3 font-bold uppercase text-sm transition-all border-l-4 ${
                  activeTab === cat.id 
                    ? "bg-red-900/20 border-red-600 text-red-500" 
                    : "bg-[#111] border-zinc-800 text-zinc-500 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Paper Folder Content */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="dossier-bg p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative min-h-[500px]"
              >
                {/* Paperclip design */}
                <div className="absolute top-4 left-4 text-zinc-400 rotate-45 opacity-50">
                  <Paperclip className="w-8 h-8" />
                </div>
                
                {/* Stamp */}
                <div className="absolute top-8 right-8 stamp">
                  {activeData.stamp}
                </div>

                <div className="mt-12">
                  <h3 className="text-3xl font-black text-black mb-6 uppercase border-b-2 border-black/20 pb-4">
                    {activeData.title}
                  </h3>
                  
                  <p className="text-black/80 typewriter-font text-lg leading-relaxed mb-8">
                    {activeData.content}
                  </p>

                  <div className="bg-black/5 p-6 rounded border border-black/10">
                    <h4 className="text-black font-bold uppercase mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-red-800" />
                      {t('attached_evidence', LABELS)}
                    </h4>
                    <ul className="space-y-3">
                      {activeData.evidence.map((ev, i) => (
                        <li key={i} className="flex items-start gap-2 text-black/70 typewriter-font font-bold text-sm">
                          <span className="text-red-700 font-black mt-0.5">-</span>
                          <a href={ev.url} target="_blank" rel="noopener noreferrer" className="hover:text-red-700 underline decoration-black/20 underline-offset-4">
                            {ev.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
