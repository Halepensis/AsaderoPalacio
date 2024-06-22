import { useState } from "preact/hooks";
import { productos } from "@/data/products";
import './ProductoCard.css';


export default function ProductoCard() {
    const [producto, setProducto] = useState(productos[0]);
        
    const handleClick = (product) => {
        setProducto(product);
    }
    return (
        <div>
          <article class="producto__card">
              <div class="producto__title">
                    <h2 class="producto__name">{producto.name}</h2>
                    {typeof(producto.price)=="number" && 
                    <strong class="producto__price">{producto.price}€</strong>}
                    {typeof(producto.price)=="object" && 
                    producto.price.map((price)=>(
                    <strong class="producto__price">{price}€ |</strong>))}
              </div>
              
              <aside class="producto__alergenos">
                {producto.alergenos?.map(alergeno=>(
                  <img class="alergenos__icon" 
                  src={`icons/alergenos/${alergeno}.png`} 
                  title={alergeno} 
                  alt={alergeno}
                  />
                  ))
              }
              </aside>
              <img
                class='productos__img'
                src={producto.image}
                alt={`Imagen de ${producto.name}`}
              />
              <p>{producto.description}</p>
              
          </article>
            <ul class='productos__grid'>
            {
              productos.map((product) => (
                <button key={product.id} onClick={()=>handleClick(product)} class='producto'>
                  {product.name}
                </button>
              ))
            }
          </ul>
          
      </div>
        
        
    );

    



}
