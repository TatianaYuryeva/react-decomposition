/**
 * Показывает баннер.
 */

type Props ={
  image: string,
  link: string
}

function Banner({image, link}: Props) {
  return(
    <a href={link}>
      <img className="banner" src={image} alt="" />
    </a>
  )
}

export default Banner