import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { DocumentData, doc, getDoc} from "firebase/firestore"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faTiktok, faFacebook, faViber, faTelegram, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faB, faCheckSquare, faCoffee, faDatabase, faHouseLaptop, faS, faWindowMaximize } from '@fortawesome/free-solid-svg-icons';


import {db} from 'config/firebase'
import { Logo } from 'containers'
// import {DesktopMenu} from 'containers/Menu/Menu'

import './Footer.scss'

export const Footer = () => {
  const [socials, setSocials] = useState<DocumentData>()


  useEffect(() => {
    const getLinks = async () => {
      const linksRef = doc(db, 'socials links', 'socials')
      const links = await getDoc(linksRef)
      setSocials(links.data())
    }
    getLinks()
  }, [])

  return (
    <footer className="footer">
    <div className="footer__wrapper">
      <div className="container">

        <div className="footer__block">

          <div className="footer__info">
            <h4 className="footer__title">Інформація</h4>
            <ul className="footer__list">
              <li className="footer__item"><Link to='/information' className="footer__link">Доставка</Link></li>
              <li className="footer__item"><Link to='/information' className="footer__link">Оплата</Link></li>
              <li className="footer__item"><Link to='/information' className="footer__link">Повернення</Link></li>
            </ul>
          </div>

          <div className="footer__about">
            <h4 className="footer__title">Компанія</h4>
            <ul className="footer__list">
              <li className="footer__item"><a href="./aboutUs.html" className="footer__link">Про нас</a></li>
              <li className="footer__item"><a href="./news.html" className="footer__link">Новини</a></li>
              <li className="footer__item"><a href="" className="footer__link">Контакти</a></li>
            </ul>
          </div>

          <div className="footer__usefull">
            <h4 className="footer__title">Інформація</h4>
            <ul className="footer__list">
              <li className="footer__item"><a href="" className="footer__link">Питання та відповіді</a></li>
              <li className="footer__item"><a href="./inspiration.html
                " className="footer__link">Натхнення</a></li>
              <li className="footer__item"><a href="" className="footer__link">Поради</a></li>
            </ul>
          </div>


          <div className="footer__contacts">
            <h4 className="footer__title">Локація</h4>
            <p className="footer__location">Київ, Україна</p>
            <div className="footer__contacts-block">
              <p className="footer__contacts-elem"><a href="tel:0934295266" type="tel">0934295266</a></p>
              <p className="footer__contacts-descr">- Life</p>
            </div>
            <div className="footer__contacts-block">
              <p className="footer__contacts-elem">09:00 - 20:00</p>
              <p className="footer__contacts-descr">пн - нд</p>
            </div>

          </div>


        </div>

   
        <div className="footer__socials">

          <ul className="social__list">
            <li className="social__item">
              <a href="https://www.instagram.com/led_colour_lights/?igshid=YmMyMTA2M2Y%3D" target="_blank" className="social__link instagram">
              <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>

            <li className="social__item">
              <a href="" target="_blank" className="social__link telegram">
              <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>

            <li className="social__item">
              <a href="" target="_blank" className="social__link viber">
              <FontAwesomeIcon icon={faViber} />
              </a>
            </li>

            <li className="social__item">
              <a target="_blank" href="https://www.tiktok.com/@led_colour_lights?_t=8XLFrvqCXGX&_r=1" className="social__link tiktok">
              <FontAwesomeIcon icon={faTiktok} />
              </a>
            </li>

            <li className="social__item">
              <a target="_blank" href="https://www.facebook.com/led.colour.lights/" className="social__link facebook">
              <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>


          </ul>
      
        </div>

        <p className="footer__copyrights">© Led Colour Lights 2022. Все права защищены </p>


      </div>
    </div>
  </footer>
  )
}