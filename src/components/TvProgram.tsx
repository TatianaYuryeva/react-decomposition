/**
 * Показывает тв-программу на ближайшее время.
 */

import {nanoid} from "nanoid"

type Tv = {
  time: string,
  title: string,
  channel: string,
  link: string
}
function TvProgram({data}: any) {

  return (
    <div className="tv-program">
      <h3 className="header tv-program__header">Телепрограмма</h3>
      <ul>
        {data.map((el: Tv) => 
        <li className="tv-program__list__item" key={nanoid()}>
          <div className="tv-program__time">{el.time}</div>
          <a className="title tv-program__title" href={el.link}>{el.title}</a>
          <div className="channel tv-program__channel">{el.channel}</div>
        </li>
        )}
      </ul>
    </div>
  )
}

export default TvProgram