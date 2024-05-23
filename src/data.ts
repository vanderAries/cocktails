import { Cocktail } from './types';

const colors = {
  vodka: '#D8DFE3',
  tequila: '#F2F195',
  gin: '#D1E3AD',
  rum: '#F2CF8B',
  whiskey: '#D6914D',
  cointreau: '#FAC46A',
  aperol: '#F7A541',
  prosecco: '#F2E7C9',
  lime: '#B9D96E',
  lemon: '#F7F387',
  syrup: '#D2D9C3',
  orange: '#F9A03F',
  cranberry: '#BF3162',
  apple: '#98B860',
  grenadine: '#E63946',
  cola: '#5E3B54',
  tonic: '#A3D2CA',
  water: '#C5E2F2',
};

export const coctailList: Cocktail[] = [
  {
    id: 1,
    name: 'Margarita',
    ingredients: [
      { name: 'Tequila', quantity: 2, color: colors.tequila },
      { name: 'Cointreau', quantity: 2, color: colors.cointreau },
      { name: 'Sok z Limonki', quantity: 2, color: colors.lime },
      { name: 'Syrop Cukrowy', quantity: 1, color: colors.syrup },
    ],
  },
  {
    id: 2,
    name: 'Tequila Sunrise',
    ingredients: [
      { name: 'Tequila', quantity: 2, color: colors.tequila },
      { name: 'Sok Pomarańczowy', quantity: 4, color: colors.orange },
      { name: 'Grenadyna', quantity: 1, color: colors.grenadine },
    ],
  },
  {
    id: 3,
    name: 'Mojito',
    ingredients: [
      { name: 'Jasny lub Ciemny Rum', quantity: 2, color: colors.rum },
      { name: 'Sok z Limonki', quantity: 1, color: colors.lime },
      { name: 'Syrop Cukrowy', quantity: 1, color: colors.syrup },
      { name: 'Woda Gazowana', quantity: 2, color: colors.water },
    ],
  },
  {
    id: 4,
    name: 'Cuba Libre',
    ingredients: [
      { name: 'Jasny Rum', quantity: 2, color: colors.rum },
      { name: 'Sok z Limonki', quantity: 1, color: colors.lime },
      { name: 'Cola', quantity: 5, color: colors.cola },
    ],
  },
  {
    id: 5,
    name: 'Daiquiri',
    ingredients: [
      { name: 'Jasny Rum', quantity: 4, color: colors.rum },
      { name: 'Sok z Limonki', quantity: 2, color: colors.lime },
      { name: 'Syrop Cukrowy', quantity: 1, color: colors.syrup },
    ],
  },
  {
    id: 6,
    name: 'Whiskey Sour',
    ingredients: [
      { name: 'Whiskey', quantity: 4, color: colors.whiskey },
      { name: 'Sok z Cytryny', quantity: 2, color: colors.lemon },
      { name: 'Syrop Cukrowy', quantity: 1, color: colors.syrup },
    ],
  },
  {
    id: 7,
    name: 'Mithering Bastard',
    ingredients: [
      { name: 'Whiskey', quantity: 5, color: colors.whiskey },
      { name: 'Cointreau', quantity: 2, color: colors.cointreau },
      { name: 'Sok Pomaranczowy', quantity: 3, color: colors.orange },
    ],
  },
  {
    id: 8,
    name: 'Apple Whiskey',
    ingredients: [
      { name: 'Whiskey', quantity: 2, color: colors.whiskey },
      { name: 'Sok Jabłkowy', quantity: 1, color: colors.apple },
      { name: 'Sok z Cytryny', quantity: 1, color: colors.lemon },
      { name: 'Syrop Cukrowy', quantity: 1, color: colors.syrup },
    ],
  },
  {
    id: 9,
    name: 'Gin & Tonic',
    ingredients: [
      { name: 'Gin', quantity: 2, color: colors.gin },
      { name: 'Tonic', quantity: 4, color: colors.tonic },
      { name: 'Sok z Limonki', quantity: 0.5, color: colors.lime },
    ],
  },
  {
    id: 10,
    name: 'Aperol Spritz',
    ingredients: [
      { name: 'Prosecco', quantity: 3, color: colors.prosecco },
      { name: 'Aperol', quantity: 2, color: colors.aperol },
      { name: 'Woda Gazowana', quantity: 1, color: colors.water },
    ],
  },
  {
    id: 11,
    name: 'Cosmopolitan',
    ingredients: [
      { name: 'Wódka', quantity: 2, color: colors.vodka },
      { name: 'Cointreau', quantity: 1, color: colors.cointreau },
      { name: 'Sok z Limonki', quantity: 1, color: colors.lime },
      { name: 'Sok z Żurawiny', quantity: 1, color: colors.cranberry },
    ],
  },
  {
    id: 12,
    name: 'Gin Daisy',
    ingredients: [
      { name: 'Gin', quantity: 2, color: colors.gin },
      { name: 'Sok z Cytryny', quantity: 1, color: colors.lemon },
      { name: 'Grenadyna', quantity: 1, color: colors.grenadine },
      { name: 'Woda Gazowana', quantity: 1, color: colors.water },
    ],
  },
  {
    id: 13,
    name: 'Orange Blossom',
    ingredients: [
      { name: 'Gin', quantity: 4, color: colors.gin },
      { name: 'Cointreau', quantity: 2, color: colors.cointreau },
      { name: 'Sok Pomarańczowy', quantity: 4, color: colors.orange },
      { name: 'Sok z Limonki', quantity: 2, color: colors.lime },
      { name: 'Grenadyna', quantity: 0.5, color: colors.grenadine },
    ],
  },
  {
    id: 14,
    name: 'Vodka Cranberry',
    ingredients: [
      { name: 'Wódka', quantity: 2, color: colors.vodka },
      { name: 'Sok z Żurawiny', quantity: 5, color: colors.cranberry },
      { name: 'Sok z Limonki', quantity: 1, color: colors.lime },
    ],
  },
];
