import './App.css'
import {Routes,Route} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Todas las categorias"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/>} />
        <Route path='/item/:itemId' element={<h2 className='msj__subtitle'>Detalles de la selección</h2>} />
      </Routes>

    </>
  );
}

export default App
