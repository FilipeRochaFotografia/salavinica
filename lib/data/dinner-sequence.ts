import { dinnerWines, WineId } from './dinner-wines';
import { dinnerDishes, DishId } from './dinner-dishes';

export interface DinnerMoment {
  id: string;
  momentOrder: number;
  wine: typeof dinnerWines[WineId];
  dish: typeof dinnerDishes[DishId];
  editorialPairing: string;
}

export const dinnerSequence: DinnerMoment[] = [
  {
    id: 'momento-1',
    momentOrder: 1,
    wine: dinnerWines['crasto-rose'],
    dish: dinnerDishes['canape-petinga'],
    editorialPairing: 'O perfil fresco, delicado e mineral do Crasto Rosé ajuda a acompanhar a componente salgada e untuosa da petinga sem pesar o início do jantar. A fruta vermelha subtil e a frescura tornam a combinação leve, precisa e muito apelativa na abertura da refeição.'
  },
  {
    id: 'momento-2',
    momentOrder: 2,
    wine: dinnerWines['crasto-branco'],
    dish: dinnerDishes['canape-atum'],
    editorialPairing: 'A combinação funciona pela tensão e limpeza do vinho. A acidez e a mineralidade ajudam a acompanhar a delicadeza do atum cru, enquanto a textura elegante do Crasto Branco sustenta o prato sem o dominar.'
  },
  {
    id: 'momento-3',
    momentOrder: 3,
    wine: dinnerWines['quinta-crasto-superior-branco'],
    dish: dinnerDishes['salada-bacalhau'],
    editorialPairing: 'A estrutura do vinho acompanha a presença do bacalhau e do grão, enquanto a frescura e a mineralidade ajudam a evitar peso excessivo na prova. É uma harmonização equilibrada, com boa continuidade de boca e grande lógica gastronómica.'
  },
  {
    id: 'momento-4',
    momentOrder: 4,
    wine: dinnerWines['quinta-crasto-reserva-vinhas-velhas'],
    dish: dinnerDishes['peixe-galo'],
    editorialPairing: 'À primeira vista é uma harmonização ousada, mas faz sentido se o objetivo do jantar for mostrar progressão e contraste. A açorda de ovas e o caráter mais intenso do prato permitem chamar um tinto com estrutura, sobretudo quando o foco está no lado salino, texturado e profundo da composição.'
  },
  {
    id: 'momento-5',
    momentOrder: 5,
    wine: dinnerWines['quinta-crasto-vinha-da-ponte'],
    dish: dinnerDishes['arroz-costela'],
    editorialPairing: 'Aqui a lógica é plena. O arroz de costela exige estrutura, persistência e profundidade aromática. A gordura, a suculência e o lado terroso dos grelos encontram eco no corpo e no desenho tânico do vinho.'
  },
  {
    id: 'momento-6',
    momentOrder: 6,
    wine: dinnerWines['porto-crasto-colheita-2005'],
    dish: dinnerDishes['pao-de-lo'],
    editorialPairing: 'A combinação funciona por contraste e continuidade ao mesmo tempo. O lado amanteigado e doce do pão de ló encontra eco na textura e na doçura do Porto. O queijo da Serra acrescenta sal, gordura e profundidade, elevando a experiência e tornando o final do jantar mais memorável.'
  }
];
