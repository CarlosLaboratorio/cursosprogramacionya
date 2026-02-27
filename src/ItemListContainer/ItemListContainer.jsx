import "./ItemListContainer.css"
import {useParams} from 'react-router-dom'

function ItemListContainer ({greeting}) {

    const {categoryId} = useParams()

    console.log(categoryId)

    return (
    <>
        <h2 className="msj__subtitle">{greeting}</h2>
        {categoryId && <p>Categoria seleccionada: {categoryId}</p>}
    </>
    )

}

export default ItemListContainer