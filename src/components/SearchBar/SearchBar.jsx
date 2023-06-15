import style from './searchbar.module.css'
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   };
   const handleSearch = () => {
      onSearch(id);
   };
   return (
      <div>
         <input type='search' value={id} className={style.search} onChange={handleChange} />
         <button className={style.btn} onClick={handleSearch}>Agregar</button>
      </div>
   );
}
