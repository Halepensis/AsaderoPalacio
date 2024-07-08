type alergenos =
  | 'Gluten'
  | 'Crustaceos'
  | 'Huevos'
  | 'Pescado'
  | 'Cacahuetes'
  | 'Soja'
  | 'Lacteos'
  | 'Frutos de cascara'
  | 'Apio'
  | 'Mostaza'
  | 'Granos de sesamo'
  | 'Sulfitos'
  | 'Altramuces'
  | 'Moluscos'

export interface Product {
  id: number
  name: string
  price: number | number[]
  image: string
  category: string
  description: string
  alergenos?: alergenos[]
  trazas?: alergenos[]
}
export const productos: Product[] = [
  {
    id: 1,
    name: 'Pollo Asado',
    price: 11.0,
    image: 'images/galeria/Pollo Asado.webp',
    category: 'Caliente',
    description:
      'Pollo asado condimentado con hierbas naturales sin adivitivos ni conservantes.'
  },
  {
    id: 2,
    name: 'Patatas Asadas',
    price: 4.8,
    image: 'images/galeria/Patatas Asadas.webp',
    category: 'Caliente',
    description: 'Patatas confitadas terminadas en el horno',
    trazas: ['Gluten']
  },
  {
    id: 3,
    name: 'Patatas Fritas',
    price: [2.1, 3.5, 4.5],
    image: 'images/galeria/Patatas Fritas.webp',
    category: 'Caliente',
    description: 'Patatas fritas de bastones de 1cm de grosor de alta calidad',
    trazas: ['Gluten']
  },
  {
    id: 4,
    name: 'Muslo Relleno',
    price: 8.0,
    image: 'images/galeria/Muslo Relleno.webp',
    category: 'Caliente',
    description: 'Muslo de pollo deshuesado y relleno de jamon serrano y queso',
    alergenos: ['Lacteos']
  },
  {
    id: 5,
    name: 'Caracoles',
    price: 12.0,
    image: 'images/galeria/Caracoles.webp',
    category: 'Caliente',
    description: 'Caracoles cabrilla con salsa picante y almendras',
    alergenos: ['Pescado', 'Sulfitos', 'Moluscos', 'Frutos de cascara']
  },
  {
    id: 6,
    name: 'Croquetas',
    price: 7.2,
    image: 'images/galeria/Croquetas.webp',
    category: 'Caliente',
    description:
      'Bandejas de 6 Ud, croquetas caseras de distintos tipos: Pollo , Jamon o de Setas shitake',
    alergenos: ['Lacteos', 'Gluten']
  },
  {
    id: 7,
    name: 'Empanadillas argentinas',
    price: 2.5,
    image: 'images/galeria/Empanadilas.webp',
    category: 'Caliente',
    description:
      'Empanadillas argentinas de carne picada, aceituna y huevo duro',
    alergenos: ['Gluten', 'Sulfitos', 'Lacteos', 'Huevos']
  },
  {
    id: 8,
    price: 7.2,
    name: 'Canelones de Pate',
    image: 'images/galeria/Canelones.webp',
    category: 'Caliente',
    description: 'Canelones  rellenos de pollo, pate de oca y setas',
    alergenos: ['Lacteos', 'Gluten', 'Sulfitos']
  },
  {
    id: 9,
    name: 'Paella',
    price: 5.2,
    image: 'images/galeria/Paella.webp',
    category: 'Caliente',
    description: 'Paella de pollo y verduras',
    alergenos: ['Apio']
  },
  {
    id: 10,
    name: 'Salmorejo',
    price: 3.5,
    image: 'images/galeria/Salmorejo.webp',
    category: 'Frio',
    description: 'Salmorejo',
    alergenos: ['Gluten', 'Sulfitos']
  },

  {
    id: 11,
    name: 'Ensalada Mixta',
    price: 3.5,
    image: 'images/galeria/Ensalada Mixta.webp',
    category: 'Frio',
    description:
      'Ensalada mixta con lechuga, tomate, zanahoria, maiz y pepinillos',
    alergenos: ['Sulfitos']
  },
  {
    id: 12,
    name: 'Alioli',
    price: 1.5,
    image: 'images/galeria/Pollo Asado.webp',
    category: 'Frio',
    description: 'Salsa alioli poco picante hecha con ajo y aceite',
    alergenos: ['Lacteos']
  }
]
