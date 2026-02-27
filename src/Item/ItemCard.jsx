function ItemCard({ product }) {
    return (
        <div className="card">
        <h3 className="card__title">{product.name}</h3>
        <p className="card__type">{product.type}</p>
        <p className="card__popularity">
            Popularidad: {product.popularity}%
        </p>
        <p className="card__description">
            {product.description}
        </p>
        </div>
    )
}

export default ItemCard