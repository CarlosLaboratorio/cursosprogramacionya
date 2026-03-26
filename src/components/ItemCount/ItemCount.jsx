import { useState } from 'react'
import "./ItemCount.css"

function ItemCount({ onAdd }) {

    const [count, setCount] = useState(1)

    const increase = () => setCount(prev => prev + 1)

    const decrease = () => {
        if (count > 1) setCount(prev => prev - 1)
    }

    return (
        <div className='itemcount'>
            
            <div className='itemcount__controls'>
                <button onClick={decrease}>-</button>
                <span className='itemcount__number'>{count}</span>
                <button onClick={increase}>+</button>
            </div>

            <button 
                className="itemcount__add-btn"
                onClick={() => onAdd(Number(count))}
            >
                Agregar {count} al carrito
            </button>

        </div>
    )
}

export default ItemCount