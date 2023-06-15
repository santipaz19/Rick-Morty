import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'
export default function Nav({ onSearch }) {
    return (
        <div className='nav-container'>
            <div className='nav'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' alt='logo' className={style.rick}></img>
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
    );
}