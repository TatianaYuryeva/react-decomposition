/**
 * Показывает виджет в верхней части страницы, рядом со списком новостей.
 */

type Props = {
  data: {
    image: string,
    title: string,
    text: string,
    link: string
  }
}

function ContentTopWidget({data}: Props) {

  return (
    <div>
      <img className="content-top__img" src={data.image} alt="" />
      <h3 className="header"><a href={data.link}>{data.title}</a></h3>
      <div className="text">{data.text}</div>
    </div>
  )
}

export default ContentTopWidget