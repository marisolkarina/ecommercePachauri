import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart'
import CartContextProvider from './components/CartContext'

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/category/:id" element={<ItemListContainer />}/>
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {/* <ItemListContainer greetings="Hola Soy un ItemLisContainer"/> */}
        {/* <ItemDetailContainer/> */}
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
