import { Badge } from "antd"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function CartWidget() {

    const { getTotalItems } = useContext(CartContext)

    return (
        <Badge count={getTotalItems()} showZero>
        <span style={{ fontSize: 24 }}>🛒</span>
        </Badge>
    )
}

export default CartWidget