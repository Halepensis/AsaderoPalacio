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
  name: {
    es: string
    en: string
  }
  price: number | { [size: string]: number }
  image: string
  category: string
  description: {
    es: string
    en: string
  }
  alergenos?: alergenos[]
  trazas?: alergenos[]
}
export const productos: Product[] = [
  {
    id: 1,
    name: {
      es: 'Pollo Asado',
      en: 'Roast Chicken'
    },
    price: { 1: 11, '1/2': 6 },
    image: '/images/galeria/Pollo Asado.webp',
    category: 'Caliente',
    description: {
      es: 'Pollo asado sazonado con hierbas naturales sin aditivos ni conservantes.',
      en: 'Roast chicken seasoned with natural herbs and without any additives or preservatives.'
    }
  },
  {
    id: 2,
    name: {
      es: 'Patatas Asadas',
      en: 'Baked Potatoes'
    },
    price: 5.8,
    image: '/images/galeria/Patatas Asadas.webp',
    category: 'Caliente',
    description: {
      es: 'Patatas confitadas a baja temperatura y terminadas en el horno',
      en: 'Confit potatoes finished in the oven'
    },
    trazas: ['Gluten']
  },
  {
    id: 3,
    name: {
      es: 'Patatas Fritas',
      en: 'Fries'
    },
    price: { S: 2.7, M: 4.9, G: 5.8 },
    image: '/images/galeria/Patatas Fritas.webp',
    category: 'Caliente',
    description: {
      es: 'Patatas fritas de bastones de 1cm de grosor de alta calidad',
      en: 'High quality 1cm thick stick chips'
    },
    trazas: ['Gluten']
  },
  {
    id: 4,
    name: {
      es: 'Muslo Relleno',
      en: 'Stuffed Chicken Thigh'
    },
    price: 8.0,
    image: '/images/galeria/Muslo Relleno.webp',
    category: 'Caliente',
    description: {
      es: 'Muslo de pollo deshuesado y relleno de jamón serrano y queso',
      en: 'Boneless chicken thigh stuffed with Serrano ham and cheese'
    },
    alergenos: ['Lacteos']
  },
  {
    id: 5,
    name: {
      es: 'Caracoles',
      en: 'Escargot'
    },
    price: 14.0,
    image: '/images/galeria/Caracoles.webp',
    category: 'Caliente',
    description: {
      es: 'Caracoles cabrilla con salsa picante y almendras',
      en: 'Goat snails with spicy sauce and almonds'
    },
    alergenos: ['Pescado', 'Sulfitos', 'Moluscos', 'Frutos de cascara']
  },
  {
    id: 6,
    name: {
      es: 'Croquetas',
      en: 'Croquettes'
    },
    price: 9.0,
    image: '/images/galeria/Croquetas.webp',
    category: 'Caliente',
    description: {
      es: 'Bandeja de 6 Ud, croquetas caseras de distintos tipos: Pollo , Jamón o de Setas shiitake',
      en: 'Trays of 6 units, homemade croquettes of different types: Chicken, Ham or Shiitake Mushrooms'
    },
    alergenos: ['Lacteos', 'Gluten']
  },
  {
    id: 7,
    name: {
      es: 'Empanadillas argentinas',
      en: 'Argentine Empanadas'
    },
    price: 2.8,
    image: '/images/galeria/Empanadilas.webp',
    category: 'Caliente',
    description: {
      es: 'Empanadillas argentinas de carne picada, aceituna y huevo duro',
      en: 'Argentine empanadas with minced meat, olives and hard-boiled egg'
    },
    alergenos: ['Gluten', 'Sulfitos', 'Lacteos', 'Huevos']
  },
  {
    id: 8,
    name: {
      es: 'Canelones de Pate',
      en: 'Pâté Cannelloni'
    },
    price: 7.2,
    image: '/images/galeria/Canelones.webp',
    category: 'Caliente',
    description: {
      es: 'Canelones  rellenos de pollo, pate de oca y setas',
      en: 'Cannelloni stuffed with chicken, goose pate and mushrooms'
    },
    alergenos: ['Lacteos', 'Gluten', 'Sulfitos']
  },
  {
    id: 9,
    name: {
      es: 'Paella',
      en: 'Paella'
    },
    price: 6,
    image: '/images/galeria/Paella.webp',
    category: 'Caliente',
    description: {
      es: 'Paella de pollo y verduras, con caldo de huesos casero',
      en: 'Chicken and vegetable paella'
    },
    alergenos: ['Apio']
  },
  {
    id: 10,
    name: {
      es: 'Salmorejo',
      en: 'Salmorejo'
    },
    price: 3.5,
    image: '/images/galeria/Salmorejo.webp',
    category: 'Frio',
    description: {
      es: 'Salmorejo suave, hecho con tomates maduros y pan de masa madre',
      en: 'Salmorejo'
    },
    alergenos: ['Gluten', 'Sulfitos']
  },

  {
    id: 11,
    name: {
      es: 'Ensalada Mixta',
      en: 'Mixed Salad'
    },
    price: 3.5,
    image: '/images/galeria/Ensalada Mixta.webp',
    category: 'Frio',
    description: {
      es: 'Ensalada mixta con lechuga, tomate, zanahoria, maiz y pepinillos',
      en: 'Mixed salad with lettuce, tomato, carrot, corn and pickles'
    },
    alergenos: ['Sulfitos']
  },
  {
    id: 12,
    name: {
      es: 'Alioli',
      en: 'Garlic Sauce'
    },
    price: 1.7,
    image: '/images/galeria/alioli.webp',
    category: 'Frio',
    description: {
      es: 'Salsa alioli poco picante hecha con ajo y aceite',
      en: 'Mild aioli sauce made with garlic and oil'
    },
    alergenos: ['Lacteos']
  }
]
