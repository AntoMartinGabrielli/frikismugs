import './App.css';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import Lista from './Components/Lista';
import Titulo from './Components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <ItemListContainer greeting={'¡Bienvenidos a Frikis Mugs!'}/>
      </header>
    </div>
  );
}

export default App;
