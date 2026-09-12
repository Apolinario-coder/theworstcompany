"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { useLanguage } from "@/context/LanguageContext";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MARKERS = {
  pt: [
    { 
      name: "Brasil", 
      coordinates: [-51.9, -14.2], 
      events: [
        { text: "Extração massiva do Parque das Águas em São Lourenço", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Múltiplas condenações por maquiagem de produtos (Reduflação)", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ] 
    },
    { 
      name: "Estados Unidos", 
      coordinates: [-95.7, 37.0], 
      events: [
        { text: "Audiências no Senado sobre a crise da fórmula infantil", url: "https://www.nytimes.com/1989/09/03/weekinreview/the-nation-the-infant-formula-debate-strikes-home.html" },
        { text: "Bombeamento contínuo de água durante secas severas (Califórnia, Oregon, Michigan)", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "Surto de E. coli na massa de biscoito Toll House (2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Processo Doe v. Nestlé na Suprema Corte por trabalho escravo", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
      ] 
    },
    { 
      name: "Costa do Marfim e Gana", 
      coordinates: [-5.5, 7.5], 
      events: [
        { text: "Fazendas de cacau ligadas a trabalho infantil e análogo à escravidão", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" },
        { text: "Desmatamento de Parques Nacionais para plantações de cacau", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" }
      ] 
    },
    { 
      name: "Tailândia", 
      coordinates: [100.9, 15.8], 
      events: [
        { text: "Trabalho forçado na indústria pesqueira de fornecedores para ração animal (Purina)", url: "https://www.ap.org/explore/seafood-from-slaves/nestle-confirms-labor-abuse-among-its-thai-seafood-suppliers.html" }
      ] 
    },
    { 
      name: "Índia", 
      coordinates: [78.9, 20.5], 
      events: [
        { text: "Escândalo do Macarrão Maggi (2015), contendo excesso de chumbo", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Larvas supostamente encontradas em leite em pó infantil (2015)", url: "http://www.ndtv.com/india-news/live-larvae-allegedly-found-in-nestles-milk-powder-in-tamil-nadu-more-tests-on-768288" },
        { text: "Gorgulhos e fungos vivos na papinha Cerelac", url: "http://timesofindia.indiatimes.com/india/Live-worms-found-in-Nestle-Cerelac-baby-food-in-Coimbatore/articleshow/47689027.cms" }
      ] 
    },
    { 
      name: "China", 
      coordinates: [104.1, 35.8], 
      events: [
        { text: "Leite envenenado por melamina que vitimou mais de 50.000 crianças", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Roubo de prontuários médicos de hospitais para focar marketing em recém-nascidos", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ] 
    },
    { 
      name: "Colômbia", 
      coordinates: [-74.2, 4.5], 
      events: [
        { text: "Atividades antissindicais e conivência no assassinato de líderes como Luciano Romero", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ] 
    },
    { 
      name: "Etiópia", 
      coordinates: [40.4, 9.1], 
      events: [
        { text: "Exigência cruel de dívida milionária em meio a grande crise de fome nacional (2002)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
      ] 
    },
    { 
      name: "Indonésia", 
      coordinates: [113.9, -0.7], 
      events: [
        { text: "Desmatamento massivo de selvas virgens para o óleo de palma", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ] 
    },
    { 
      name: "Filipinas", 
      coordinates: [121.7, 12.8], 
      events: [
        { text: "Empresa listada ativamente como uma das maiores poluidoras de plásticos", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Recolhimento do Macarrão Maggi por contaminação por Salmonella", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ] 
    },
    { 
      name: "Suíça", 
      coordinates: [7.4, 46.9], 
      events: [
        { text: "Sede corporativa e local do julgamento de censura contra o livro 'Nestlé Mata Bebês'", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" },
        { text: "Denúncias da ONG Suíça Public Eye sobre racismo nutricional no teor de açúcar de fórmulas", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
      ] 
    },
    { 
      name: "Reino Unido", 
      coordinates: [-0.1, 51.5], 
      events: [
        { text: "Lançamento do livro denúncia original 'The Baby Killer' pela ONG War on Want", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "Sede do reinício do boicote global nos anos 80", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
      ] 
    },
    { 
      name: "Rússia / Ucrânia", 
      coordinates: [37.6, 55.7], 
      events: [
        { text: "Manutenção de lucros na Rússia durante a guerra, listada como patrocinadora do terror", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Discriminação no canal Nesquik por idioma ucraniano", url: "http://www.depo.ua/ukr/life/na-kanal-ahmetova-ne-vzyali-veduchu-bo-vona-ne-rozmovlyae-14082015133800" }
      ] 
    },
    { 
      name: "Canadá", 
      coordinates: [-106.3, 56.1], 
      events: [
        { text: "Escândalo do gigantesco cartel para fixação de preços de chocolates", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
      ] 
    },
    { 
      name: "Espanha", 
      coordinates: [-3.7, 40.4], 
      events: [
        { text: "Formação de Cartel Nacional do Leite em detrimento de milhares de produtores", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ] 
    },
    { 
      name: "Paquistão", 
      coordinates: [69.3, 30.3], 
      events: [
        { text: "Denúncias de subornos a médicos e corrupção hospitalar com Aamir Raza (O caso do filme 'Tigers')", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" }
      ] 
    },
    { 
      name: "Laos", 
      coordinates: [102.5, 19.8], 
      events: [
        { text: "Boicote global por ignorar idiomas nativos em rótulos e financiar subornos de médicos", url: "http://info.babymilkaction.org/sites/info.babymilkaction.org/files/Aid%20Agencies%20in%20Laos%20refuse%20to%20apply%20for%20Nestle%20cash_30%20May%202011.pdf" }
      ] 
    }
  ],
  en: [
    { 
      name: "Brazil", 
      coordinates: [-51.9, -14.2], 
      events: [
        { text: "Massive extraction from Parque das Águas in São Lourenço", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Multiple convictions for product shrinkflation", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ] 
    },
    { 
      name: "United States", 
      coordinates: [-95.7, 37.0], 
      events: [
        { text: "Senate hearings on the infant formula crisis", url: "https://www.nytimes.com/1989/09/03/weekinreview/the-nation-the-infant-formula-debate-strikes-home.html" },
        { text: "Continuous water pumping during severe droughts (California, Oregon, Michigan)", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "E. coli outbreak in Toll House cookie dough (2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Doe v. Nestlé Supreme Court case over slave labor", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
      ] 
    },
    { 
      name: "Ivory Coast & Ghana", 
      coordinates: [-5.5, 7.5], 
      events: [
        { text: "Cocoa farms linked to child and slave-like labor", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" },
        { text: "Deforestation of National Parks for cocoa plantations", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" }
      ] 
    },
    { 
      name: "Thailand", 
      coordinates: [100.9, 15.8], 
      events: [
        { text: "Forced labor in the fishing industry of pet food suppliers (Purina)", url: "https://www.ap.org/explore/seafood-from-slaves/nestle-confirms-labor-abuse-among-its-thai-seafood-suppliers.html" }
      ] 
    },
    { 
      name: "India", 
      coordinates: [78.9, 20.5], 
      events: [
        { text: "Maggi Noodles scandal (2015), containing excess lead", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Larvae allegedly found in infant milk powder (2015)", url: "http://www.ndtv.com/india-news/live-larvae-allegedly-found-in-nestles-milk-powder-in-tamil-nadu-more-tests-on-768288" },
        { text: "Live weevils and fungi in Cerelac baby food", url: "http://timesofindia.indiatimes.com/india/Live-worms-found-in-Nestle-Cerelac-baby-food-in-Coimbatore/articleshow/47689027.cms" }
      ] 
    },
    { 
      name: "China", 
      coordinates: [104.1, 35.8], 
      events: [
        { text: "Melamine-poisoned milk affecting over 50,000 children", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Theft of medical records from hospitals to target marketing at newborns", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ] 
    },
    { 
      name: "Colombia", 
      coordinates: [-74.2, 4.5], 
      events: [
        { text: "Anti-union activities and complicity in the murder of leaders like Luciano Romero", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ] 
    },
    { 
      name: "Ethiopia", 
      coordinates: [40.4, 9.1], 
      events: [
        { text: "Cruel demand for million-dollar debt amidst a massive national famine crisis (2002)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
      ] 
    },
    { 
      name: "Indonesia", 
      coordinates: [113.9, -0.7], 
      events: [
        { text: "Massive deforestation of virgin jungles for palm oil", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ] 
    },
    { 
      name: "Philippines", 
      coordinates: [121.7, 12.8], 
      events: [
        { text: "Company actively listed as one of the largest plastic polluters", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Recall of Maggi Noodles due to Salmonella contamination", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ] 
    },
    { 
      name: "Switzerland", 
      coordinates: [7.4, 46.9], 
      events: [
        { text: "Corporate headquarters and site of the censorship trial against the book 'Nestlé Kills Babies'", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" },
        { text: "Reports by Swiss NGO Public Eye on nutritional racism in formula sugar content", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
      ] 
    },
    { 
      name: "United Kingdom", 
      coordinates: [-0.1, 51.5], 
      events: [
        { text: "Launch of the original exposé book 'The Baby Killer' by NGO War on Want", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "Headquarters of the global boycott relaunch in the 80s", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
      ] 
    },
    { 
      name: "Russia / Ukraine", 
      coordinates: [37.6, 55.7], 
      events: [
        { text: "Maintenance of profits in Russia during the war, listed as a sponsor of terror", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Discrimination on the Nesquik channel over Ukrainian language", url: "http://www.depo.ua/ukr/life/na-kanal-ahmetova-ne-vzyali-veduchu-bo-vona-ne-rozmovlyae-14082015133800" }
      ] 
    },
    { 
      name: "Canada", 
      coordinates: [-106.3, 56.1], 
      events: [
        { text: "Massive chocolate price-fixing cartel scandal", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
      ] 
    },
    { 
      name: "Spain", 
      coordinates: [-3.7, 40.4], 
      events: [
        { text: "Formation of National Milk Cartel to the detriment of thousands of producers", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ] 
    },
    { 
      name: "Pakistan", 
      coordinates: [69.3, 30.3], 
      events: [
        { text: "Reports of bribes to doctors and hospital corruption with Aamir Raza ('Tigers' movie case)", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" }
      ] 
    },
    { 
      name: "Laos", 
      coordinates: [102.5, 19.8], 
      events: [
        { text: "Global boycott for ignoring native languages on labels and financing doctor bribes", url: "http://info.babymilkaction.org/sites/info.babymilkaction.org/files/Aid%20Agencies%20in%20Laos%20refuse%20to%20apply%20for%20Nestle%20cash_30%20May%202011.pdf" }
      ] 
    }
  ],
  es: [
    { 
      name: "Brasil", 
      coordinates: [-51.9, -14.2], 
      events: [
        { text: "Extracción masiva del Parque das Águas en São Lourenço", url: "https://www.thenational.ae/arts-culture/the-human-rights-and-wrongs-of-nestl%C3%A9-and-water-for-all-1.303517" },
        { text: "Múltiples condenas por reduflación de productos", url: "https://www.estadao.com.br/economia/nestle-e-multada-por-maquiagem-de-produtos/" }
      ] 
    },
    { 
      name: "Estados Unidos", 
      coordinates: [-95.7, 37.0], 
      events: [
        { text: "Audiencias en el Senado sobre la crisis de la fórmula infantil", url: "https://www.nytimes.com/1989/09/03/weekinreview/the-nation-the-infant-formula-debate-strikes-home.html" },
        { text: "Bombeo continuo de agua durante sequías severas (California, Oregón, Michigan)", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" },
        { text: "Brote de E. coli en la masa de galletas Toll House (2009)", url: "https://www.nytimes.com/2010/01/14/business/14nestle.html?_r=0" },
        { text: "Caso Doe v. Nestlé en la Corte Suprema por trabajo esclavo", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
      ] 
    },
    { 
      name: "Costa de Marfil y Ghana", 
      coordinates: [-5.5, 7.5], 
      events: [
        { text: "Granjas de cacao vinculadas al trabajo infantil y análogo a la esclavitud", url: "https://www.washingtonpost.com/graphics/2019/business/hershey-nestle-mars-chocolate-child-labor-west-africa/" },
        { text: "Deforestación de Parques Nacionales para plantaciones de cacao", url: "http://www.mightyearth.org/wp-content/uploads/2017/09/chocolates_dark_secret_english_web.pdf" }
      ] 
    },
    { 
      name: "Tailandia", 
      coordinates: [100.9, 15.8], 
      events: [
        { text: "Trabajo forzado en la industria pesquera de proveedores de alimentos para mascotas (Purina)", url: "https://www.ap.org/explore/seafood-from-slaves/nestle-confirms-labor-abuse-among-its-thai-seafood-suppliers.html" }
      ] 
    },
    { 
      name: "India", 
      coordinates: [78.9, 20.5], 
      events: [
        { text: "Escándalo de los fideos Maggi (2015), con exceso de plomo", url: "http://timesofindia.indiatimes.com/india/Maggi-under-regulatory-scanner-for-lead-MSG-beyond-permissible-limit/articleshow/47304615.cms" },
        { text: "Larvas presuntamente encontradas en leche en polvo infantil (2015)", url: "http://www.ndtv.com/india-news/live-larvae-allegedly-found-in-nestles-milk-powder-in-tamil-nadu-more-tests-on-768288" },
        { text: "Gorgojos vivos y hongos en la papilla Cerelac", url: "http://timesofindia.indiatimes.com/india/Live-worms-found-in-Nestle-Cerelac-baby-food-in-Coimbatore/articleshow/47689027.cms" }
      ] 
    },
    { 
      name: "China", 
      coordinates: [104.1, 35.8], 
      events: [
        { text: "Leche envenenada con melamina que afectó a más de 50.000 niños", url: "https://www.reuters.com/article/us-china-melamine-idUSTRE4AF06Q20081116" },
        { text: "Robo de historiales médicos de hospitales para dirigir marketing a recién nacidos", url: "https://www.reuters.com/article/us-china-milkpowder-specialreport-idUSBRE9A700820131108" }
      ] 
    },
    { 
      name: "Colombia", 
      coordinates: [-74.2, 4.5], 
      events: [
        { text: "Actividades antisindicales y complicidad en el asesinato de líderes como Luciano Romero", url: "https://www.business-humanrights.org/en/latest-news/nestl%C3%A9-lawsuit-re-colombia/" }
      ] 
    },
    { 
      name: "Etiopía", 
      coordinates: [40.4, 9.1], 
      events: [
        { text: "Exigencia cruel de deuda millonaria en medio de una gran crisis de hambruna nacional (2002)", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
      ] 
    },
    { 
      name: "Indonesia", 
      coordinates: [113.9, -0.7], 
      events: [
        { text: "Deforestación masiva de selvas vírgenes para aceite de palma", url: "https://www.worldwildlife.org/stories/forest-elephant-populations-in-cote-d-ivoire-in-steep-decline" }
      ] 
    },
    { 
      name: "Filipinas", 
      coordinates: [121.7, 12.8], 
      events: [
        { text: "Empresa listada activamente como una de las mayores contaminadoras de plástico", url: "https://www.cbc.ca/news/nestl%C3%A9-bottled-water-ads-misleading-environmentalists-say-1.748791" },
        { text: "Retirada de fideos Maggi por contaminación por Salmonella", url: "https://news.abs-cbn.com/nation/05/05/11/maggi-noodles-recalled-over-salmonella-scare" }
      ] 
    },
    { 
      name: "Suiza", 
      coordinates: [7.4, 46.9], 
      events: [
        { text: "Sede corporativa y sitio del juicio por censura contra el libro 'Nestlé Mata Bebés'", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" },
        { text: "Informes de la ONG suiza Public Eye sobre racismo nutricional en el contenido de azúcar de fórmulas", url: "https://www.publiceye.ch/en/media-corner/press-releases/detail/sugar-for-nestle-not-all-babies-are-equal" }
      ] 
    },
    { 
      name: "Reino Unido", 
      coordinates: [-0.1, 51.5], 
      events: [
        { text: "Lanzamiento del libro de denuncia original 'The Baby Killer' por la ONG War on Want", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" },
        { text: "Sede del reinicio del boicot global en los años 80", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
      ] 
    },
    { 
      name: "Rusia / Ucrania", 
      coordinates: [37.6, 55.7], 
      events: [
        { text: "Mantenimiento de ganancias en Rusia durante la guerra, listada como patrocinadora del terror", url: "https://nazk.gov.ua/en/news/international-sponsors-of-war-80-years-after-world-war-ii-nestle-again-feeds-the-aggressor/" },
        { text: "Discriminación en el canal Nesquik por idioma ucraniano", url: "http://www.depo.ua/ukr/life/na-kanal-ahmetova-ne-vzyali-veduchu-bo-vona-ne-rozmovlyae-14082015133800" }
      ] 
    },
    { 
      name: "Canadá", 
      coordinates: [-106.3, 56.1], 
      events: [
        { text: "Escándalo del gigantesco cártel de fijación de precios de chocolates", url: "https://www.theglobeandmail.com/report-on-business/industry-news/the-law-page/former-nestl-canada-ceo-may-face-chocolate-price-fixing-charge-shortly/article6013249/" }
      ] 
    },
    { 
      name: "España", 
      coordinates: [-3.7, 40.4], 
      events: [
        { text: "Formación de un Cártel Nacional de la Leche en detrimento de miles de productores", url: "https://www.eldiario.es/galicia/cartel-leche-enfrenta-pagar-miles-millones-euros-productores-perjudicados_1_10952915.html" }
      ] 
    },
    { 
      name: "Pakistán", 
      coordinates: [69.3, 30.3], 
      events: [
        { text: "Denuncias de sobornos a médicos y corrupción hospitalaria con Aamir Raza (caso de la película 'Tigers')", url: "https://scroll.in/reel/903017/in-emraan-hashmis-tigers-a-fight-against-a-corporation-that-took-12-years-to-hit-the-screens" }
      ] 
    },
    { 
      name: "Laos", 
      coordinates: [102.5, 19.8], 
      events: [
        { text: "Boicot global por ignorar idiomas nativos en etiquetas y financiar sobornos a médicos", url: "http://info.babymilkaction.org/sites/info.babymilkaction.org/files/Aid%20Agencies%20in%20Laos%20refuse%20to%20apply%20for%20Nestle%20cash_30%20May%202011.pdf" }
      ] 
    }
  ]
};

const LABELS = {
  pt: {
    title_1: "Pegada Global de",
    title_2: "Exploração",
    subtitle: "Selecione uma região para revelar incidentes e infrações reportadas. A abrangência não conhece limites continentais.",
    access_source: "[Acessar Fonte]"
  },
  en: {
    title_1: "Global Footprint of",
    title_2: "Exploitation",
    subtitle: "Select a region to reveal reported incidents and infractions. The scope knows no continental boundaries.",
    access_source: "[Access Source]"
  },
  es: {
    title_1: "Huella Global de",
    title_2: "Explotación",
    subtitle: "Seleccione una región para revelar incidentes e infracciones reportadas. El alcance no conoce límites continentales.",
    access_source: "[Acceder a la Fuente]"
  }
};

export default function MapSection() {
  const { language, t } = useLanguage();
  const currentMarkers = MARKERS[language as keyof typeof MARKERS] || MARKERS.pt;
  
  const [hoveredMarker, setHoveredMarker] = useState<any>(null);

  return (
    <section className="py-24 bg-[#0a0a0a] relative border-y-2 border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            {t('title_1', LABELS)} <span className="text-red-600">{t('title_2', LABELS)}</span>
          </h2>
          <p className="text-zinc-400 font-medium max-w-2xl mx-auto typewriter-font text-sm">
            {t('subtitle', LABELS)}
          </p>
        </div>

        <div className="relative w-full h-[500px] md:h-[600px] bg-black border-2 border-red-900/30 overflow-hidden group">
          <div className="absolute inset-0 pointer-events-none opacity-20" 
               style={{ backgroundImage: 'linear-gradient(#ff000022 1px, transparent 1px), linear-gradient(90deg, #ff000022 1px, transparent 1px)', backgroundSize: '2rem 2rem' }}>
          </div>
          
          <ComposableMap
            projection="geoMercator"
            style={{ width: "100%", height: "100%" }}
            className="outline-none focus:outline-none"
          >
            <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={8} className="outline-none focus:outline-none">
              <Geographies geography={geoUrl} className="outline-none focus:outline-none">
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1a1a1a"
                      stroke="#333333"
                      strokeWidth={0.5}
                      className="outline-none focus:outline-none"
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#2a2a2a", outline: "none" },
                        pressed: { fill: "#1a1a1a", outline: "none" },
                      } as any}
                    />
                  ))
                }
              </Geographies>

              {currentMarkers.map(({ name, coordinates, events }, i) => (
                <Marker 
                  key={i} 
                  coordinates={coordinates as [number, number]}
                  onClick={() => setHoveredMarker({ name, events })}
                  className="outline-none focus:outline-none"
                >
                  <circle r={6} fill="#ff0000" className="cursor-pointer shadow-[0_0_15px_#ff0000]" />
                  <circle r={16} fill="#ff0000" opacity={0.3} className="animate-ping pointer-events-none" />
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>

          {/* Tooltip Card */}
          <AnimatePresence>
            {hoveredMarker && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="absolute top-4 right-4 sm:top-8 sm:right-8 w-[90%] sm:w-96 bg-[#0f0f0f] border-2 border-red-600 p-6 shadow-[0_0_30px_rgba(255,0,0,0.15)] z-50 pointer-events-auto"
              >
                <div className="flex justify-between items-start mb-4 border-b border-red-900/50 pb-2">
                  <h4 className="text-xl font-black text-white uppercase">{hoveredMarker.name}</h4>
                  <button 
                    onClick={() => setHoveredMarker(null)}
                    className="text-zinc-500 hover:text-red-500 transition-colors p-1"
                  >
                    ✕
                  </button>
                </div>
                <ul className="space-y-4 max-h-64 overflow-y-auto custom-scrollbar pr-2">
                  {hoveredMarker.events.map((ev: any, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300 font-medium typewriter-font">
                      <span className="text-red-500 font-black mt-0.5">»</span>
                      <div>
                        {ev.text}
                        <br/>
                        <a href={ev.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-red-500 hover:text-red-400 underline mt-1 inline-block uppercase">
                          {t('access_source', LABELS)}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
