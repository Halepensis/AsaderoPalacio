import { useState, useRef, useEffect } from 'preact/hooks'
import { type Product } from '@/data/products'

export const ListOfProducts = ({
  productos,
  handleClick,
  producto,
  lang
}: {
  productos: Product[]
  handleClick: (product: Product) => void
  producto: Product
  lang: string
}) => {
  const [scrollPosition, setScrollPosition] = useState(() => {
    const scrollFromStorage = window.localStorage.getItem('scroll-bar')
    return scrollFromStorage ? JSON.parse(scrollFromStorage) : { scrollLeft: 0 }
  })
  const [LeftArrow, setLeftArrow] = useState(false)
  const [RightArrow, setRightArrow] = useState(true)
  const scrollRef = useRef(null)
  useEffect(() => {
    if (scrollRef) {
      scrollRef.current.scrollLeft = scrollPosition
      CheckLeftArrow(scrollPosition)
      CheckRightArrow(scrollPosition)
    }
  }, [])

  const CheckLeftArrow = (newScrollLeft) => {
    if (newScrollLeft >= 0) {
      setLeftArrow(true)
    } else setLeftArrow(false)
  }
  const CheckRightArrow = (newScrollLeft) => {
    if (newScrollLeft >= 1500) {
      setRightArrow(false)
    } else setRightArrow(true)
  }
  const handleScroll = (newScrollLeft) => {
    setScrollPosition({ scrollLeft: newScrollLeft })
    CheckLeftArrow(newScrollLeft)
    CheckRightArrow(newScrollLeft)
    window.localStorage.setItem('scroll-bar', JSON.stringify(newScrollLeft))
  }
  const rightArrow = () => {
    const newScrollLeft = (scrollRef.current.scrollLeft += 200)
    handleScroll(newScrollLeft)
  }
  const leftArrow = () => {
    const newScrollLeft = (scrollRef.current.scrollLeft -= 200)
    handleScroll(newScrollLeft)
  }
  return (
    <div className={'productos__wrapper'}>
      <ul class='productos__grid' ref={scrollRef}>
        {productos.map((product) => (
          <li
            className={`producto btn ${product.id === producto.id ? 'btn-active' : ''} `}
            key={product.id}
            onClick={() => handleClick(product)}
          >
            {lang === 'es' && product.name.es}
            {lang === 'en' && product.name.en}
          </li>
        ))}
      </ul>

      {LeftArrow && (
        <div
          id={'left-arrow'}
          className={'left-arrow'}
          onClick={() => {
            leftArrow()
          }}
        >
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
        </div>
      )}
      {RightArrow && (
        <div
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
        </div>
      )}
    </div>
  )
}
