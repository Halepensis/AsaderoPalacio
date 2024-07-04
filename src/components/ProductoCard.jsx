import { useEffect, useRef, useState } from 'preact/hooks'
import { productos } from '@/data/products'


export default function ProductoCard() {
  const [scrollPosition, setScrollPosition] = useState({  scrollLeft: 0 });
  const [LeftArrow,setLeftArrow]= useState(false)
  const [RightArrow,setRightArrow]=useState(true)
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      setScrollPosition({ scrollLeft });
      
    }
  };
  const CheckLeftArrow = ()=>{
    if (scrollPosition.scrollLeft>0){
     setLeftArrow(true)
    }
    else(setLeftArrow(false))
  }
  const CheckRightArrow = ()=>{
    if (scrollPosition.scrollLeft>=1300){
     setRightArrow(false)
    }
    else(setRightArrow(true))
  }
  const [producto, setProducto] = useState(productos[0])
 

  


    
  
  
  const rightArrow = ()=>{
    scrollRef.current.scrollLeft +=200
    handleScroll()
    CheckLeftArrow()
    CheckRightArrow()

  
  }
  const leftArrow = ()=>{
    scrollRef.current.scrollLeft -=200
    handleScroll()
    CheckLeftArrow()
    CheckRightArrow()
    
  }

  const handleClick = (product) => {
    setProducto(product)
  }
  return (
    <div>
      <article id='card' class='producto__card'>
        <aside class='producto__aside'>
          <h2 className='producto__name'>{producto.name}</h2>
          <p className='producto__price'>
            {typeof producto.price == 'number' && (
              <strong>{producto.price}€</strong>
            )}
            {typeof producto.price == 'object' &&
              producto.price.map((price) => <strong>{price}€ |</strong>)}
          </p>
          <p>{producto.description}</p>

          <div className='producto__alergenos'>
            {producto.alergenos
              ? producto.alergenos.map((alergeno) => (
                  <img
                    class='alergenos__icon'
                    src={`icons/alergenos/${alergeno}.png`}
                    title={alergeno}
                    alt={alergeno}
                  />
                ))
              : 'Sin alergenos'}
          </div>
        </aside>
        <img
          key={producto.id}
          className='productos__img'
          src={producto.image}
          alt={`Imagen de ${producto.name}`}
        />
      </article>

      <div className={'productos__wrapper'}>
       
        <ul class='productos__grid' ref={scrollRef}>

          {productos.map((product) => (
            <li
              className={`producto btn ${product.id === producto.id ? 'btn-active' : ''} `}
              key={product.id}
              onClick={() => handleClick(product)}
            >
              {product.name}
            </li>
          ))}
        </ul>
        
        {LeftArrow && <div id={'left-arrow'} className={'left-arrow'}  onClick={() => {
            leftArrow()
          }}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18'
            />
          </svg>
        </div> }
        {RightArrow && <div
          id={'right-arrow'}
          className={'right-arrow active'}
          onClick={() => {
            rightArrow()
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            class='size-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
            />
          </svg>
        </div>}
      </div>
    </div>
  )
}
