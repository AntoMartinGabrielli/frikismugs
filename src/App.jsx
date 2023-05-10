import './App.css';
/* import CartWidget from './Components/CartWidget'; */
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
/* import ItemList from './Components/ItemList'; */
/* import Titulo from './Components/Titulo'; */
/* import ItemCount from './Components/ItemCount'; */
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="App-body">
        <ItemListContainer greeting={'¡Bienvenidos a Frikis Mugs!'}/>
        <ItemDetailContainer></ItemDetailContainer>
      </div>
    </div>
  );
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <div className="App-body">
        <ItemListContainer greeting={'¡Bienvenidos a Frikis Mugs!'}/>
        <ItemCount inicial={1} stock={10} onAdd={(cantidad)=> console.log('Cantidad agregada', cantidad)}></ItemCount>
      </div>
    </div>
  );
} */

export default App;
