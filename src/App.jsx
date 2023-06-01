import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}


export default App;
