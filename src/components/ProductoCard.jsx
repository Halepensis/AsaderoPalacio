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
          <article  class="producto__card">
              <aside class="producto__aside">
                    <h2 class="producto__name">{producto.name}</h2>
                    <p class="producto__price">
                    {typeof(producto.price)=="number" && 
                    <strong >{producto.price}€</strong>}
                    {typeof(producto.price)=="object" && 
                    producto.price.map((price)=>(
                    <strong >{price}€ |</strong>))}
                    </p>
                    <p>{producto.description}</p>
              
              
                <div class="producto__alergenos">
                  {producto.alergenos? 
                  producto.alergenos.map(alergeno=>(
                    <img class="alergenos__icon" 
                    src={`icons/alergenos/${alergeno}.png`} 
                    title={alergeno} 
                    alt={alergeno}
                    />
                    ))
                    :"Sin alergenos"}
              </div>
              </aside>
              <img
              key={producto.id}
                class='productos__img'
                src={producto.image}
                alt={`Imagen de ${producto.name}`}
              
              />
              
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
