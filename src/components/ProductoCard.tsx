import { useState } from 'preact/hooks'
import { productos } from '@/data/products'
import { ListOfProducts } from '@/components/ListOfProducts'
import { ProductInfo } from '@/components/ProductInfo'
import { type Product } from '@/data/products'

export default function ProductoCard({ lang }) {
  const [producto, setProducto] = useState(() => {
    const productFromStorage = window.localStorage.getItem('product')
    return productFromStorage ? JSON.parse(productFromStorage) : productos[0]
  })

  const handleClick = (product: Product) => {
    const newProduct = product
    setProducto(newProduct)
    window.localStorage.setItem('product', JSON.stringify(newProduct))
  }
  return (
    <div>
      <ProductInfo producto={producto} lang={lang} />
      <ListOfProducts
        lang={lang}
        productos={productos}
        handleClick={handleClick}
        producto={producto}
      />
    </div>
  )
}
