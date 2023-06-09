import Card from '../Card/Card';
import style from './cards.module.css'

export default function Cards({ characters }) {
   return (
      <div className={style.tarjetas}>
         {characters.map(character => {
            return <Card characters={character} key={character.id} />
         })}
      </div>
   );
}