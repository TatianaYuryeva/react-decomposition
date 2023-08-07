/**
 * Показывает список ссылок на разделы сайта.
 */

import {nanoid} from "nanoid"

type Props ={
  title: string,
  link: string
}

function Links({data}: any) {
  return (
    <div className="links">
      <ul className="links__list">
        {data.map((el: Props) => 
          <li className="links__list__item" key={nanoid()}>
            <a href={el.link}>{el.title}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Links