import image0 from './assets/coffee1.svg'
import image1 from './assets/coffee2.svg'
import image2 from './assets/coffee3.svg'
import image3 from './assets/coffee4.svg'
import image4 from './assets/coffee5.svg'
import image5 from './assets/coffee6.svg'
import image6 from './assets/coffee7.svg'
import image7 from './assets/coffee8.svg'
import image8 from './assets/coffee9.svg'
import image9 from './assets/coffee10.svg'
import image10 from './assets/coffee11.svg'
import image11 from './assets/coffee12.svg'
import image12 from './assets/coffee13.svg'
import image13 from './assets/coffee14.svg'

interface dataProps {
  id: string
  name: string
  tags: string[]
  description: string
  price: string
  src: string
}

export const data: dataProps[] = [
  {
    id: '0',
    name: 'Expresso Tradicional',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$ 9,90',
    src: image0,
  },
  {
    id: '1',
    name: 'Expresso Americano',
    tags: ['Tradicional'],
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 'R$ 9,90',
    src: image1,
  },
  {
    id: '2',
    name: 'Expresso Cremoso',
    tags: ['Tradicional'],
    description: 'Café expresso tradicional com espuma cremosa',
    price: 'R$ 9,90',
    src: image2,
  },
  {
    id: '3',
    name: 'Expresso Gelado',
    tags: ['Tradicional', 'Gelado'],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 'R$ 9,90',
    src: image3,
  },
  {
    id: '4',
    name: 'Café com Leite',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 'R$ 9,90',
    src: image4,
  },
  {
    id: '5',
    name: 'Latte',
    tags: ['Tradicional', 'Com leite'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 'R$ 9,90',
    src: image5,
  },
  {
    id: '6',
    name: 'Capuccino',
    tags: ['Tradicional', 'Com leite'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 'R$ 9,90',
    src: image6,
  },
  {
    id: '7',
    name: 'Macchiato',
    tags: ['Tradicional', 'Com leite'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 'R$ 9,90',
    src: image7,
  },
  {
    id: '8',
    name: 'Mocaccino',
    tags: ['Tradicional', 'Com leite'],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 'R$ 9,90',
    src: image8,
  },
  {
    id: '9',
    name: 'Chocolate Quente',
    tags: ['Especial', 'Gelado'],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 'R$ 9,90',
    src: image9,
  },
  {
    id: '10',
    name: 'Cubano',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 'R$ 9,90',
    src: image10,
  },
  {
    id: '11',
    name: 'Havaiano',
    tags: ['Especial'],
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 'R$ 9,90',
    src: image11,
  },

  {
    id: '12',
    name: 'Árabe',
    tags: ['Especial'],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 'R$ 9,90',
    src: image12,
  },
  {
    id: '13',
    name: 'Irlandês',
    tags: ['Especial', 'Alcoólico'],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 'R$ 9,90',
    src: image13,
  },
]
