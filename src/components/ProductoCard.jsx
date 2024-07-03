import { useState } from "preact/hooks";
import { productos } from "@/data/products";


export default function ProductoCard() {
  
    const [producto, setProducto] = useState(productos[0]);
        
    const handleClick = (product) => {        
        setProducto(product);
    }
    return (
        <div>
          <article id="card" class="producto__card">
              <aside class="producto__aside">
                    <h2 className="producto__name">{producto.name}</h2>
                    <p className="producto__price">
                    {typeof(producto.price)=="number" && 
                    <strong >{producto.price}€</strong>}
                    {typeof(producto.price)=="object" && 
                    producto.price.map((price)=>(
                    <strong >{price}€ |</strong>))}
                    </p>
                    <p>{producto.description}</p>
              
              
                <div className="producto__alergenos">
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
                className='productos__img'
                src={producto.image}
                alt={`Imagen de ${producto.name}`}
              
              />
              
          </article>

          
          
            <ul class='productos__grid'>
      
            {
              productos.map((product) => (
                  
                <li className='producto btn'  key={product.id} onClick={()=>handleClick(product)} >
                  {product.name}
                </li>
              ))
            }
          </ul>
          
      </div>
        
        
    );

    



}
