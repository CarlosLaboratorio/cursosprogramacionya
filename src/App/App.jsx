import './App.css'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Cursos de React JS"/>
    </>
  );
}

export default App
