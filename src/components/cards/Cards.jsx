import Card from '../Card/Card.jsx'
import style from './cards.module.css'

export default function Cards({ characters, onClose }) {
   return (
      <div className={style.tarjetas}>
         {characters.map(character => {
            return <Card characters={character} key={character.id} onClose={onClose} />
         })}
      </div>
   );
}