import { useState } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import style from './components/cards/cards.module.css'
import Nav from './components/Nav/Nav';


function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      return (
         <div>
            <div className='App'>
               <Nav onSearch={onSearch} />
               <Cards className={style.tarjetas} characters={characters} />
            </div>
         </div>
      );
   }

}

export default App;
