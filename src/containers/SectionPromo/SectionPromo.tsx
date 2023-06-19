import './SectionPromo.scss'

import promo from 'assets/img/promo.mp4'

export const SectionPromo = () => {
  return (
    <section className="Promo">

      <video autoPlay loop muted={true}>
        <source src={promo} type="video/mp4"/>
        {/* <source src="./assets/promo.webm" type="video/webm"> */}
    </video>


      <div className="info__wrapper info">
        <div className="container">
          <h1 className="info__title">Led Colour Lights</h1>
          <p className="info__descr">It’s the little things that make a home, from luxury home fragrances by the best
            perfumers to scented candles.</p>
          <a href="./catalogue.html" className="info__button">Детальніше</a>
        </div>
      </div>

    </section>
  )
}
