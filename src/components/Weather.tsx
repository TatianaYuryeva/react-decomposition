/**
 * Показывает виджет погоды.
 */

type Props = {
  data: {
    link: string
    image: string,
    temperature: {
      now: string,
      morning: string,
      afternoon: string
    } 
  }
}

function Weather({data}: Props) {

  return (
    <div className="weather">
      <a className="weather__header header" href={data.link}>Погода</a>
      <div className="weather__content">
        <img className="weather__content__img" src={data.image} alt="" />
        <div className="temperature-now">{data.temperature.now}°</div>
        <div>
          <div>Утром {data.temperature.morning}</div>
          <div>Днем {data.temperature.afternoon}</div>
        </div>
      </div>
    </div>
  )
}

export default Weather