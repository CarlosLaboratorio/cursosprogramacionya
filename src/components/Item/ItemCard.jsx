import {Link} from 'react-router-dom'

function ItemCard({ product }) {
    return (
        <div className="card">
        <h3 className="card__title">{product.name}</h3>
        <img src={product.img} alt={product.name} className="card__image" />
        <p className="card__type">{product.type}</p>
        <p className="card__popularity">
            Popularidad: {product.popularity}%
        </p>
        <Link to={`/item/${product.id}`}>
            Ver detalles
        </Link>
        </div>
    )
}

export default ItemCard