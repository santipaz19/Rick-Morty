
import style from './Card.module.css'
export default function Card({ characters }) {
   return (
      <div className={style.carta}>
         <button className={style.close} onClick={characters.onClose}>X</button>
         <div className={style.conteiner}>
            <h2 className={style.status}>{characters.status}</h2>
            <h2 className={style.status}>{characters.id}</h2>
         </div>
         <img className={style.imagePJ} src={characters.image} alt={characters.name} />
         <h1 className={style.info}>{characters.name}</h1>
         <p className={style.info}>{characters.species}</p>
         <p className={style.info}>{characters.gender}</p>
         <p className={style.info}>{characters.origin.name}</p>
      </div>
   );
}
