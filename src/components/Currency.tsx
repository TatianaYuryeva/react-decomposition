/**
 * Показывает курс обмена валют.
 */

type Props = {
  usd: number,
  eur: number
}

function Currency({usd, eur}: Props) {

  return (
    <div className="currency">
      <div className="usd">USD {usd}</div>
      <div className="eur">EUR {eur}</div>
    </div>
  )
}

export default Currency