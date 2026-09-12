import { AlertTriangle, Droplet, Users, Leaf, Scale, FileText, AlertOctagon, ShieldCheck, HeartPulse, Beaker, CheckCircle } from 'lucide-react';
import React from 'react';

export const TIMELINE_DATA_EN = [
  {
    year: "1973",
    title: "Marketing Questioned",
    description: "The New Internationalist magazine exposes the aggressive promotion of breast milk substitutes in low-income countries.",
    expandedDetails: {
      problem: "The company sent sales representatives, often without proper medical training, to actively promote milk powder to impoverished and often illiterate mothers in the 'Third World'. The focus was to convince them that the formula was superior to breast milk.",
      impact: "Mothers who received free samples lost their ability to produce milk naturally. When the samples ran out, they became dependent on a product they couldn't afford.",
      consequence: "It sparked the first international alert about the immorality of the practice. The company ignored initial criticism, prioritizing market expansion."
    },
    sources: [{ text: "The New Internationalist", url: "https://www.nestle.com/ask-nestle/health-nutrition/answers/baby-milk-infant-formula-marketing" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-700"
  },
  {
    year: "1974",
    title: "The 'Baby Killer' Report",
    description: "The NGO War on Want publishes 'The Baby Killer', containing heavy accusations about the company's contribution to child malnutrition.",
    expandedDetails: {
      problem: "The report detailed how global corporations were using predatory advertising methods in vulnerable countries to replace natural breastfeeding with the use of paid artificial formulas.",
      impact: "It drew the attention of activists and policymakers in Europe, putting the damage caused at the center of the political stage. The term 'Baby Killer' stuck to the brand.",
      consequence: "Instead of changing its attitude, the company chose to fight the report through heavy lawsuits and legal intimidation."
    },
    sources: [{ text: "US Congress", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "1974–76",
    title: "'Baby Killer' Trial",
    description: "Swiss activists are sued after translating the report with the title 'Nestlé Kills Babies'.",
    expandedDetails: {
      problem: "The corporation tried to silence the Swiss group Third World Action Group through a defamation lawsuit, in a classic example of bad faith litigation (SLAPP) to silence critics.",
      impact: "The shot backfired. The two-year trial made the corporation's marketing tactics headline news around the world, causing irreparable reputational damage.",
      consequence: "The company won the lawsuit on a technicality, receiving symbolic damages. However, the judge publicly stated that the corporation needed to fundamentally modify its advertising methods."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Scale className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  },
  {
    year: "1970s",
    title: "Use of 'Milk Nurses'",
    description: "Allegations about the hiring of saleswomen dressed as healthcare professionals.",
    expandedDetails: {
      problem: "The company dressed its saleswomen in white nursing uniforms and sent them to poor hospitals and communities. They were called 'milk nurses'.",
      impact: "The false medical authority induced vulnerable mothers to blindly trust these employees, believing that replacing breastfeeding was an official medical recommendation.",
      consequence: "The practice was so unethical that it ended up being explicitly banned by the WHO International Code of Marketing of Breast-milk Substitutes."
    },
    sources: [{ text: "US Congress", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <HeartPulse className="w-6 h-6 text-white" />,
    color: "bg-orange-700"
  },
  {
    year: "1970s",
    title: "Deadly Free Samples",
    description: "Unethical distribution of formula samples in maternity wards to induce dependence.",
    expandedDetails: {
      problem: "Hospitals received vast quantities of free samples, which were given to new mothers. The supply lasted precisely the time it took for the mother to stop producing milk naturally.",
      impact: "Once the breast milk dried up, the mother became a prisoner to the product. Without resources to continue buying the expensive formula, the result was tragic.",
      consequence: "Countless children were subjected to starvation or death due to the families' financial inability to sustain the imposed consumption."
    },
    sources: [{ text: "US Congress", url: "https://www.congress.gov/98/crecb/1984/01/30/GPO-CRECB-1984-pt1-6-3.pdf" }],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-red-600"
  },
  {
    year: "1970s",
    title: "Lack of Clean Water",
    description: "Formula promoted in regions that lacked clean water for safe preparation.",
    expandedDetails: {
      problem: "Preparing the formula requires clean water, boiling, and sterilization of bottles. In many target regions of the company, there was no basic sanitation, electricity, or sufficient fuels.",
      impact: "Babies were fed formulas mixed with bacteria-contaminated water, causing massive outbreaks of fatal diarrhea and intestinal infections.",
      consequence: "UNICEF estimated that millions of babies who died in poor countries would not have died had they been breastfed."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-amber-700"
  },
  {
    year: "1970s",
    title: "Excessive Dilution",
    description: "The high cost forced poor families to over-dilute the formula to make it last longer.",
    expandedDetails: {
      problem: "The cost of artificial formula often consumed a huge portion or even the entirety of impoverished families' budgets. To make the product last, parents diluted the powder beyond safe measures.",
      impact: "Over-dilution eliminated almost all nutritional value, leading directly to acute malnutrition, stunted growth, and extremely high infant mortality rates from starvation.",
      consequence: "The permanent nutritional damage devastated generations in Global South countries, while corporate profits soared."
    },
    sources: [{ text: "Historical Documentation", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-orange-800"
  },
  {
    year: "1977",
    title: "The First Great Boycott",
    description: "Formula marketing becomes the target of a massive international boycott campaign.",
    expandedDetails: {
      problem: "Activists, frustrated with the corporation's arrogant refusal to change its practices after the Swiss trial, organized a global consumer strike.",
      impact: "The boycott spread across the United States, Canada, New Zealand, and Europe. The brand damage was colossal, labeling the company as a symbol of lethal corporate greed.",
      consequence: "The pressure forced the company to sit down with the World Health Organization, after years of systematic denial of the problem."
    },
    sources: [
      { text: "Boycott History", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-[#700000]"
  },
  {
    year: "1981",
    title: "WHO Code",
    description: "The World Health Assembly approves rules against abusive formula marketing.",
    expandedDetails: {
      problem: "Faced with the killing of babies and the PR disaster, the WHO had to intervene globally to regulate the infant formula industry for the first time in history.",
      impact: "The International Code was established, banning 'milk nurses', free samples in hospitals, and idealized advertising ('pictures of chubby babies') to the lay public.",
      consequence: "The industry actively fought against the code. Interestingly, under heavy corporate lobbying, the US was the only country to vote against the code in the assembly."
    },
    sources: [{ text: "PubMed Central", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3371222/" }],
    icon: <FileText className="w-6 h-6 text-white" />,
    color: "bg-zinc-800"
  },
  {
    year: "1988",
    title: "Return of the Boycott",
    description: "A new boycott against the brand is launched upon revelation that the practices had not stopped.",
    expandedDetails: {
      problem: "The company had agreed to the WHO Code in 1984, pausing the boycott. However, investigators found they continued skirting rules, especially quietly donating formulas to maternity wards.",
      impact: "The breach of trust showed that corporate commitments were mere PR artifices to end boycotts, without structural change.",
      consequence: "The new boycott endures to this day in various parts of the world, making it the longest continuous consumer boycott in modern corporate history."
    },
    sources: [{ text: "Violations Report", url: "https://www.nestle.com/ask-nestle/our-company/answers/nestle-boycott" }],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-[#4a0000]"
  },
  {
    year: "2000",
    title: "Water: Need, Not a Right",
    description: "At the 2nd World Water Forum, the CEO suggests water should have a market value rather than being a public right.",
    expandedDetails: {
      problem: "Peter Brabeck-Letmathe, then CEO of the corporation, was recorded arguing that declaring water a fundamental human right was an 'extreme' stance, defending it should be treated as a priced consumer good like any other food.",
      impact: "It shocked the entire world and revealed the fundamental philosophy of predatory privatization that would guide the company's aggressive aquifer extraction strategy in third-world countries and drought-stricken regions in the following decades.",
      consequence: "The statement sparked one of the greatest PR disasters in the brand's history. The company spent millions trying to clean up the executive's image and reframe his speech, but the quote cemented the company as a symbol of the commodification of life."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/business/2019/oct/29/nestle-water-market-bottled" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-800"
  },
  {
    year: "2001",
    title: "Slavery in Cocoa",
    description: "Discovery of massive child slave labor in supplier farms in Ivory Coast.",
    expandedDetails: {
      problem: "Investigative journalists uncovered the systemic use of child slavery and trafficking of children from Mali to the cocoa farms that supply major Swiss chocolate brands.",
      impact: "Millions of children exposed to grueling load-bearing labor, machete use, and deadly pesticides, without ever having tasted the chocolate they harvest.",
      consequence: "The company signed the Harkin-Engel Protocol to eradicate child labor by 2005. It missed the 2005, 2008, 2010 deadlines... and to this day, lawsuits are pending in the US Supreme Court."
    },
    sources: [
      { text: "US Supreme Court", url: "https://www.reuters.com/business/us-supreme-court-rules-nestle-cargill-over-slavery-lawsuit-2021-06-17/" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-amber-900"
  },
  {
    year: "2002",
    title: "Ethiopian Famine Debt",
    description: "The company sues Ethiopia for US$ 6 million amid a devastating famine crisis in the country.",
    expandedDetails: {
      problem: "Ethiopia was facing one of the worst and deadliest famines in its history. Despite this, the company insisted on suing the Ethiopian government to squeeze an immediate payment of US$ 6 million due to the old nationalization of one of its properties in the 1970s.",
      impact: "The brutal demand would divert vital funds from a destitute country desperately struggling to feed millions of starving citizens.",
      consequence: "Global outrage and massive campaigns by Oxfam forced the company to back down from its extreme demands and accept a minimal settlement, revealing a total lack of corporate compassion."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/world/2002/dec/20/marketingandpr.debtrelief" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-red-950"
  },
  {
    year: "2008",
    title: "Chinese Milk Scandal",
    description: "Milk powder adulterated with melamine causes massive poisoning and infant deaths.",
    expandedDetails: {
      problem: "Suppliers in China adulterated milk and infant formulas with melamine (an industrial and plastic component) to bypass chemical tests and simulate an artificially high protein value. The company was among the producers whose products also tested positive.",
      impact: "Around 300,000 Chinese babies fell seriously ill. Over 50,000 were hospitalized with kidney stones and irreversible kidney damage, and several children died due to complications.",
      consequence: "After initially downplaying the severity of its involvement, the corporation was forced to make massive recalls of milk and dairy products in Taiwan, Hong Kong, and China, severely breaking public trust in Western products."
    },
    sources: [
      { text: "Wikipedia: Milk Scandal", url: "https://pt.wikipedia.org/wiki/Esc%C3%A2ndalo_do_leite_chin%C3%AAs_em_2008" }
    ],
    icon: <Beaker className="w-6 h-6 text-white" />,
    color: "bg-red-800"
  },
  {
    year: "2010",
    title: "Aquifer Theft",
    description: "Documentaries expose the predatory extraction of water from reserves facing severe droughts.",
    expandedDetails: {
      problem: "The company extracts hundreds of millions of liters from aquifers around the world, paying absurdly small fees, while residents and local ecosystems suffer from drought.",
      impact: "In California, it relentlessly continued bottling through the state's worst historical drought using a permit that had expired over 30 years ago.",
      consequence: "It received orders to cease operations in various parts of the US and faced civil fury in places like Michigan and São Lourenço (Brazil), but used its legal power to drag out lawsuits."
    },
    sources: [
      { text: "Bloomberg", url: "https://www.bloomberg.com/news/features/2017-09-21/nestl-makes-billions-bottling-water-it-pays-nearly-nothing-for" }
    ],
    icon: <Droplet className="w-6 h-6 text-white" />,
    color: "bg-blue-900"
  },
  {
    year: "2015",
    title: "Thai Fishing Slavery",
    description: "Slave labor identified in the corporation's seafood supply chain.",
    expandedDetails: {
      problem: "Investigations revealed that the fish used to produce the company's multi-million pet foods (like Purina) was caught on Thai vessels operated by trafficked migrants, bought and sold like cattle.",
      impact: "Men and boys were often chained, severely beaten, and forced to work brutal 20-hour shifts at sea, sometimes spending months without setting foot on land or receiving any payment.",
      consequence: "Under international pressure, the corporation admitted the endemic presence of slave labor in its maritime supply chain, becoming the target of class-action lawsuits in American courts for deceiving consumers."
    },
    sources: [
      { text: "The Guardian", url: "https://www.theguardian.com/global-development/2015/nov/24/nestle-admits-forced-labour-in-seafood-supply-chain" }
    ],
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-zinc-900"
  },
  {
    year: "2015",
    title: "Russian-Ukrainian Conflict",
    description: "Following the annexation of Crimea, operations continue in Russia sparking heavy boycotts.",
    expandedDetails: {
      problem: "During escalating tensions and Russia's annexation of Crimea, Ukrainian activists noticed that much of the packaged goods sent to their country came from factories on Russian territory, keeping vast commercial operations active.",
      impact: "This market relationship meant that money spent in supermarkets in Ukraine ended up converted into tax and profit flowing directly to the Russian State, indirectly financing the invasions.",
      consequence: "The corporation became one of the main targets of the 'Do not buy Russian goods' civil campaign. This stance of ignoring wars for profit proved to be a preview of its massive and lucrative persistence in the Russian market following the 2022 invasion."
    },
    sources: [
      { text: "Wikipedia: Ukraine Boycotts", url: "https://en.wikipedia.org/wiki/Do_not_buy_Russian_goods!" }
    ],
    icon: <AlertOctagon className="w-6 h-6 text-white" />,
    color: "bg-amber-800"
  },
  {
    year: "2017",
    title: "The Trail of Deforestation",
    description: "Investigations expose massive illegal deforestation to supply cocoa and palm oil chains.",
    expandedDetails: {
      problem: "The environmental organization Mighty Earth published a shocking investigation showing how the corporation continued to finance the destruction of vast areas of theoretically protected rainforests in West Africa and Indonesia.",
      impact: "Sanctuaries and national parks in Ivory Coast were completely wiped off the map, turning vital habitats into monocultures. Entire populations of chimpanzees and orangutans were decimated or pushed to the brink of extinction.",
      consequence: "The company, as usual, stated its 'commitment to improvements in traceability', the same script repeated and failed countless times over the last decades. Illegal deforestation continued to fuel profit."
    },
    sources: [
      { text: "The Guardian (Mighty Earth Report)", url: "https://www.theguardian.com/environment/2017/sep/13/chocolate-industry-drives-rainforest-disaster-in-ivory-coast" }
    ],
    icon: <Leaf className="w-6 h-6 text-white" />,
    color: "bg-green-950"
  },
  {
    year: "2021",
    title: "The Unhealthy Factor",
    description: "The largest internal document leak of the century reveals the true nature of the corporate portfolio.",
    expandedDetails: {
      problem: "Internal documents passed to the Financial Times showed that over 60% of the company's food and beverages cannot be classified as healthy and never will be, even if reformulated.",
      impact: "It shattered the long-standing marketing narrative of being a company focused on 'nutrition, health, and wellness', revealing the deliberate promotion of empty calories, sugar, and sodium.",
      consequence: "The shock forced the company to update some nutritional strategies, but the core of its revenue remains untouched."
    },
    sources: [
      { text: "Financial Times", url: "https://www.ft.com/content/4c98d410-38b1-4be8-95b2-d029e054f492?syn-25a6b1a6=1" }
    ],
    icon: <AlertTriangle className="w-6 h-6 text-white" />,
    color: "bg-red-900"
  }
];
