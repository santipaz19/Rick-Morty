import style from './Card.module.css'
export default function Card({ characters }) {
   return (
      <div >
         <button onClick={() => alert('Simulo el cierre')}>X</button>
         <div className={style.carta}>
            <div className={style.conteiner}>
               <h2 className={style.status}>{characters.status}</h2>
               <h2 className={style.status}>{characters.id}</h2>
            </div>
            <img className={style.imagePJ} src={characters.image} alt={characters.name} />
            <h1>{characters.name}</h1>
            <p>{characters.species}</p>
            <p>{characters.gender}</p>
            <p>{characters.origin.name}</p>
         </div>
      </div>
   );
}
