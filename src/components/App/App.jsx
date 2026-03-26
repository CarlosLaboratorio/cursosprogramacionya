import './App.css'
import 'antd/dist/reset.css'
import {Routes,Route} from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ItemDetail from '../ItemDetail/ItemDetail';
import Cart from "../Cart/Cart"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Todas las categorias"/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting="Productos por Categoria"/>} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />

    </>
  );
}

export default App
