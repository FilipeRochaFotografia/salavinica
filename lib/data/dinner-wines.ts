export type WineId = 'crasto-rose' | 'crasto-branco' | 'quinta-crasto-superior-branco' | 'quinta-crasto-reserva-vinhas-velhas' | 'quinta-crasto-vinha-da-ponte' | 'porto-crasto-colheita-2005';

export interface DinnerWine {
  id: WineId;
  slug: string;
  name: string;
  producer: string;
  region: string;
  type: string;
  grapes: string[];
  shortDescription: string;
  longDescription: string;
  style: string[];
  tastingNotes: string[];
  sensoryProfile: {
    acidity: string;
    body: string;
    intensity: string;
    sweetness?: string;
    tannin?: string;
    texture?: string;
    finish: string;
  };
  serviceTemperature: string;
  decanting: string;
  recommendedGlass: string;
  editorialCopy: string;
  image: string;
  dinnerOrder: number;
}

export const dinnerWines: Record<WineId, DinnerWine> = {
  'crasto-rose': {
    id: 'crasto-rose',
    slug: 'crasto-rose',
    name: 'Crasto Rosé',
    producer: 'Quinta do Crasto',
    region: 'Douro',
    type: 'Rosé',
    grapes: ['Touriga Nacional', 'Tinta Roriz'],
    shortDescription: 'O vinho de abertura. Fresco, delicado e muito elegante.',
    longDescription: 'Crasto Rosé é um rosé do Douro com perfil fresco, delicado e muito elegante. Apresenta uma leitura moderna da região, fugindo ao excesso de peso e privilegiando tensão, textura suave e precisão aromática. É um vinho que funciona muito bem como início de percurso porque é convidativo, luminoso e imediato, mas sem perder seriedade.',
    style: ['fresco', 'floral', 'frutado', 'mineral', 'sedoso'],
    tastingNotes: ['cor salmão pálido brilhante', 'aromas de frutos silvestres', 'notas florais delicadas', 'boca equilibrada', 'textura suave', 'final fresco e persistente'],
    sensoryProfile: {
      acidity: 'média-alta',
      body: 'leve a médio',
      intensity: 'média',
      texture: 'suave',
      finish: 'fresco e limpo'
    },
    serviceTemperature: '8–10°C',
    decanting: 'não',
    recommendedGlass: 'copo de branco de perfil médio',
    editorialCopy: 'Um rosé do Douro de perfil refinado, fresco e muito gastronómico. Delicado na forma, mas seguro na presença, é a escolha ideal para abrir o jantar com leveza e precisão.',
    image: '/vinhos/crastorose.png',
    dinnerOrder: 1
  },
  'crasto-branco': {
    id: 'crasto-branco',
    slug: 'crasto-branco',
    name: 'Crasto Branco',
    producer: 'Quinta do Crasto',
    region: 'Douro',
    type: 'Branco',
    grapes: ['Viosinho', 'Gouveio', 'Rabigato'],
    shortDescription: 'Branco de referência da casa. Equilíbrio entre frescura e textura.',
    longDescription: 'Crasto Branco representa muito bem a interpretação contemporânea de um branco do Douro: fruta limpa, mineralidade, boa textura e uma prova muito equilibrada. É um vinho acessível na leitura, mas suficientemente sério para acompanhar cozinha de produto.',
    style: ['citrino', 'elegante', 'mineral', 'equilibrado', 'gastronómico'],
    tastingNotes: ['cor limão pálido', 'aromas de frutos citrinos', 'notas de flor de laranjeira', 'boca com bom volume', 'textura elegante', 'mineralidade vibrante', 'final fresco e persistente'],
    sensoryProfile: {
      acidity: 'média-alta',
      body: 'médio',
      intensity: 'média',
      texture: 'fina',
      finish: 'persistente e fresco'
    },
    serviceTemperature: '8–10°C',
    decanting: 'não',
    recommendedGlass: 'copo de branco de perfil clássico',
    editorialCopy: 'Um branco do Douro preciso e luminoso, com citrino limpo, textura elegante e mineralidade marcada. Uma escolha segura para pratos de frescura e detalhe.',
    image: '/vinhos/crastobranco.png',
    dinnerOrder: 2
  },
  'quinta-crasto-superior-branco': {
    id: 'quinta-crasto-superior-branco',
    slug: 'quinta-crasto-superior-branco',
    name: 'Quinta do Crasto Superior Branco',
    producer: 'Quinta do Crasto',
    region: 'Douro Superior',
    type: 'Branco',
    grapes: ['Viosinho', 'Verdelho'],
    shortDescription: 'Branco gastronómico. Harmonização forte para pratos com textura.',
    longDescription: 'Crasto Superior Branco sobe um degrau em profundidade e estrutura. Continua a ser um vinho fresco, mas já com mais volume, mais presença e uma dimensão gastronómica superior. É um branco muito apropriado para pratos de bacalhau, peixe com textura e preparações em que a frescura sozinha não chega.',
    style: ['mais estruturado', 'citrino maduro', 'floral', 'mineral', 'gastronómico'],
    tastingNotes: ['cor citrina brilhante', 'excelente intensidade aromática', 'notas cítricas vibrantes', 'delicadas notas florais', 'mineralidade marcante', 'boca com bom volume e seriedade', 'final longo e muito gastronómico'],
    sensoryProfile: {
      acidity: 'média-alta',
      body: 'médio-alto',
      intensity: 'média-alta',
      texture: 'ampla, com tensão',
      finish: 'longo, persistente'
    },
    serviceTemperature: '8–10°C',
    decanting: 'opcional, curta, se a colheita for mais fechada',
    recommendedGlass: 'copo de branco amplo',
    editorialCopy: 'Mais sério e mais amplo, sem perder frescura. Um branco do Douro Superior com presença, mineralidade e grande vocação para a mesa.',
    image: '/vinhos/crastosuperior.png',
    dinnerOrder: 3
  },
  'quinta-crasto-reserva-vinhas-velhas': {
    id: 'quinta-crasto-reserva-vinhas-velhas',
    slug: 'quinta-crasto-reserva-vinhas-velhas',
    name: 'Quinta do Crasto Reserva Vinhas Velhas',
    producer: 'Quinta do Crasto',
    region: 'Douro',
    type: 'Tinto',
    grapes: ['Vinhas velhas com mistura de cerca de 25 a 30 castas'],
    shortDescription: 'Tinto de assinatura. Profundo, estruturado e elegante.',
    longDescription: 'Crasto Reserva Vinhas Velhas é uma das referências mais emblemáticas da Quinta. Assenta na complexidade das vinhas velhas do Douro e mostra um perfil tinto amplo, sólido, envolvente e muito elegante na forma como conjuga fruta, bosque, esteva e textura. É um vinho com forte presença gastronómica e excelente passagem entre sofisticação e conforto.',
    style: ['profundo', 'estruturado', 'elegante', 'complexo', 'clássico do Douro'],
    tastingNotes: ['cor ruby carregado', 'nariz com frutos vermelhos e aromas de bosque', 'notas frescas de esteva', 'boca sólida e envolvente', 'taninos aveludados', 'final muito persistente'],
    sensoryProfile: {
      acidity: 'média',
      body: 'alto',
      intensity: 'alta',
      tannin: 'firme, mas muito polido',
      finish: 'longo e complexo'
    },
    serviceTemperature: '16–18°C',
    decanting: 'recomendada',
    recommendedGlass: 'copo de tinto amplo',
    editorialCopy: 'Um Douro de vinhas velhas com profundidade, textura e grande presença de mesa. Complexo, firme e sedutor, é um vinho de assinatura e identidade.',
    image: '/vinhos/crastovinhasvelhas.png',
    dinnerOrder: 4
  },
  'quinta-crasto-vinha-da-ponte': {
    id: 'quinta-crasto-vinha-da-ponte',
    slug: 'quinta-crasto-vinha-da-ponte',
    name: 'Quinta do Crasto Vinha da Ponte',
    producer: 'Quinta do Crasto',
    region: 'Douro',
    type: 'Tinto',
    grapes: ['Mistura de várias castas antigas (Vinhas com ~100 anos)'],
    shortDescription: 'O ícone do jantar. Terroir-driven, profundo e sedoso.',
    longDescription: 'Vinha da Ponte é um dos grandes vinhos da Quinta do Crasto. Proveniente de uma das suas parcelas mais emblemáticas, traduz o Douro em registo de topo: profundidade, concentração, tanino de veludo, enorme persistência e forte identidade de terroir. É um vinho de contemplação, de momento alto da refeição e de grande valor simbólico dentro da narrativa do jantar vínico.',
    style: ['muito profundo', 'concentrado', 'nobre', 'estruturado', 'longo', 'terroir-driven'],
    tastingNotes: ['cor violeta carregada / roxo profundo', 'aromas intensos de frutos silvestres', 'especiarias finas', 'notas de cacau', 'boca texturada', 'taninos densos e aveludados', 'final com muita profundidade'],
    sensoryProfile: {
      acidity: 'média',
      body: 'muito alto',
      intensity: 'muito alta',
      tannin: 'denso, sedoso, persistente',
      finish: 'muito longo, profundo e nobre'
    },
    serviceTemperature: '16–18°C',
    decanting: 'sim',
    recommendedGlass: 'copo grande de tinto premium',
    editorialCopy: 'Um dos grandes vinhos da Quinta do Crasto. Nascido de uma vinha histórica, combina poder, profundidade e elegância num registo verdadeiramente memorável.',
    image: '/vinhos/crastovinhadaponte.png',
    dinnerOrder: 5
  },
  'porto-crasto-colheita-2005': {
    id: 'porto-crasto-colheita-2005',
    slug: 'porto-crasto-colheita-2005',
    name: 'Porto Crasto Colheita 2005',
    producer: 'Quinta do Crasto',
    region: 'Porto',
    type: 'Porto Colheita',
    grapes: ['Castas tradicionais do Douro'],
    shortDescription: 'Momento final de luxo e conforto. Envolvente e complexo.',
    longDescription: 'Crasto Colheita 2005 representa a dimensão de tempo e maturidade do jantar. Sendo um Colheita, nasce de uma só vindima e envelhece longamente em madeira, ganhando profundidade aromática, untuosidade, notas oxidativas elegantes e grande complexidade. No percurso do jantar, funciona como fecho de luxo e memória.',
    style: ['envolvente', 'complexo', 'oxidativo fino', 'doce, mas elegante', 'muito longo'],
    tastingNotes: ['frutos secos', 'caramelo fino', 'casca de laranja', 'figo seco', 'especiarias doces', 'madeira nobre', 'leve café / toffee'],
    sensoryProfile: {
      sweetness: 'alta',
      acidity: 'média',
      body: 'médio-alto',
      intensity: 'alta',
      finish: 'muito longo e envolvente'
    },
    serviceTemperature: '12–14°C',
    decanting: 'não',
    recommendedGlass: 'copo de Porto / copo pequeno de vinho generoso',
    editorialCopy: 'Um Porto Colheita para terminar em grande. Rico, envolvente e profundamente elegante, prolonga a memória do jantar até ao último gole.',
    image: '/vinhos/crastoporto.png',
    dinnerOrder: 6
  }
};
