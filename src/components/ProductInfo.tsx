import { type Product } from '@/data/products'
import { p } from 'dist/_astro/hooks.module.DAVxqLZr'
export const ProductInfo = ({
  producto,
  lang
}: {
  producto: Product
  lang: string
}) => {
  return (
    <article id='card' class='producto__card'>
      <aside class='producto__aside'>
        <h2 className='producto__name'>
          {lang === 'es' && producto.name.es}
          {lang === 'en' && producto.name.en}
        </h2>
        <p className='producto__price'>
          {typeof producto.price == 'number' && (
            <strong>{producto.price}€</strong>
          )}

          {typeof producto.price == 'object' &&
            Object.entries(producto.price).map(([size, price]) => {
              return (
                <strong>
                  {size} : {price}€ |
                </strong>
              )
            })}
        </p>
        <p className='producto__desc'>
          {lang === 'es' && producto.description.es}
          {lang === 'en' && producto.description.en}
        </p>

        <div className='producto__alergenos'>
          {producto.alergenos
            ? producto.alergenos.map((alergeno) => (
                <img
                  class='alergenos__icon'
                  src={`/icons/alergenos/${alergeno}.png`}
                  title={alergeno}
                  alt={alergeno}
                />
              ))
            : 'Sin alergenos'}
        </div>
      </aside>
      <img
        key={producto.image}
        className='productos__img'
        src={producto.image}
        alt={`Foto de ${producto.name.es}`}
      />
    </article>
  )
}
