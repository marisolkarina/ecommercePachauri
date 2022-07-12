import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <ItemListContainer greetings="Hola soy un ItemLisContainer"/>
      
    </div>
  );
}

export default App;
