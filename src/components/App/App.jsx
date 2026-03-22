import './App.css'
import {Routes,Route} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';
import ItemDetail from '../ItemDetail/ItemDetail';

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Todas las categorias"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/>} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
      </Routes>

    </>
  );
}

export default App
