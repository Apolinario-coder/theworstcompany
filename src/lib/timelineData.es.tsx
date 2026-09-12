import { AlertTriangle, Droplet, Users, Leaf, Scale, FileText, AlertOctagon, ShieldCheck, HeartPulse, Beaker, CheckCircle } from 'lucide-react';
import React from 'react';

export const TIMELINE_DATA_ES = [
  {
    year: "1973",
    title: "Marketing Cuestionado",
    description: "La revista The New Internationalist expone la promoción agresiva de sucedáneos de la leche materna en países de bajos ingresos.",
    expandedDetails: {
      problem: "La empresa enviaba representantes de ventas, a menudo sin capacitación médica adecuada, para promover activamente la leche en polvo entre madres empobrecidas y a menudo analfabetas en el 'Tercer Mundo'. El objetivo era convencerlas de que la fórmula era superior a la leche materna.",
      impact: "Las madres que recibían muestras gratis perdían su capacidad de producir leche de forma natural. Cuando se acababan las muestras, se volvían dependientes de un producto que no podían pagar.",
      consequence: "Generó la primera alerta internacional sobre la inmoralidad de la práctica. La empresa ignoró las críticas iniciales, priorizando la expansión del mercado."
    },
    sources: [{ text: "The New Internationalist", url: "https://www.nestle.com/ask-nestle/health-nutrition/answers/baby-milk-infant-formula-marketing" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-700"
  },
  {
    year: "1974",
    title: "El Informe 'The Baby Killer'",
    description: "La ONG War on Want publica 'The Baby Killer', con graves acusaciones sobre la contribución de la empresa a la desnutrición infantil.",
    expandedDetails: {
      problem: "El informe detallaba cómo corporaciones globales usaban métodos publicitarios depredadores en países vulnerables para reemplazar la lactancia natural con el uso de fórmulas artificiales de pago.",
      impact: "Llamó la atención de activistas y formuladores de políticas en Europa, poniendo los daños causados en el centro del escenario político. El término 'Baby Killer' se adhirió a la marca.",
      consequence: "En lugar de cambiar de actitud, la empresa optó por combatir el informe mediante fuertes demandas e intimidación legal."
    },
    sources: [{ text: "Congreso de EE. UU.", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "1974–76",
    title: "Juicio 'Mata Bebés'",
    description: "Activistas suizos son demandados tras traducir el informe con el título 'Nestlé Mata Bebés'.",
    expandedDetails: {
      problem: "La corporación intentó silenciar al grupo suizo Third World Action Group a través de una demanda por difamación, en un ejemplo clásico de litigio de mala fe (SLAPP) para acallar a los críticos.",
      impact: "El tiro salió por la culata. El juicio de dos años convirtió las tácticas de marketing de la corporación en titulares de todo el mundo, causando un daño de reputación irreparable.",
      consequence: "La empresa ganó el juicio por un tecnicismo, recibiendo daños simbólicos. Sin embargo, el juez declaró públicamente que la corporación necesitaba modificar fundamentalmente sus métodos publicitarios."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Scale className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  },
  {
    year: "1970s",
    title: "Uso de 'Milk Nurses'",
    description: "Acusaciones sobre la contratación de vendedoras vestidas como profesionales de la salud.",
    expandedDetails: {
      problem: "La empresa vestía a sus vendedoras con uniformes blancos de enfermería y las enviaba a hospitales y comunidades pobres. Se las llamaba 'milk nurses'.",
      impact: "La falsa autoridad médica inducía a madres vulnerables a confiar ciegamente en estas empleadas, creyendo que reemplazar la lactancia era una recomendación médica oficial.",
      consequence: "La práctica era tan poco ética que terminó siendo prohibida explícitamente por el Código Internacional de Comercialización de Sucedáneos de la Leche Materna de la OMS."
    },
    sources: [{ text: "Congreso de EE. UU.", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    color: "bg-orange-700"
  },
  {
    year: "1970s",
    title: "Muestras Gratuitas Mortales",
    description: "Distribución poco ética de muestras de fórmula en maternidades para inducir dependencia.",
    expandedDetails: {
      problem: "Los hospitales recibían grandes cantidades de muestras gratuitas, que se entregaban a las nuevas madres. El suministro duraba exactamente el tiempo que tardaba la madre en dejar de producir leche de forma natural.",
      impact: "Una vez que la leche materna se secaba, la madre se convertía en prisionera del producto. Sin recursos para seguir comprando la costosa fórmula, el resultado era trágico.",
      consequence: "Innumerables niños fueron sometidos al hambre o la muerte debido a la incapacidad financiera de las familias para sostener el consumo impuesto."
    },
    sources: [{ text: "Congreso de EE. UU.", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    year: "1970s",
    title: "Falta de Agua Limpia",
    description: "Fórmula promovida en regiones que carecían de agua potable para una preparación segura.",
    expandedDetails: {
      problem: "La preparación de la fórmula requiere agua limpia, ebullición y esterilización de los biberones. En muchas regiones objetivo de la empresa, no había saneamiento básico, electricidad ni combustibles suficientes.",
      impact: "Los bebés eran alimentados con fórmulas mezcladas con agua contaminada por bacterias, causando brotes masivos de diarrea fatal e infecciones intestinales.",
      consequence: "Unicef estimó que millones de bebés que murieron en países pobres no habrían muerto si hubieran sido amamantados."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-amber-700"
  },
  {
    year: "1970s",
    title: "Dilución Excesiva",
    description: "El alto costo obligaba a familias pobres a diluir la fórmula en exceso para que rindiera más.",
    expandedDetails: {
      problem: "El costo de la fórmula artificial a menudo consumía una gran parte o incluso la totalidad del presupuesto de familias empobrecidas. Para hacer durar el producto, los padres diluían el polvo más allá de las medidas seguras.",
      impact: "La sobredilución eliminaba casi todo el valor nutricional, conduciendo directamente a la desnutrición aguda, retraso del crecimiento y altísimas tasas de mortalidad infantil por inanición.",
      consequence: "El daño nutricional permanente devastó generaciones en países del sur global, mientras las ganancias corporativas se disparaban."
    },
    sources: [{ text: "Documentación Histórica", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-orange-800"
  },
  {
    year: "1977",
    title: "El Primer Gran Boicot",
    description: "El marketing de fórmulas se convierte en el blanco de una campaña de boicot masiva internacional.",
    expandedDetails: {
      problem: "Los activistas, frustrados con la negativa arrogante de la corporación a cambiar sus prácticas tras el juicio suizo, organizaron una huelga de consumidores global.",
      impact: "El boicot se extendió por Estados Unidos, Canadá, Nueva Zelanda y Europa. El daño a la marca fue colosal, etiquetando a la empresa como símbolo de la letal codicia corporativa.",
      consequence: "La presión obligó a la empresa a sentarse con la Organización Mundial de la Salud, tras años de negar sistemáticamente el problema."
    },
    sources: [
      { text: "Historia del Boicot", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-[#700000]"
  },
  {
    year: "1981",
    title: "Código de la OMS",
    description: "La Asamblea Mundial de la Salud aprueba reglas contra el marketing abusivo de fórmulas.",
    expandedDetails: {
      problem: "Ante la matanza de bebés y el desastre de Relaciones Públicas, la OMS tuvo que intervenir globalmente para regular la industria de fórmulas infantiles por primera vez en la historia.",
      impact: "Se estableció el Código Internacional, prohibiendo las 'milk nurses', muestras gratis en hospitales y publicidad idealizada ('fotos de bebés regordetes') al público laico.",
      consequence: "La industria luchó activamente contra el código. Curiosamente, bajo un fuerte cabildeo corporativo, EE. UU. fue el único país que votó contra el código en la asamblea."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-zinc-800"
  },
  {
    year: "1988",
    title: "Retorno del Boicot",
    description: "Se lanza un nuevo boicot contra la marca al revelarse que las prácticas no se detuvieron.",
    expandedDetails: {
      problem: "La empresa había aceptado el Código de la OMS en 1984, pausando el boicot. Sin embargo, investigadores descubrieron que seguían eludiendo reglas, especialmente donando fórmulas silenciosamente a maternidades.",
      impact: "La ruptura de la confianza demostró que los compromisos corporativos eran meros artificios de Relaciones Públicas para poner fin a los boicots, sin un cambio estructural.",
      consequence: "El nuevo boicot perdura hasta el día de hoy en varias partes del mundo, siendo el boicot de consumidores continuo más largo en la historia corporativa moderna."
    },
    sources: [{ text: "Informe de Violaciones", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-[#4a0000]"
  },
  {
    year: "2000",
    title: "El Agua: Necesidad, No Derecho",
    description: "En el 2º Foro Mundial del Agua, el CEO sugiere que el agua debe tener valor de mercado en lugar de ser un derecho público.",
    expandedDetails: {
      problem: "Peter Brabeck-Letmathe, entonces CEO de la corporación, fue grabado argumentando que declarar el agua como un derecho humano fundamental era una postura 'extrema', defendiendo que debía ser tratada como un bien de consumo con precio como cualquier otro alimento.",
      impact: "Conmocionó al mundo entero y reveló la filosofía fundamental de privatización depredadora que guiaría la agresiva estrategia de extracción de acuíferos de la empresa en países del tercer mundo y regiones afectadas por sequías en las siguientes décadas.",
      consequence: "La declaración desató uno de los mayores desastres de relaciones públicas en la historia de la marca. La empresa gastó millones intentando limpiar la imagen del ejecutivo y replantear su discurso, pero la cita cimentó a la empresa como símbolo de la mercantilización de la vida."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/business/2019/oct/29/nestle-water-market-bottled" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-800"
  },
  {
    year: "2001",
    title: "Esclavitud en el Cacao",
    description: "Descubrimiento de trabajo esclavo infantil masivo en las granjas proveedoras de Costa de Marfil.",
    expandedDetails: {
      problem: "Periodistas de investigación descubrieron el uso sistémico de esclavitud infantil y tráfico de niños desde Malí hasta las granjas de cacao que abastecen a las principales marcas de chocolate suizas.",
      impact: "Millones de niños expuestos a un trabajo agotador cargando peso, uso de machetes y pesticidas mortales, sin haber probado nunca el chocolate que cosechan.",
      consequence: "La empresa firmó el Protocolo Harkin-Engel para erradicar el trabajo infantil en 2005. Incumplió los plazos de 2005, 2008, 2010... y hasta el día de hoy, las demandas siguen pendientes en la Corte Suprema de EE. UU."
    },
    sources: [
      { text: "Corte Suprema de EE. UU.", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-amber-900"
  },
  {
    year: "2002",
    title: "Deuda de Hambruna Etíope",
    description: "La empresa demanda a Etiopía por US$ 6 millones en medio de una devastadora crisis de hambruna en el país.",
    expandedDetails: {
      problem: "Etiopía enfrentaba una de las peores y más mortales hambrunas de su historia. A pesar de esto, la empresa insistió en demandar al gobierno etíope para exigir el pago inmediato de US$ 6 millones debido a la antigua nacionalización de una de sus propiedades en la década de 1970.",
      impact: "La brutal exigencia desviaría fondos vitales de un país indigente que luchaba desesperadamente por alimentar a millones de ciudadanos hambrientos.",
      consequence: "La indignación mundial y las campañas masivas de Oxfam obligaron a la compañía a dar marcha atrás en sus demandas extremas y aceptar un acuerdo mínimo, revelando una total falta de compasión corporativa."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-red-950"
  },
  {
    year: "2008",
    title: "Escándalo de la Leche China",
    description: "La leche en polvo adulterada con melamina causa intoxicación masiva y muertes de bebés.",
    expandedDetails: {
      problem: "Proveedores en China adulteraron leche y fórmulas infantiles con melamina (un componente industrial y plástico) para eludir las pruebas químicas y simular un valor de proteínas artificialmente alto. La empresa estaba entre las productoras cuyos productos también dieron positivo.",
      impact: "Cerca de 300.000 bebés chinos enfermaron gravemente. Más de 50.000 fueron hospitalizados con cálculos renales y daño renal irreversible, y varios niños murieron por complicaciones.",
      consequence: "Tras minimizar inicialmente la gravedad de su implicación, la corporación se vio obligada a realizar retiradas masivas de leche y productos lácteos en Taiwán, Hong Kong y China, rompiendo gravemente la confianza pública en los productos occidentales."
    },
    sources: [
      { text: "Wikipedia: Escándalo de la Leche", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_leite_chin%C3%AAs_em_2008" }
    ],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "2010",
    title: "Robo de Acuíferos",
    description: "Documentales exponen la extracción depredadora de agua de reservas que enfrentan sequías severas.",
    expandedDetails: {
      problem: "La empresa extrae cientos de millones de litros de acuíferos de todo el mundo, pagando tarifas absurdamente bajas, mientras que los residentes y los ecosistemas locales sufren la sequía.",
      impact: "En California, continuó embotellando implacablemente a través de la peor sequía histórica del estado utilizando un permiso que había expirado hacía más de 30 años.",
      consequence: "Recibió órdenes de cesar operaciones en varias partes de EE. UU. y se enfrentó a la furia civil en lugares como Michigan y São Lourenço (Brasil), pero utilizó su poder legal para alargar las demandas."
    },
    sources: [
      { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-900"
  },
  {
    year: "2015",
    title: "Esclavitud Pesquera Tailandesa",
    description: "Trabajo esclavo identificado en la cadena de suministro de mariscos de la corporación.",
    expandedDetails: {
      problem: "Las investigaciones revelaron que el pescado utilizado para producir la comida para mascotas multimillonaria de la empresa (como Purina) se capturaba en barcos tailandeses operados por migrantes traficados, comprados y vendidos como ganado.",
      impact: "Los hombres y niños a menudo eran encadenados, golpeados severamente y obligados a trabajar en turnos brutales de 20 horas en el mar, a veces pasando meses sin pisar tierra ni recibir ningún pago.",
      consequence: "Bajo presión internacional, la corporación admitió la presencia endémica de trabajo esclavo en su cadena de suministro marítima, convirtiéndose en el blanco de demandas colectivas en tribunales estadounidenses por engañar a los consumidores."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/global-development/2015/nov/24/nestle-admits-forced-labour-in-seafood-supply-chain" }
    ],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-zinc-900"
  },
  {
    year: "2015",
    title: "Conflicto Ruso-Ucraniano",
    description: "Tras la anexión de Crimea, las operaciones continúan en Rusia desatando fuertes boicots.",
    expandedDetails: {
      problem: "Durante la escalada de tensiones y la anexión de Crimea por parte de Rusia, activistas ucranianos notaron que gran parte de los productos envasados enviados a su país provenían de fábricas en territorio ruso, manteniendo activas las vastas operaciones comerciales.",
      impact: "Esta relación de mercado significaba que el dinero gastado en supermercados en Ucrania terminaba convertido en impuestos y ganancias fluyendo directamente al Estado ruso, financiando indirectamente las invasiones.",
      consequence: "La corporación se convirtió en uno de los principales objetivos de la campaña civil 'No compre productos rusos'. Esta postura de ignorar guerras por lucro demostró ser un adelanto de su masiva y lucrativa persistencia en el mercado ruso tras la invasión de 2022."
    },
    sources: [
      { text: "Wikipedia: Boicots Ucrania", url: "https://en.wikipedia.org/wiki/Do_not_buy_Russian_goods!" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-amber-800"
  },
  {
    year: "2017",
    title: "El Rastro de la Deforestación",
    description: "Investigaciones exponen una masiva deforestación ilegal para suministrar cadenas de cacao y aceite de palma.",
    expandedDetails: {
      problem: "La organización ambientalista Mighty Earth publicó una impactante investigación que muestra cómo la corporación continuó financiando la destrucción de vastas áreas de selvas tropicales teóricamente protegidas en África Occidental e Indonesia.",
      impact: "Los santuarios y parques nacionales de Costa de Marfil fueron borrados completamente del mapa, convirtiendo hábitats vitales en monocultivos. Poblaciones enteras de chimpancés y orangutanes fueron diezmadas o empujadas al borde de la extinción.",
      consequence: "La empresa, como de costumbre, declaró su 'compromiso con las mejoras en la trazabilidad', el mismo guion repetido y fracasado innumerables veces en las últimas décadas. La deforestación ilegal siguió impulsando las ganancias."
    },
    sources: [
      { text: "The Guardian (Mighty Earth Report)", url: "https://www.theguardian.com/environment/2017/sep/13/chocolate-industry-drives-rainforest-disaster-in-ivory-coast" }
    ],
    icon: <Leaf className="w-6 h-6 text-white" />,
    color: "bg-green-950"
  },
  {
    year: "2021",
    title: "El Factor No Saludable",
    description: "La mayor filtración de documentos internos del siglo revela la verdadera naturaleza del portafolio corporativo.",
    expandedDetails: {
      problem: "Documentos internos entregados al Financial Times mostraron que más del 60% de los alimentos y bebidas de la empresa no se pueden clasificar como saludables y nunca lo serán, incluso si se reformulan.",
      impact: "Destruyó la larga narrativa de marketing de ser una empresa enfocada en 'nutrición, salud y bienestar', revelando la promoción deliberada de calorías vacías, azúcar y sodio.",
      consequence: "El impacto obligó a la empresa a actualizar algunas estrategias nutricionales, pero el núcleo de sus ingresos permanece intacto."
    },
    sources: [
      { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  }
];
