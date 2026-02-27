import './App.css'
import {Routes,Route} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Todos los productos"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/>} />
        <Route path='/item/:itemId' element={<h2 className='msj__subtitle'>Detalle del Producto</h2>} />
      </Routes>

      <ItemListContainer greeting="Cursos de React JS"/>
    </>
  );
}

export default App
