export const ProductInfo = ({ producto }) => {
  return (
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
        <p className='producto__desc'>{producto.description}</p>

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
  )
}
