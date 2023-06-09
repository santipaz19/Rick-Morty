import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import characters, { Rick } from './data.js';
import style from './components/cards/cards.module.css'

function App() {
   return (
      <div>
         <div className='App'>
            <div className='nav'>
               <SearchBar onSearch={(characterID) => window.alert(characterID)} />
            </div>
            <div className='contenedor'>
               <Cards className={style.tarjetas} characters={characters} />
            </div>
         </div>
      </div>
   );
}

export default App;
