/**
 * Показывает список новостей и текущие дату, день недели и время.
 */

import {nanoid} from "nanoid"

type News = {
  icon: string,
  text: string,
  link: string
}

function News({data}: any) {

  const date = new Date()
  const options: any = {
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric'
  };
  const weekDay = date.toLocaleString('ru', options).split(', ')[0]
  const monthDay = date.toLocaleString('ru', options).split(', ')[1].split(' в ')[0]
  const time = date.toLocaleString('ru', options).split(', ')[1].split(' в ')[1]

  return (
    <div className="news">
      <div className="news__header">
      <h3 className="header news__header">Сейчас в СМИ</h3>
      <div className="news__time">{`${monthDay}, ${weekDay} ${time}`}</div>
      </div>
      <ul className="news__list">
        {data.map((el: News) => 
          <li className="news__list__item" key={nanoid()}>
            <img className="icon" src={el.icon} alt="icon" />
            <a href={el.link}>{el.text}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default News