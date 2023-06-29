import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form"




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

   const { pathname } = useLocation()

   const location = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [location]);

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = 'santipaz19.02@gmail.com';
   const PASSWORD = 'miperraclara19';

   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== id))
   }


   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   return (
      <div className="App">
         {pathname !== "/" && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>

      </div>
   );
}

export default App;