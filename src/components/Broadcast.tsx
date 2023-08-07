/**
 * Показывает список тв-программ, идущих в эфире.
 */

import {nanoid} from "nanoid"

type Broadcast = {
  title: string,
  channel: string,
  link: string
}

function Broadcast({data}: any) {
  return (
    <div className="broadcast">
      <h3 className="header">Эфир</h3>
      <ul>
        {data.map((el: Broadcast) => 
        <li className="broadcast__list__item" key={nanoid()}>
          <img className="icon broadcast__icon" src="./play.png" alt="play" />
          <a className="title broadcast__title" href={el.link}>{el.title}</a>
          <div className="channel broadcast__channel">{el.channel}</div>
        </li>
        )}
      </ul>
    </div>
  )
}

export default Broadcast