export type DishId = 'canape-petinga' | 'canape-atum' | 'salada-bacalhau' | 'peixe-galo' | 'arroz-costela' | 'pao-de-lo';

export interface DinnerDish {
  id: DishId;
  slug: string;
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string;
  ingredients: string[];
  sensoryProfile: {
    salinity: string;
    fat: string;
    intensity: string;
    texture: string;
    sweetness?: string;
    finish: string;
  };
  gastronomicReading: string;
  pairingLogic: string[];
  image: string;
  dinnerOrder: number;
}

export const dinnerDishes: Record<DishId, DinnerDish> = {
  'canape-petinga': {
    id: 'canape-petinga',
    slug: 'canape-petinga',
    name: 'Canapé de Filete de Petinga',
    type: 'Entrada',
    shortDescription: 'Clássico da cozinha portuguesa reinterpretado com leveza e elegância.',
    longDescription: 'Um clássico da cozinha portuguesa reinterpretado em formato leve e elegante. A petinga, pequena e intensa, traz um perfil salino e ligeiramente oleoso, com textura crocante no exterior e suculenta no interior.',
    ingredients: ['petinga fresca', 'fritura leve', 'base de pão / suporte crocante', 'possível elemento ácido (limão ou pickles)'],
    sensoryProfile: {
      salinity: 'média-alta',
      fat: 'média',
      intensity: 'média',
      texture: 'crocante + suculenta',
      finish: 'persistente e marítimo'
    },
    gastronomicReading: 'Prato de abertura com forte identidade atlântica. A fritura traz conforto e intensidade, enquanto o formato reduzido mantém leveza.',
    pairingLogic: ['precisa de frescura', 'precisa de acidez', 'beneficia de mineralidade', 'não suporta peso excessivo'],
    image: '/pratos/prato1.png',
    dinnerOrder: 1
  },
  'canape-atum': {
    id: 'canape-atum',
    slug: 'canape-atum',
    name: 'Canapé de Tártaro de Atum',
    type: 'Entrada',
    shortDescription: 'Momento de sofisticação com atum cru, focado na pureza do produto.',
    longDescription: 'Preparação delicada baseada em atum cru de alta qualidade, cortado à faca, preservando textura e frescura. Apresenta-se num formato limpo, preciso e focado na pureza do produto.',
    ingredients: ['atum fresco (qualidade sashimi)', 'azeite', 'sal', 'possível elemento ácido (limão / lima)', 'ervas frescas'],
    sensoryProfile: {
      salinity: 'média',
      fat: 'média-baixa',
      intensity: 'média',
      texture: 'macia, delicada',
      finish: 'limpo e fresco'
    },
    gastronomicReading: 'Prato de grande precisão, onde o foco está na textura e na pureza do peixe. Requer acompanhamento que respeite essa delicadeza.',
    pairingLogic: ['precisa de acidez', 'precisa de limpeza', 'não tolera excesso de madeira', 'valoriza elegância'],
    image: '/pratos/prato2.png',
    dinnerOrder: 2
  },
  'salada-bacalhau': {
    id: 'salada-bacalhau',
    slug: 'salada-bacalhau',
    name: 'Salada de Bacalhau e Grão de Bico',
    type: 'Entrada / prato intermédio',
    shortDescription: 'Início da progressão gastronómica. Combina intensidade com textura.',
    longDescription: 'Um prato profundamente português que combina a intensidade do bacalhau com a textura e o corpo do grão-de-bico. Pode incluir cebola, azeite e ervas, criando um equilíbrio entre rusticidade e frescura.',
    ingredients: ['bacalhau', 'grão-de-bico', 'azeite', 'cebola', 'ervas aromáticas'],
    sensoryProfile: {
      salinity: 'média-alta',
      fat: 'média',
      intensity: 'média-alta',
      texture: 'densa, estruturada',
      finish: 'longo e reconfortante'
    },
    gastronomicReading: 'Prato de transição, já com maior densidade e presença. Introduz estrutura no jantar.',
    pairingLogic: ['precisa de vinho com volume', 'precisa de frescura para equilibrar o sal', 'beneficia de textura e persistência'],
    image: '/pratos/prato3.png',
    dinnerOrder: 3
  },
  'peixe-galo': {
    id: 'peixe-galo',
    slug: 'peixe-galo',
    name: 'Peixe Galo Frito com Açorda de Ovas',
    type: 'Prato principal (mar)',
    shortDescription: 'Ponto alto do mar de grande intensidade e identidade tradicional.',
    longDescription: 'Prato com forte identidade tradicional. O peixe galo frito apresenta textura crocante e sabor delicado, enquanto a açorda de ovas traz profundidade, untuosidade e intensidade marítima.',
    ingredients: ['peixe galo', 'fritura', 'açorda de ovas', 'pão', 'alho', 'coentros', 'azeite'],
    sensoryProfile: {
      salinity: 'alta',
      fat: 'média-alta',
      intensity: 'alta',
      texture: 'crocante + cremosa',
      finish: 'muito persistente'
    },
    gastronomicReading: 'Prato de grande intensidade e identidade. A açorda adiciona profundidade e textura, criando um conjunto complexo e marcante.',
    pairingLogic: ['suporta estrutura', 'suporta intensidade', 'permite abordagens menos óbvias (incluindo tinto leve a médio)'],
    image: '/pratos/prato4.png',
    dinnerOrder: 4
  },
  'arroz-costela': {
    id: 'arroz-costela',
    slug: 'arroz-costela',
    name: 'Arroz de Costela Mendinha e Grelos',
    type: 'Prato principal (carne)',
    shortDescription: 'Clímax do jantar. Prato de conforto profundo e envolvente.',
    longDescription: 'Um prato de conforto com grande profundidade. A costela mendinha, rica e suculenta, confere intensidade ao arroz, enquanto os grelos introduzem amargor e frescura, equilibrando o conjunto.',
    ingredients: ['costela de carne', 'arroz', 'caldo rico', 'grelos', 'gordura natural da carne'],
    sensoryProfile: {
      salinity: 'média',
      fat: 'alta',
      intensity: 'alta',
      texture: 'cremosa e envolvente',
      finish: 'longo e profundo'
    },
    gastronomicReading: 'Momento de maior peso e intensidade do jantar. Exige vinho com estrutura, persistência e capacidade de acompanhar gordura.',
    pairingLogic: ['exige grande estrutura', 'precisa de profundidade', 'recompensa complexidade aromática'],
    image: '/pratos/prato5.png',
    dinnerOrder: 5
  },
  'pao-de-lo': {
    id: 'pao-de-lo',
    slug: 'pao-de-lo',
    name: 'Pão de Ló e Queijo da Serra',
    type: 'Sobremesa / fecho',
    shortDescription: 'Fecho memorável. O lado amanteigado do pão de ló encontra o sal do queijo.',
    longDescription: 'Combinação clássica portuguesa que equilibra doce e salgado. O pão de ló traz leveza e doçura, enquanto o queijo da Serra adiciona gordura, sal e profundidade.',
    ingredients: ['pão de ló', 'queijo da Serra'],
    sensoryProfile: {
      sweetness: 'média-alta',
      salinity: 'média',
      fat: 'média-alta',
      intensity: 'média-alta',
      texture: 'cremosa + fofa',
      finish: 'envolvente'
    },
    gastronomicReading: 'Fecho clássico e reconfortante, com forte identidade nacional. Trabalha muito bem com vinhos doces e estruturados.',
    pairingLogic: ['açúcar e gordura pedem álcool e estrutura', 'beneficia de notas evolutivas', 'harmonização por contraste e afinidade'],
    image: '/pratos/prato6.png',
    dinnerOrder: 6
  }
};
