import { AlertTriangle, Droplet, Users, Leaf, Scale, FileText, AlertOctagon, ShieldCheck, HeartPulse, Beaker, CheckCircle } from 'lucide-react';
import React from 'react';

export const TIMELINE_DATA_PT = [
  {
    year: "1973",
    title: "Marketing Questionado",
    description: "A revista The New Internationalist expõe a promoção agressiva de substitutos do leite materno em países de baixa renda.",
    expandedDetails: {
      problem: "A empresa enviava representantes de vendas, frequentemente sem treinamento médico adequado, para promover ativamente o leite em pó para mães empobrecidas e muitas vezes analfabetas no 'Terceiro Mundo'. O foco era convencê-las de que a fórmula era superior ao leite materno.",
      impact: "Mães que recebiam amostras grátis perdiam a capacidade de produzir leite naturalmente. Quando as amostras acabavam, elas ficavam dependentes de um produto que não podiam pagar.",
      consequence: "Gerou o primeiro alerta internacional sobre a imoralidade da prática. A empresa ignorou as críticas iniciais, priorizando a expansão do mercado."
    },
    sources: [{ text: "The New Internationalist", url: "https://www.nestle.com/ask-nestle/health-nutrition/answers/baby-milk-infant-formula-marketing" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-700"
  },
  {
    year: "1974",
    title: "O Relatório 'The Baby Killer'",
    description: "A ONG War on Want publica 'The Baby Killer', contendo acusações pesadas sobre a contribuição da empresa para a desnutrição infantil.",
    expandedDetails: {
      problem: "O relatório detalhava como corporações globais estavam utilizando métodos predatórios de publicidade em países vulneráveis para substituir a amamentação natural pelo uso de fórmulas artificiais pagas.",
      impact: "Chamou a atenção de ativistas e formuladores de políticas na Europa, colocando os danos causados no centro do palco político. O termo 'Baby Killer' (Assassina de Bebês) colou na marca.",
      consequence: "Em vez de mudar de atitude, a empresa escolheu combater o relatório através de processos judiciais pesados e intimidação legal."
    },
    sources: [{ text: "Congresso dos EUA", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "1974–76",
    title: "Julgamento 'Mata Bebês'",
    description: "Ativistas suíços são processados após traduzirem o relatório com o título 'Nestlé Mata Bebês'.",
    expandedDetails: {
      problem: "A corporação tentou silenciar o grupo suíço Third World Action Group através de um processo por difamação, num exemplo clássico de litigância de má-fé (SLAPP) para silenciar críticos.",
      impact: "O tiro saiu pela culatra. O julgamento de dois anos tornou as táticas de marketing da corporação manchetes em jornais de todo o mundo, causando um dano de reputação irreparável.",
      consequence: "A empresa ganhou o processo por um detalhe técnico, recebendo danos simbólicos. Porém, o juiz declarou publicamente que a corporação precisava modificar fundamentalmente seus métodos publicitários."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Scale className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  },
  {
    year: "1970s",
    title: "Uso de 'Milk Nurses'",
    description: "Alegações sobre a contratação de vendedoras vestidas como profissionais de saúde.",
    expandedDetails: {
      problem: "A empresa vestia suas vendedoras com uniformes brancos de enfermagem e as enviava aos hospitais e comunidades pobres. Elas eram chamadas de 'milk nurses' (enfermeiras do leite).",
      impact: "A falsa autoridade médica induzia mães vulneráveis a confiarem cegamente nessas funcionárias, acreditando que a substituição da amamentação era uma recomendação médica oficial.",
      consequence: "A prática foi tão antiética que acabou sendo explicitamente banida pelo Código Internacional de Comercialização de Substitutos do Leite Materno da OMS."
    },
    sources: [{ text: "Congresso dos EUA", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    color: "bg-orange-700"
  },
  {
    year: "1970s",
    title: "Amostras Gratuitas Mortais",
    description: "Distribuição antiética de amostras de fórmula em maternidades para induzir a dependência.",
    expandedDetails: {
      problem: "Hospitais recebiam vastas quantidades de amostras gratuitas, que eram entregues às novas mães. O fornecimento durava o tempo exato para a mãe parar de produzir leite naturalmente.",
      impact: "Uma vez que o leite materno secava, a mãe tornava-se prisioneira do produto. Sem recursos para continuar comprando a fórmula cara, o resultado era trágico.",
      consequence: "Inúmeras crianças foram submetidas à fome ou à morte devido à incapacidade financeira das famílias em sustentar o consumo imposto."
    },
    sources: [{ text: "Congresso dos EUA", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    year: "1970s",
    title: "Falta de Água Limpa",
    description: "Fórmula promovida em regiões que não possuíam água potável para o preparo seguro.",
    expandedDetails: {
      problem: "O preparo da fórmula exige água limpa, fervura e esterilização de mamadeiras. Em muitas regiões alvo da empresa, não havia saneamento básico, eletricidade ou combustíveis suficientes.",
      impact: "Bebês eram alimentados com fórmulas misturadas a águas contaminadas com bactérias, causando surtos massivos de diarreia fatal e infecções intestinais.",
      consequence: "A Unicef estimou que milhões de bebês que morreram em países pobres não teriam morrido se tivessem sido amamentados no peito."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-amber-700"
  },
  {
    year: "1970s",
    title: "Diluição Excessiva",
    description: "O alto custo forçava famílias pobres a diluírem a fórmula excessivamente para durar mais.",
    expandedDetails: {
      problem: "O custo da fórmula artificial muitas vezes consumia uma parcela gigantesca ou até a totalidade do orçamento de famílias empobrecidas. Para fazer o produto durar, pais diluíam o pó além das medidas seguras.",
      impact: "A superdiluição eliminava quase todo o valor nutricional, levando diretamente à desnutrição aguda, crescimento atrofiado e altíssimos índices de mortalidade infantil por fome.",
      consequence: "Os danos nutricionais permanentes devastaram gerações em países do hemisfério sul, enquanto os lucros corporativos subiam."
    },
    sources: [{ text: "Documentação Histórica", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-orange-800"
  },
  {
    year: "1977",
    title: "O Primeiro Grande Boicote",
    description: "O marketing de fórmula vira alvo de uma massiva campanha internacional de boicote.",
    expandedDetails: {
      problem: "Ativistas, frustrados com a recusa arrogante da corporação em mudar suas práticas após o julgamento suíço, organizaram uma greve global de consumidores.",
      impact: "O boicote se espalhou pelos Estados Unidos, Canadá, Nova Zelândia e Europa. O dano de imagem foi colossal, rotulando a empresa como símbolo da ganância corporativa letal.",
      consequence: "A pressão forçou a empresa a sentar-se com a Organização Mundial da Saúde, após anos de negação sistemática do problema."
    },
    sources: [
      { text: "História do Boicote", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-[#700000]"
  },
  {
    year: "1981",
    title: "Código da OMS",
    description: "A Assembleia Mundial da Saúde aprova regras contra o marketing abusivo de fórmula.",
    expandedDetails: {
      problem: "Frente à matança de bebês e ao desastre de Relações Públicas, a OMS precisou intervir globalmente para regular a indústria de fórmulas infantis pela primeira vez na história.",
      impact: "Estabeleceu-se o Código Internacional, proibindo 'milk nurses', amostras grátis em hospitais e publicidade idealizada ('fotos de bebês gorduchos') para o público leigo.",
      consequence: "A indústria lutou ativamente contra o código. Curiosamente, sob forte lobby corporativo, os EUA foram o único país a votar contra o código na assembleia."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-zinc-800"
  },
  {
    year: "1988",
    title: "Retorno do Boicote",
    description: "Um novo boicote contra a marca é lançado ao ser revelado que as práticas não pararam.",
    expandedDetails: {
      problem: "A empresa havia concordado com o Código da OMS em 1984, pausando o boicote. Porém, investigadores constataram que continuavam burlando regras, especialmente doando fórmulas para maternidades na surdina.",
      impact: "A quebra de confiança mostrou que os compromissos corporativos eram meros artifícios de Relações Públicas para encerrar boicotes, sem mudança estrutural.",
      consequence: "O novo boicote perdura até hoje em várias partes do mundo, sendo o boicote de consumidores contínuo mais longo da história corporativa moderna."
    },
    sources: [{ text: "Relatório de Violações", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-[#4a0000]"
  },
  {
    year: "2000",
    title: "Água: Necessidade, Não Direito",
    description: "No 2º Fórum Mundial da Água, o CEO sugere que a água deve ter valor de mercado em vez de ser um direito público.",
    expandedDetails: {
      problem: "Peter Brabeck-Letmathe, então CEO da corporação, foi gravado argumentando que declarar a água como um direito humano fundamental era uma postura 'extrema', defendendo que ela deveria ser tratada como um bem de consumo precificado como qualquer outro alimento.",
      impact: "Chocou o mundo inteiro e revelou a filosofia fundamental de privatização predatória que guiaria a estratégia agressiva de extração de aquíferos da empresa em países de terceiro mundo e regiões afetadas por secas severas nas décadas seguintes.",
      consequence: "A declaração gerou um dos maiores desastres de relações públicas da história da marca. A empresa gastou milhões tentando limpar a imagem do executivo e refazer seu discurso, mas a fala consagrou a companhia como símbolo da mercantilização da vida."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/business/2019/oct/29/nestle-water-market-bottled" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-800"
  },
  {
    year: "2001",
    title: "Escravidão no Cacau",
    description: "Descoberta de trabalho escravo infantil em massa nas fazendas fornecedoras da Costa do Marfim.",
    expandedDetails: {
      problem: "Jornalistas investigativos descobriram o uso sistêmico de escravidão infantil e tráfico de crianças de Mali para as fazendas de cacau que suprem as grandes marcas de chocolate suíças.",
      impact: "Milhões de crianças expostas a trabalho extenuante de carga, uso de facões e pesticidas mortais, sem nunca terem experimentado o chocolate que colhem.",
      consequence: "A empresa assinou o Protocolo Harkin-Engel para erradicar o trabalho infantil até 2005. Perdeu o prazo de 2005, 2008, 2010... e até hoje processos correm na Suprema Corte dos EUA."
    },
    sources: [
      { text: "US Supreme Court", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-amber-900"
  },
  {
    year: "2002",
    title: "Dívida Etíope na Fome",
    description: "A empresa processa a Etiópia por US$ 6 milhões em meio a uma crise devastadora de fome no país.",
    expandedDetails: {
      problem: "A Etiópia enfrentava uma das piores e mais mortais crises de fome de sua história. Apesar disso, a empresa insistiu em processar o governo etíope para arrancar o pagamento imediato de US$ 6 milhões devido à antiga nacionalização de uma de suas propriedades nos anos 1970.",
      impact: "A exigência brutal desviaria fundos vitais de um país paupérrimo que lutava desesperadamente para alimentar milhões de cidadãos morrendo de inanição.",
      consequence: "O ultraje global e as campanhas massivas da Oxfam forçaram a companhia a recuar das exigências extremas e aceitar um acordo mínimo, revelando a total falta de compaixão corporativa."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-red-950"
  },
  {
    year: "2008",
    title: "Escândalo do Leite Chinês",
    description: "Leite em pó adulterado com melamina causa intoxicação massiva e mortes de bebês.",
    expandedDetails: {
      problem: "Fornecedores na China adulteraram leite e fórmulas infantis com melamina (um componente industrial e plástico) para burlar testes químicos e simular um valor artificialmente alto de proteína. A empresa esteve entre as produtoras cujos produtos também testaram positivo.",
      impact: "Cerca de 300.000 bebês chineses adoeceram gravemente. Mais de 50.000 foram hospitalizados com pedras nos rins e danos renais irreversíveis, e várias crianças morreram devido às complicações.",
      consequence: "Após inicialmente minimizar a gravidade do seu envolvimento, a corporação foi forçada a fazer recolhimentos massivos de leite e derivados em Taiwan, Hong Kong e China, quebrando severamente a confiança pública em produtos ocidentais."
    },
    sources: [
      { text: "Wikipedia: Escândalo do Leite", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_leite_chin%C3%AAs_em_2008" }
    ],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "2010",
    title: "Roubo de Aquíferos",
    description: "Documentários expõem a extração predatória de água de reservas enfrentando secas severas.",
    expandedDetails: {
      problem: "A empresa extrai centenas de milhões de litros de aquíferos ao redor do mundo, pagando taxas absurdamente pequenas, enquanto residentes e ecossistemas locais sofrem com a seca.",
      impact: "Na Califórnia, continuou engarrafando implacavelmente através da pior seca histórica do estado usando uma licença expirada há mais de 30 anos.",
      consequence: "Recebeu ordens de cessar operações em diversas partes dos EUA e enfrentou fúria civil em locais como Michigan e São Lourenço (Brasil), mas usou seu poder jurídico para arrastar ações."
    },
    sources: [
      { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-900"
  },
  {
    year: "2015",
    title: "Escravidão na Pesca Tailandesa",
    description: "Mão de obra escrava identificada na cadeia de fornecimento de frutos do mar da corporação.",
    expandedDetails: {
      problem: "Investigações revelaram que o peixe usado para produzir as rações milionárias de pets da empresa (como a Purina) era pescado em navios tailandeses operados por migrantes traficados, comprados e vendidos como gado.",
      impact: "Homens e meninos eram frequentemente acorrentados, espancados severamente e forçados a trabalhar jornadas brutais de 20 horas diárias em alto mar, por vezes passando meses sem pisar em terra firme ou receber qualquer pagamento.",
      consequence: "Pressionada internacionalmente, a corporação admitiu a presença endêmica de trabalho escravo na sua cadeia de suprimentos marítimos, tornando-se alvo de processos coletivos nos tribunais americanos por enganar consumidores."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/global-development/2015/nov/24/nestle-admits-forced-labour-in-seafood-supply-chain" }
    ],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-zinc-900"
  },
  {
    year: "2015",
    title: "Conflito Russo-Ucraniano",
    description: "Após a anexação da Crimeia, operações continuam na Rússia gerando fortes boicotes.",
    expandedDetails: {
      problem: "Durante as crescentes tensões e a anexação da Crimeia pela Rússia, ativistas ucranianos notaram que grande parte dos produtos embalados enviados ao seu país provinham de fábricas em território russo, mantendo as vastas operações comerciais ativas.",
      impact: "Essa relação de mercado significou que dinheiro gasto em supermercados na Ucrânia acabava convertido em imposto e lucro fluindo diretamente para o Estado russo, financiando indiretamente as invasões.",
      consequence: "A corporação tornou-se um dos principais alvos da campanha civil 'Não compre produtos russos'. Essa postura de ignorar guerras em prol do lucro se provou uma prévia da sua permanência maciça e lucrativa no mercado russo após a invasão de 2022."
    },
    sources: [
      { text: "Wikipedia: Boicotes Ucrânia", url: "https://en.wikipedia.org/wiki/Do_not_buy_Russian_goods!" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-amber-800"
  },
  {
    year: "2017",
    title: "O Rastro do Desmatamento",
    description: "Investigações expõem o desmatamento ilegal em massa para suprir as cadeias de cacau e óleo de palma.",
    expandedDetails: {
      problem: "A organização ambientalista Mighty Earth publicou uma investigação chocante mostrando como a corporação continuava financiando a destruição de vastas áreas de florestas tropicais teoricamente protegidas na África Ocidental e na Indonésia.",
      impact: "Santuários e parques nacionais na Costa do Marfim foram completamente varridos do mapa, transformando habitats vitais em monoculturas. Populações inteiras de chimpanzés e orangotangos foram dizimadas ou empurradas à beira da extinção.",
      consequence: "A empresa, como de costume, afirmou seu 'compromisso de melhorias na rastreabilidade', o mesmo roteiro repetido e falhado inúmeras vezes nas últimas décadas. O desmatamento ilegal seguiu alimentando o lucro."
    },
    sources: [
      { text: "The Guardian (Mighty Earth Report)", url: "https://www.theguardian.com/environment/2017/sep/13/chocolate-industry-drives-rainforest-disaster-in-ivory-coast" }
    ],
    icon: <Leaf className="w-6 h-6 text-white" />,
    color: "bg-green-950"
  },
  {
    year: "2021",
    title: "O Fator Não-Saudável",
    description: "O maior vazamento interno de documentos do século revela a verdadeira natureza do portfólio corporativo.",
    expandedDetails: {
      problem: "Documentos internos repassados ao Financial Times mostraram que mais de 60% dos alimentos e bebidas da empresa não podem ser classificados como saudáveis e nunca serão, mesmo que reformulados.",
      impact: "Destruiu a longa narrativa de marketing de ser uma empresa focada em 'nutrição, saúde e bem-estar', revelando a promoção deliberada de calorias vazias, açúcar e sódio.",
      consequence: "O choque forçou a empresa a atualizar algumas estratégias nutricionais, mas o cerne do faturamento continua intocado."
    },
    sources: [
      { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  }
];