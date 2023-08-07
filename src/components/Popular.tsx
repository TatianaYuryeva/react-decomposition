/**
 * Показывает разделы в нижней части страницы.
 * Можно передавать заголовок и данные для списка ссылок
 */

import {nanoid} from "nanoid"

type Item = {
  title: string,
  link: string,
  text?: string
}

function Popular({header, data}: any) {
  return (
    <div>
      <h3 className="header popular__header">{header}</h3>
      <ul>
        {data.map((el: Item) => 
        <li className="popular__list__item" key={nanoid()}>
          <a className="title popular__title" href={el.link}>{el.title}</a>
          <span>{el.text ? '-' + el.text : ''}</span>
        </li>
        )}
      </ul>
    </div>
  )
}

export default Popular