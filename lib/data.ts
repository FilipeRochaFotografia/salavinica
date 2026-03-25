export interface Wine {
  id: string;
  name: string;
  category: string;
  region: string;
  subcategory?: string;
  style: string;
  summary: string;
  keywords: string[];
  pairing: string;
  isPremium: boolean;
  image: string | null;
  imageAlt: string;
  imagePlaceholder: string;
}

export interface Dish {
  id: string;
  name: string;
  category: string;
  description: string;
  recommendedWineIds: string[];
  pairingReason: string;
}

export const wines: Wine[] = [
  // VINHOS VERDES
  {
    id: "v1",
    name: "Landcraft, Loureiro",
    category: "Branco",
    region: "Vinho Verde",
    style: "Fresco, floral, atlântico",
    summary: "Loureiro muito expressivo, com notas de citrinos, flor branca e leve salinidade. Em boca é fresco, leve e muito vibrante, com final limpo.",
    keywords: ["fresco", "cítrico", "salino", "leve"],
    pairing: "marisco, peixe grelhado, entradas leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Landcraft, Loureiro",
    imagePlaceholder: "bg-gradient-to-t from-emerald-900/20 to-transparent"
  },
  {
    id: "v2",
    name: "Milagres, Alvarinho",
    category: "Branco",
    region: "Vinho Verde",
    style: "Estruturado, elegante, mineral",
    summary: "Alvarinho com mais corpo e textura, combinando fruta de polpa branca e citrinos com boa acidez. Equilibra frescura e volume com grande elegância.",
    keywords: ["estruturado", "mineral", "elegante"],
    pairing: "peixe, arroz de marisco, pratos mais intensos",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Milagres, Alvarinho",
    imagePlaceholder: "bg-gradient-to-t from-emerald-900/20 to-transparent"
  },
  {
    id: "v3",
    name: "Parcela Única",
    category: "Branco",
    region: "Vinho Verde",
    style: "Preciso, tenso, sofisticado",
    summary: "Alvarinho de perfil muito definido, com mineralidade, tensão e final persistente. Mais focado na precisão do que na exuberância.",
    keywords: ["tenso", "mineral", "elegante"],
    pairing: "marisco nobre, peixe delicado",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Parcela Única",
    imagePlaceholder: "bg-gradient-to-t from-emerald-900/20 to-transparent"
  },

  // DOURO, BRANCOS
  {
    id: "db1",
    name: "Crasto Superior",
    category: "Branco",
    region: "Douro",
    style: "Equilibrado, fresco, gastronómico",
    summary: "Branco do Douro com notas cítricas e fruta branca, equilibrando frescura e leve estrutura. Fácil de beber, mas com presença à mesa.",
    keywords: ["equilibrado", "fresco", "versátil"],
    pairing: "peixe, pratos de mar, entradas compostas",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Crasto Superior",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "db2",
    name: "Quinta das Carvalhas Vinhas Velhas",
    category: "Branco",
    region: "Douro",
    style: "Complexo, elegante, profundo",
    summary: "Branco de vinhas velhas com maior profundidade e textura. Combina mineralidade, frescura e estrutura num perfil mais sério.",
    keywords: ["complexo", "estruturado", "mineral"],
    pairing: "peixe nobre, pratos com mais textura",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta das Carvalhas Vinhas Velhas",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "db3",
    name: "Cedro do Noval",
    category: "Branco",
    region: "Douro",
    style: "Puro, fresco, elegante",
    summary: "Branco muito limpo e equilibrado, com citrinos, fruta branca e leve floral. Fresco, preciso e fácil de harmonizar.",
    keywords: ["elegante", "fresco", "leve"],
    pairing: "peixe, marisco, pratos leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Cedro do Noval",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // DOURO, CONTINUAÇÃO PREMIUM
  {
    id: "dbp1",
    name: "Mirabilis",
    category: "Branco",
    region: "Douro",
    subcategory: "Premium",
    style: "Profundo, sofisticado, intenso",
    summary: "Branco de grande complexidade e textura, com fruta branca, mineralidade e enorme persistência. Estruturado e muito elegante.",
    keywords: ["intenso", "sofisticado", "longo"],
    pairing: "pratos de assinatura, marisco nobre",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Mirabilis",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "dbp2",
    name: "Quinta da Romaneira Dona Clara",
    category: "Branco",
    region: "Douro",
    subcategory: "Premium",
    style: "Elegante, equilibrado, polido",
    summary: "Branco com fruta branca, notas cítricas e leve floral. Muito equilibrado, com frescura e textura contida.",
    keywords: ["equilibrado", "elegante", "suave"],
    pairing: "peixe, aves, pratos leves",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta da Romaneira Dona Clara",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "dbp3",
    name: "Pequeno Dilema",
    category: "Branco",
    region: "Douro",
    subcategory: "Premium",
    style: "Vibrante, moderno, fresco",
    summary: "Branco com perfil atual, focado na frescura e na leveza, com notas cítricas e florais e boa acidez.",
    keywords: ["vibrante", "leve", "moderno"],
    pairing: "marisco, peixe grelhado",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Pequeno Dilema",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // RESERVA PESSOAL, ESPECIAIS
  {
    id: "rp1",
    name: "Alves de Sousa Pessoal Branco",
    category: "Branco",
    region: "Douro",
    subcategory: "Especial",
    style: "Singular, estruturado, intenso",
    summary: "Branco fora do comum, com notas florais, especiarias e textura marcante. Seco, longo e muito gastronómico.",
    keywords: ["único", "estruturado", "complexo"],
    pairing: "bacalhau, pratos intensos",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Alves de Sousa Pessoal Branco",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "rp2",
    name: "Tiara, Niepoort",
    category: "Branco",
    region: "Douro",
    subcategory: "Especial",
    style: "Delicado, mineral, elegante",
    summary: "Branco de grande leveza e precisão, com notas cítricas e florais. Muito fino, fresco e subtil.",
    keywords: ["leve", "elegante", "mineral"],
    pairing: "ostras, marisco delicado",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Tiara, Niepoort",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "rp3",
    name: "Xis, Niepoort",
    category: "Branco",
    region: "Douro",
    subcategory: "Especial",
    style: "Sério, tenso, mineral",
    summary: "Branco mais contido e profundo, com mineralidade marcada e final seco e longo.",
    keywords: ["tenso", "seco", "profundo"],
    pairing: "peixe firme, pratos mais estruturados",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Xis, Niepoort",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // BAIRRADA
  {
    id: "bb1",
    name: "Aliás",
    category: "Branco",
    region: "Bairrada",
    style: "Mineral, crocante, elegante",
    summary: "Branco com forte identidade mineral, acidez viva e perfil muito preciso e gastronómico.",
    keywords: ["mineral", "fresco", "elegante"],
    pairing: "marisco, peixe grelhado",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Aliás",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "bb2",
    name: "Buçaco",
    category: "Branco",
    region: "Bairrada",
    style: "Clássico, complexo, seco",
    summary: "Branco de grande tradição, com notas de frutos secos, citrinos e mineralidade. Estruturado e sofisticado.",
    keywords: ["clássico", "complexo", "longo"],
    pairing: "pratos ricos, peixe nobre",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Buçaco",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "bb3",
    name: "Calcário 3, Chardonnay",
    category: "Branco",
    region: "Bairrada",
    style: "Mineral, linear, moderno",
    summary: "Chardonnay focado na frescura e na mineralidade, com perfil mais tenso e elegante do que opulento.",
    keywords: ["mineral", "fresco", "preciso"],
    pairing: "peixe, pratos leves e cremosos",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Calcário 3, Chardonnay",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // ALENTEJO, BRANCOS
  {
    id: "ab1",
    name: "Cartuxa",
    category: "Branco",
    region: "Alentejo",
    style: "Equilibrado, clássico, versátil",
    summary: "Branco de referência do Alentejo, com fruta, frescura e boa estrutura. Muito equilibrado e fácil de gostar.",
    keywords: ["equilibrado", "versátil", "elegante"],
    pairing: "peixe, carnes brancas, entradas",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Cartuxa",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "ab2",
    name: "Carlos Reynolds",
    category: "Branco",
    region: "Alentejo",
    style: "Frutado, leve, acessível",
    summary: "Branco direto e agradável, com fruta amarela, leve floral e boa frescura. Fácil e versátil.",
    keywords: ["frutado", "leve", "fácil"],
    pairing: "saladas, peixe leve",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Carlos Reynolds",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "ab3",
    name: "Malhadinha",
    category: "Branco",
    region: "Alentejo",
    style: "Elegante, complexo, texturado",
    summary: "Branco mais estruturado, com fruta, barrica integrada e boa persistência. Sofisticado e gastronómico.",
    keywords: ["complexo", "estruturado", "elegante"],
    pairing: "pratos cremosos, peixe elaborado",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Malhadinha",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // DÃO, BRANCOS
  {
    id: "daob1",
    name: "Bella Sauvignon Blanc",
    category: "Branco",
    region: "Dão",
    style: "Intenso, fresco, varietal",
    summary: "Sauvignon Blanc expressivo, com notas cítricas e herbáceas, boa frescura e textura acima da média.",
    keywords: ["intenso", "fresco", "aromático"],
    pairing: "saladas, marisco, peixe cru",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Bella Sauvignon Blanc",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "daob2",
    name: "Quinta da Alameda Encruzado",
    category: "Branco",
    region: "Dão",
    style: "Elegante, mineral, fresco",
    summary: "Encruzado muito equilibrado, com citrinos, mineralidade e boa acidez. Preciso e gastronómico.",
    keywords: ["mineral", "fresco", "elegante"],
    pairing: "peixe, marisco",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Quinta da Alameda Encruzado",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "daob3",
    name: "Dona Sancha",
    category: "Branco",
    region: "Dão",
    style: "Fresco, cítrico, direto",
    summary: "Branco jovem e vibrante, com notas cítricas e final seco e persistente. Muito fresco e gastronómico.",
    keywords: ["fresco", "cítrico", "leve"],
    pairing: "marisco, pratos leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Dona Sancha",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },

  // VINHOS TINTOS - DOURO
  {
    id: "dt1",
    name: "Cedro do Noval",
    category: "Tinto",
    region: "Douro",
    style: "Elegante, equilibrado, acessível",
    summary: "Tinto com fruta vermelha e preta, notas suaves de especiaria e taninos polidos. Equilíbrio entre frescura e estrutura.",
    keywords: ["elegante", "equilibrado", "suave"],
    pairing: "carnes grelhadas, pratos de média intensidade",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Cedro do Noval",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "dt2",
    name: "Crasto Superior",
    category: "Tinto",
    region: "Douro",
    style: "Estruturado, intenso, gastronómico",
    summary: "Tinto com fruta preta madura, especiarias e boa estrutura. Taninos firmes e final persistente.",
    keywords: ["estruturado", "intenso", "longo"],
    pairing: "carnes, pratos mais intensos",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Crasto Superior",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "dt3",
    name: "Lento Vinhas Velhas",
    category: "Tinto",
    region: "Douro",
    style: "Profundo, complexo, sofisticado",
    summary: "Tinto de vinhas velhas com grande concentração, taninos finos e final longo. Perfil sério e envolvente.",
    keywords: ["complexo", "profundo", "elegante"],
    pairing: "carnes nobres, pratos ricos",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Lento Vinhas Velhas",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },

  // VINHOS TINTOS - DOURO PREMIUM
  {
    id: "dtp1",
    name: "Quinta da Pedra Alta “O Melhor”",
    category: "Tinto",
    region: "Douro",
    subcategory: "Premium",
    style: "Intenso, estruturado, premium",
    summary: "Tinto de grande concentração, com fruta negra, especiarias e madeira integrada. Estruturado e longo.",
    keywords: ["intenso", "estruturado", "premium"],
    pairing: "carnes nobres, pratos de assinatura",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta da Pedra Alta “O Melhor”",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "dtp2",
    name: "Quinta do Vale Meão",
    category: "Tinto",
    region: "Douro",
    subcategory: "Premium",
    style: "Sofisticado, equilibrado, icónico",
    summary: "Tinto elegante com fruta madura, frescura e grande equilíbrio. Complexo, mas muito harmonioso.",
    keywords: ["elegante", "complexo", "icónico"],
    pairing: "pratos premium, carnes nobres",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta do Vale Meão",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "dtp3",
    name: "Quinta Vale D. Maria Vinha do Rio",
    category: "Tinto",
    region: "Douro",
    subcategory: "Premium",
    style: "Profundo, elegante, estruturado",
    summary: "Tinto com grande intensidade aromática, taninos finos e excelente persistência. Perfil sofisticado.",
    keywords: ["profundo", "estruturado", "longo"],
    pairing: "carnes intensas, pratos elaborados",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta Vale D. Maria Vinha do Rio",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "dtp4",
    name: "Quinta do Noval Reserva",
    category: "Tinto",
    region: "Douro",
    subcategory: "Premium",
    style: "Clássico, estruturado, elegante",
    summary: "Tinto com fruta preta, especiarias e madeira bem integrada. Equilíbrio entre potência e elegância.",
    keywords: ["clássico", "estruturado", "elegante"],
    pairing: "carnes, pratos tradicionais",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Quinta do Noval Reserva",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },

  // VINHOS TINTOS - DÃO
  {
    id: "daot1",
    name: "Dona Sancha",
    category: "Tinto",
    region: "Dão",
    style: "Fresco, elegante, leve",
    summary: "Tinto com fruta vermelha, acidez viva e taninos suaves. Perfil fresco e gastronómico.",
    keywords: ["fresco", "leve", "elegante"],
    pairing: "carnes leves, pratos delicados",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Dona Sancha",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "daot2",
    name: "Bella Pinot Noir",
    category: "Tinto",
    region: "Dão",
    style: "Delicado, aromático, elegante",
    summary: "Pinot Noir com fruta vermelha, notas florais e taninos finos. Leve, fresco e muito elegante.",
    keywords: ["leve", "aromático", "elegante"],
    pairing: "aves, pratos leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Bella Pinot Noir",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "daot3",
    name: "Taboadella Alfrocheiro",
    category: "Tinto",
    region: "Dão",
    style: "Estruturado, fresco, identitário",
    summary: "Tinto com fruta vermelha, especiarias e boa acidez. Estrutura média e perfil muito gastronómico.",
    keywords: ["fresco", "estruturado", "gastronómico"],
    pairing: "carnes, pratos tradicionais",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Taboadella Alfrocheiro",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },

  // VINHOS TINTOS - ALENTEJO
  {
    id: "at1",
    name: "Cartuxa",
    category: "Tinto",
    region: "Alentejo",
    style: "Equilibrado, clássico, estruturado",
    summary: "Tinto com fruta madura, especiarias e taninos suaves. Equilíbrio e elegância típicos da região.",
    keywords: ["equilibrado", "elegante", "clássico"],
    pairing: "carnes, pratos tradicionais",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Cartuxa",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "at2",
    name: "Mouchão",
    category: "Tinto",
    region: "Alentejo",
    style: "Intenso, rústico, clássico",
    summary: "Tinto potente com fruta preta, especiarias e taninos firmes. Perfil tradicional e muito marcante.",
    keywords: ["intenso", "rústico", "poderoso"],
    pairing: "carnes intensas, caça",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Mouchão",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "at3",
    name: "Carlos Reynolds",
    category: "Tinto",
    region: "Alentejo",
    style: "Frutado, acessível, equilibrado",
    summary: "Tinto com fruta madura, taninos suaves e perfil fácil. Versátil e agradável.",
    keywords: ["frutado", "suave", "fácil"],
    pairing: "carnes leves, pratos simples",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Carlos Reynolds",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },

  // VINHOS TINTOS - OUTROS
  {
    id: "ot1",
    name: "Redoma",
    category: "Tinto",
    region: "Outros",
    style: "Elegante, fresco, gastronómico",
    summary: "Tinto com fruta vermelha, acidez viva e taninos finos. Muito equilibrado e versátil.",
    keywords: ["fresco", "elegante", "equilibrado"],
    pairing: "carnes, pratos de média intensidade",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Redoma",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "ot2",
    name: "Romaneira",
    category: "Tinto",
    region: "Outros",
    style: "Estruturado, elegante, moderno",
    summary: "Tinto com fruta preta, especiarias e boa estrutura. Perfil atual e bem equilibrado.",
    keywords: ["estruturado", "moderno", "elegante"],
    pairing: "carnes, pratos ricos",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Romaneira",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },
  {
    id: "ot3",
    name: "Apontador Syrah",
    category: "Tinto",
    region: "Outros",
    style: "Intenso, especiado, envolvente",
    summary: "Syrah com fruta preta, pimenta e notas fumadas. Estruturado e persistente.",
    keywords: ["especiado", "intenso", "estruturado"],
    pairing: "carnes grelhadas, pratos fortes",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Apontador Syrah",
    imagePlaceholder: "bg-gradient-to-t from-red-900/20 to-transparent"
  },

  // VINHOS ROSÉ
  {
    id: "r1",
    name: "Buçaco Rosé",
    category: "Rosé",
    region: "Bairrada",
    style: "Elegante, seco, gastronómico",
    summary: "Rosé com frescura, leve estrutura e perfil seco. Muito elegante e versátil.",
    keywords: ["seco", "elegante", "fresco"],
    pairing: "peixe, marisco, entradas",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Buçaco Rosé",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  },
  {
    id: "r2",
    name: "Crasto Rosé",
    category: "Rosé",
    region: "Douro",
    style: "Fresco, frutado, leve",
    summary: "Rosé vibrante com fruta vermelha e boa acidez. Leve e fácil de beber.",
    keywords: ["fresco", "leve", "frutado"],
    pairing: "saladas, pratos leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Crasto Rosé",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  },
  {
    id: "r3",
    name: "L'ostall Rosé",
    category: "Rosé",
    region: "Outros",
    style: "Aromático, equilibrado, moderno",
    summary: "Rosé com fruta fresca, boa acidez e perfil elegante. Versátil e contemporâneo.",
    keywords: ["aromático", "equilibrado", "moderno"],
    pairing: "entradas, peixe, pratos leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de L'ostall Rosé",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  },

  // CHAMPAGNE
  {
    id: "c1",
    name: "Bollinger Special Cuvée Brut",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Branco",
    style: "Estruturado, complexo, clássico",
    summary: "Champagne com fruta madura, brioche e grande estrutura. Intenso e sofisticado.",
    keywords: ["complexo", "estruturado", "clássico"],
    pairing: "marisco, pratos ricos",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Bollinger Special Cuvée Brut",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "c2",
    name: "Dom Pérignon Blanc",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Branco",
    style: "Icónico, sofisticado, elegante",
    summary: "Champagne de grande finesse, com complexidade, frescura e enorme persistência.",
    keywords: ["sofisticado", "elegante", "icónico"],
    pairing: "pratos premium, marisco nobre",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Dom Pérignon Blanc",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "c3",
    name: "Dom Pérignon Plénitude",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Branco",
    style: "Profundo, raro, evoluído",
    summary: "Versão mais evoluída e complexa, com enorme profundidade e persistência.",
    keywords: ["raro", "profundo", "intenso"],
    pairing: "experiências exclusivas",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Dom Pérignon Plénitude",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "c4",
    name: "Moët & Chandon Imperial",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Branco",
    style: "Equilibrado, fresco, acessível",
    summary: "Champagne clássico, com fruta, frescura e boa estrutura. Muito versátil.",
    keywords: ["fresco", "equilibrado", "versátil"],
    pairing: "aperitivo, entradas",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Moët & Chandon Imperial",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "c5",
    name: "Billecart-Salmon Rosé Brut",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Rosé",
    style: "Elegante, fino, delicado",
    summary: "Rosé muito fino, com fruta vermelha e grande elegância. Persistente e sofisticado.",
    keywords: ["elegante", "delicado", "fino"],
    pairing: "marisco, pratos delicados",
    isPremium: true,
    image: null,
    imageAlt: "Garrafa de Billecart-Salmon Rosé Brut",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  },
  {
    id: "c6",
    name: "Moët & Chandon Rosé Imperial",
    category: "Champagne",
    region: "Champagne",
    subcategory: "Rosé",
    style: "Frutado, vibrante, moderno",
    summary: "Rosé com fruta vermelha, frescura e perfil mais expressivo. Fácil e apelativo.",
    keywords: ["frutado", "vibrante", "moderno"],
    pairing: "entradas, sobremesas leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Moët & Chandon Rosé Imperial",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  },
  {
    id: "c7",
    name: "Moët & Chandon Ice Imperial",
    category: "Champagne",
    region: "Champagne",
    subcategory: "On Ice",
    style: "Doce, fresco, descontraído",
    summary: "Champagne pensado para gelo, com perfil mais doce e muito refrescante.",
    keywords: ["doce", "fresco", "leve"],
    pairing: "aperitivo, momentos informais",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Moët & Chandon Ice Imperial",
    imagePlaceholder: "bg-gradient-to-t from-amber-900/20 to-transparent"
  },
  {
    id: "c8",
    name: "Veuve Clicquot Rich Rosé",
    category: "Champagne",
    region: "Champagne",
    subcategory: "On Ice",
    style: "Doce, aromático, moderno",
    summary: "Rosé mais doce e expressivo, ideal para servir com gelo e experiências descontraídas.",
    keywords: ["doce", "aromático", "descontraído"],
    pairing: "aperitivo, sobremesas leves",
    isPremium: false,
    image: null,
    imageAlt: "Garrafa de Veuve Clicquot Rich Rosé",
    imagePlaceholder: "bg-gradient-to-t from-rose-900/20 to-transparent"
  }
];

export const dishes: Dish[] = [
  // ENTRADAS
  {
    id: "d1",
    name: "Sapateira Recheada",
    category: "Entradas",
    description: "Sapateira recheada com a nossa receita especial, servida com tostas.",
    recommendedWineIds: ["v1", "v3", "c1"],
    pairingReason: "A frescura e salinidade dos Vinhos Verdes ou a estrutura de um Champagne clássico complementam perfeitamente o sabor rico da sapateira."
  },
  {
    id: "d2",
    name: "Gambas al Ajillo",
    category: "Entradas",
    description: "Gambas salteadas em azeite, alho e malagueta.",
    recommendedWineIds: ["v2", "db1", "r1"],
    pairingReason: "Um Alvarinho estruturado ou um branco do Douro com boa acidez equilibram a gordura do azeite e o picante do alho."
  },
  {
    id: "d3",
    name: "Croquetes de Alheira",
    category: "Entradas",
    description: "Croquetes crocantes de alheira de caça.",
    recommendedWineIds: ["dt1", "daot1", "r3"],
    pairingReason: "Tintos leves e elegantes ou um Rosé moderno cortam a riqueza da alheira sem sobrepor o seu sabor."
  },
  {
    id: "d4",
    name: "Pataniscas de Bacalhau",
    category: "Entradas",
    description: "Pataniscas tradicionais de bacalhau, fritas na perfeição.",
    recommendedWineIds: ["bb1", "ab1", "v1"],
    pairingReason: "Brancos com boa acidez e mineralidade, como os da Bairrada ou Vinhos Verdes, são ideais para limpar o palato após fritos."
  },
  {
    id: "d5",
    name: "Salada de Polvo",
    category: "Entradas",
    description: "Polvo tenro envolvido em azeite, cebola, pimentos e coentros.",
    recommendedWineIds: ["v2", "daob1", "r2"],
    pairingReason: "A frescura de um Sauvignon Blanc do Dão ou um Alvarinho realçam os sabores frescos e avinagrados da salada."
  },
  {
    id: "d6",
    name: "Salada Pequena",
    category: "Entradas",
    description: "Mix de folhas verdes frescas com vinagrete da casa.",
    recommendedWineIds: ["ab2", "daob3", "c4"],
    pairingReason: "Vinhos brancos leves e frutados ou um Champagne acessível acompanham perfeitamente a simplicidade de uma salada verde."
  },

  // PRATO PRINCIPAL
  {
    id: "d7",
    name: "Robalo Grelhado",
    category: "Prato Principal",
    description: "Robalo fresco grelhado no carvão, acompanhado de arroz de amêijoas ou arroz de tomate.",
    recommendedWineIds: ["v3", "bb3", "db3"],
    pairingReason: "Um branco tenso e mineral ou um Chardonnay elegante respeitam a delicadeza do robalo grelhado."
  },
  {
    id: "d8",
    name: "Dourada Grelhada",
    category: "Prato Principal",
    description: "Dourada fresca grelhada no carvão, acompanhada de arroz de amêijoas ou arroz de tomate.",
    recommendedWineIds: ["v1", "daob2", "ab1"],
    pairingReason: "Brancos frescos e equilibrados complementam a textura suave da dourada e o sabor dos acompanhamentos."
  },
  {
    id: "d9",
    name: "Bacalhau à Armazém",
    category: "Prato Principal",
    description: "Assado no forno com molho de tomate e cebola, gratinado com maionese da casa e acompanhado de puré.",
    recommendedWineIds: ["rp1", "bb2", "dt1"],
    pairingReason: "Um prato rico e gratinado pede brancos muito estruturados e complexos (como Reservas Especiais) ou tintos elegantes."
  },
  {
    id: "d10",
    name: "Massada de Robalo com Gambas",
    category: "Prato Principal",
    description: "Massa rica e reconfortante com robalo fresco e gambas.",
    recommendedWineIds: ["dbp2", "ab3", "r1"],
    pairingReason: "Brancos premium com volume e textura ou um Rosé gastronómico suportam bem a riqueza do caldo da massada."
  },
  {
    id: "d11",
    name: "Posta à Armazém",
    category: "Prato Principal",
    description: "Posta de vazia baixa, grelos salteados, batata rústica assada ao forno.",
    recommendedWineIds: ["dtp2", "at2", "dt3"],
    pairingReason: "Carnes nobres e suculentas exigem tintos premium, estruturados e com taninos firmes para um equilíbrio perfeito."
  },
  {
    id: "d12",
    name: "Entrecôte Grelhado",
    category: "Prato Principal",
    description: "Corte premium de carne bovina, grelhado no ponto.",
    recommendedWineIds: ["dtp1", "ot3", "at1"],
    pairingReason: "A gordura entremeada do entrecôte pede tintos intensos, especiados e com boa estrutura tânica."
  },
  {
    id: "d13",
    name: "Lasanha Vegetariana",
    category: "Prato Principal",
    description: "Lasanha rica em vegetais frescos e molho de tomate, gratinada.",
    recommendedWineIds: ["daot3", "ot1", "ab1"],
    pairingReason: "Tintos frescos e gastronómicos ou brancos clássicos e versáteis ligam bem com a acidez do tomate e a riqueza do queijo."
  },
  {
    id: "d14",
    name: "Penne Salteada com Jaca (Vegan)",
    category: "Prato Principal",
    description: "Massa penne salteada com jaca desfiada e temperos ricos.",
    recommendedWineIds: ["daot2", "r3", "db1"],
    pairingReason: "Um Pinot Noir delicado ou um Rosé moderno complementam as texturas e os temperos da jaca sem a dominar."
  },

  // SOBREMESA
  {
    id: "d15",
    name: "Crumble de Maçã",
    category: "Sobremesa",
    description: "Maçã assada com cobertura crocante, servida quente.",
    recommendedWineIds: ["c7", "c8", "rp2"],
    pairingReason: "Champagnes mais doces (On Ice) ou brancos delicados e florais contrastam lindamente com a maçã quente e a canela."
  },
  {
    id: "d16",
    name: "Petit Gâteau",
    category: "Sobremesa",
    description: "Bolo de chocolate denso com interior derretido.",
    recommendedWineIds: ["dtp4", "ot2", "c3"],
    pairingReason: "A intensidade do chocolate negro harmoniza com tintos clássicos muito estruturados ou Champagnes raros e evoluídos."
  },
  {
    id: "d17",
    name: "Leite Creme",
    category: "Sobremesa",
    description: "Tradicional leite creme queimado na hora.",
    recommendedWineIds: ["bb2", "dbp1", "c4"],
    pairingReason: "A crosta de açúcar queimado e a cremosidade pedem brancos complexos e clássicos ou a frescura de um Champagne Imperial."
  },
  {
    id: "d18",
    name: "Salada de Frutas",
    category: "Sobremesa",
    description: "Seleção de frutas frescas da época.",
    recommendedWineIds: ["c6", "r2", "ab2"],
    pairingReason: "A frescura da fruta pede a vibração de um Champagne Rosé, um Rosé leve ou um branco frutado e acessível."
  }
];
