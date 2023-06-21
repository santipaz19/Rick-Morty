import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import { useLocation } from "react-router-dom";




function App() {
   const [characters, setCharacters] = useState([])

   const onSearch = (id) => {
      if (!id) alert('Ingresa un ID')
      if (characters.find(char => char.id === parseInt(id))) {
         alert(`Ya existe el personaje con el id ${id}`)
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data])
            }
         }).catch(err => alert(err.response.data.error))
   }

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== id))
   }

   const location = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   return (
      <div className="App">
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/Home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Detail/:id" element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;