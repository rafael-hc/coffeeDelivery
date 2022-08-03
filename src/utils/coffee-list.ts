import { v4 as uuidv4 } from 'uuid'

export type Tag =
  | 'Tradicional'
  | 'Gelado'
  | 'Com leite'
  | 'Especial'
  | 'Alcoólico'

export interface ProductCoffee {
  id: string
  name: string
  urlImage: string
  tags: Tag[]
  description: string
  price: number
}

export const coffeeList: ProductCoffee[] = [
  {
    id: uuidv4(),
    name: 'Expresso Tradicional',
    urlImage: '/Coffee/expresso.png',
    tags: ['Tradicional'],
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    urlImage: '/Coffee/americano.png',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    urlImage: '/Coffee/expresso-cremoso.png',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    urlImage: '/Coffee/cafe-gelado.png',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    urlImage: '/Coffee/cafe-com-leite.png',
    tags: ['Tradicional', 'Com leite'],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    urlImage: '/Coffee/latte.png',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Cappuccino',
    urlImage: '/Coffee/capuccino.png',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    urlImage: '/Coffee/macchiato.png',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Mochaccino',
    urlImage: '/Coffee/mochaccino.png',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    urlImage: '/Coffee/chocolate-quente.png',
    tags: ['Especial', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    urlImage: '/Coffee/cubano.png',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    urlImage: '/Coffee/havaiano.png',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    urlImage: '/Coffee/arabe.png',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: uuidv4(),
    name: 'Irlandês',
    urlImage: '/Coffee/irlandes.png',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]
