import SearchBar from "../SearchBar/SearchBar";
import style from './nav.module.css'
import { Link } from "react-router-dom";

export default function Nav({ onSearch }) {
    return (
        <div className={style.navContainer}>
            <div className={style.nav}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png' alt='logo' className={style.rick}></img>
                <Link className={style.home} to={'/home'}>
                    <p>Home</p>
                </Link>
                <Link className={style.home} to={'/about'}>
                    <p>About</p>
                </Link>
                <SearchBar onSearch={onSearch} />
            </div>
        </div >
    );
}