import { Card } from "antd"
import { Link } from "react-router-dom"

const { Meta } = Card

function ItemCard({ product }) {
    return (
        <Card
        hoverable
        style={{ width: 260 }}
        cover={
            <img
            alt={product.name}
            src={product.img}
            />
        }
        >
        <Meta
            title={product.name}
            description={`Tipo: ${product.type}`}
        />

        <p>Popularidad: {product.popularity}%</p>

        <Link to={`/item/${product.id}`}>
            Ver detalle
        </Link>
        </Card>
    )
    }

export default ItemCard