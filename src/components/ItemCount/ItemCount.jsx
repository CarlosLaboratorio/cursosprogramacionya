import {useState} from 'react'
import "./ItemCount.css"

function ItemCount () {
    const [count,setCount] = useState(1)

    const increase = () => setCount(count+1)
    const decrease = () => {
        if (count>1) setCount(count-1)
    }
    return (
        <div className='counter'>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button className="add-btn">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount