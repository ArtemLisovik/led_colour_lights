import { Link } from 'react-router-dom'
import './SectionPromo.scss'

import promo from 'assets/img/promo.mp4'

type SectionPromoType = {
  image?: string,
  video?: string,
  text: string,
  title: string,
  btn?: string,
  btnLink?: string
}
export const SectionPromo = ({image, video, title, text, btn, btnLink}: SectionPromoType) => {
  return (
    <section className="promo">

      {image && <img className='promo__poster' src={image}/>}
      {video && <video autoPlay loop muted={true} playsInline>
        <source src={promo} type="video/mp4"/>
        {/* <source src="./assets/promo.webm" type="video/webm"> */}
    </video>}


      <div className="info__wrapper info">
        <div className="container promo__container">
          <h1 className="info__title">{title}</h1>
          <p className="info__descr">{text}</p>
          {btn && <Link to={btnLink as string} className="info__button">{btn}</Link>}
        </div>
      </div>

    </section>
  )
}
