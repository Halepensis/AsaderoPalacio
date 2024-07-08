import { useState } from 'preact/hooks'
import { productos } from '@/data/products'
import { ListOfProducts } from '@components/ListOfProducts.jsx'
import { ProductInfo } from '@/components/ProductInfo.jsx'

export default function ProductoCard() {
 
  const [producto, setProducto] = useState(()=>{
    const productFromStorage = window.localStorage.getItem('product')
    return productFromStorage? JSON.parse(productFromStorage) : productos[0]})

  const handleClick = (product) => {
    const newProduct = product
    setProducto(newProduct)
    window.localStorage.setItem('product',JSON.stringify(newProduct))

  }
  return (
    <div>
      
      <ProductInfo producto={producto}/>
      <ListOfProducts  productos={productos} handleClick={handleClick} producto={producto}/>

      
    </div>
  )
}
