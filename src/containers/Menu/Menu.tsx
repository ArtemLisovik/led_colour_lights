import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Menu.scss'

import { menuConfig } from './config/menuConfig'
import { motion } from 'framer-motion'
import { fromLeftToRight, textAnimation } from 'config/animation'

export type menuType = 'ua' | 'ru' | 'en'

export const Menu = () => {

  const [desktopMenu, setDesktopMenu] = useState(true)

  const getWindowSize = () => {
    if (window.innerWidth < 930) {
      setDesktopMenu(false)
    } else {
      setDesktopMenu(true)
    }
  }

  useEffect(() => {
    getWindowSize()

  }, []);

  useEffect(() => {
    window.addEventListener('resize', getWindowSize);

    return () => {
      window.removeEventListener('resize', getWindowSize);
    };
  }, [desktopMenu]);

  const view = desktopMenu ? <DesktopMenu /> : <BurgerMenu />

  return (
    <>
      {view}
    </>
  )
}


export const DesktopMenu = () => {
  const [menuOpened, setMenuOpened] = useState('')

  useEffect(() => {
    menuOpened === '' ? document.body.style.overflowY = 'scroll' : document.body.style.overflow = 'hidden'
  }, [menuOpened])

  return (
    <div className="menu">

      <div className={`menu__canvas ${menuOpened !== '' ? 'active' : 'closed'}`}>
        <div
          onClick={() => setMenuOpened('')}
          className={`menu__close ${menuOpened !== '' ? 'active' : 'closed'}`}>
          <span className="menu__close__button"></span>
        </div>
      </div>

      <ul className="menu__list">

        <li className="menu__list__item category">
          <p
            onClick={() => setMenuOpened('news')}
            className="menu__list__item__link">
            <Link to='products/news'>Новинки</Link>
          </p>

        </li>

        <li className="menu__list__item category">
          <p
            onClick={() => setMenuOpened('girlyandus')}
            className="menu__list__item__link">Гірлянди</p>

          {menuOpened === 'girlyandus' &&
            <ul className={`menu__block__list ${menuOpened === 'girlyandus' ? 'active' : ''}`} >


              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.3}
                className="menu__link">
                <a className="menu__link__sublink sublink" href="">
                  <div className="sublink__image">
                    <img src="./assets/presentation.jpeg" alt="presentation" />
                  </div>
                  <h3 className="sublink__title">Private Collection - Comfort</h3>
                  <p className="sublink__descr">text1</p>
                </a>
                <span className="menu__link__text">Гірлянди кімнатні</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#a4a4a4">
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                </svg>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.4}
                className="menu__link">
                <a className="menu__link__sublink sublink" href="">
                  <div className="sublink__image">
                    <img src="./assets/presentation.jpeg" alt="presentation" />
                  </div>
                  <h3 className="sublink__title">Private Collection - Comfort</h3>
                  <p className="sublink__descr">text2</p>
                </a>
                <span className="menu__link__text">Гірлянди вуличні</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="#a4a4a4">
                  <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                </svg>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.5}
                className="menu__link">
                <span className="menu__link__text">Аксессуари</span>
              </motion.li>

            </ul>}
        </li>



        <li className="menu__list__item category">
          <p
            onClick={() => setMenuOpened('candles')}
            className="menu__list__item__link">Свічки</p>

          {menuOpened === 'candles' &&
            <ul className={`menu__block__list ${menuOpened === 'candles' ? 'active' : ''}`} >


              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.3}
                className="menu__link">

                <span className="menu__link__text">Свічки</span>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.4}
                className="menu__link">
                <span className="menu__link__text">Аксессуари</span>
              </motion.li>

            </ul>

          }
        </li>



        <li className="menu__list__item category">
          <p
            onClick={() => setMenuOpened('decor')}
            className="menu__list__item__link">Декор</p>


          {menuOpened === 'decor' &&
            <ul className={`menu__block__list ${menuOpened === 'decor' ? 'active' : ''}`}>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.3}
                className="menu__link">

                <span className="menu__link__text">Проектори</span>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.4}
                className="menu__link">
                <span className="menu__link__text">Нічники</span>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.5}
                className="menu__link">

                <span className="menu__link__text">LED дерева</span>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.6}
                className="menu__link">
                <span className="menu__link__text">Подарунові набори</span>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.7}
                className="menu__link">

                <span className="menu__link__text">Ялинкові прикраси</span>

              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.8}
                className="menu__link">
                <span className="menu__link__text">Новорічні фігури</span>
              </motion.li>
            </ul>
          }

        </li>



        <li className="menu__list__item category">
          <p
            onClick={() => setMenuOpened('sale')}
            className="menu__list__item__link">
            <Link to='products/sale'>Акції</Link>

          </p>


        </li>

      </ul>
    </div>
  )
}


const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false)

  useEffect(() => {
    if (menuActive) {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
    } else {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
    }
  }, [menuActive])

  return (
    <div className="burgerMenu">
      <div className="burgerMenu__button">
        <span className="burger__btn"></span>
      </div>


      <div className="burgerMenu__wrapper">
        <ul className="burgerMenu__list">


          <li className="burgerMenu__list__item">
            <a href="" className="burgerMenu__list__item__link">Новинки</a>
            <p className="arrow-right">›</p>

            <div className="burgerSubmenu">
              <ul className="burgerSubmenu__list">
                <p className="burgerSubmenu__list__goBackButton">‹</p>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__1</a>
                  <p className="arrow-right">›</p>
                  <div className="burgerSubmenu__info"></div>

                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__1</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__1</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__1</a>
                  <p className="arrow-right">›</p>
                </li>

              </ul>
            </div>
          </li>

          <li className="burgerMenu__list__item">
            <a href="" className="burgerMenu__list__item__link">Гірлянди</a>
            <p className="arrow-right">›</p>

            <div className="burgerSubmenu">
              <ul className="burgerSubmenu__list">
                <p className="burgerSubmenu__list__goBackButton">‹</p>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Гірлянди кімнатні</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Гірлянди вуличні</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Аксессуари</a>
                  <p className="arrow-right">›</p>
                </li>

              </ul>
            </div>
          </li>

          <li className="burgerMenu__list__item">
            <a href="" className="burgerMenu__list__item__link">Декор</a>
            <p className="arrow-right">›</p>

            <div className="burgerSubmenu">
              <ul className="burgerSubmenu__list">
                <p className="burgerSubmenu__list__goBackButton">‹</p>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Ялинкові прикраси</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Ідеї для подарунків</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">LED фігури</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Декор з освітленням</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Проектори</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">Свічки і підсвічники</a>
                  <p className="arrow-right">›</p>
                </li>

              </ul>
            </div>
          </li>

          <li className="burgerMenu__list__item">
            <a href="" className="burgerMenu__list__item__link">Набори</a>
            <p className="arrow-right">›</p>

            <div className="burgerSubmenu">
              <ul className="burgerSubmenu__list">
                <p className="burgerSubmenu__list__goBackButton">‹</p>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__3</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__3</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__3</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__3</a>
                  <p className="arrow-right">›</p>
                </li>

              </ul>
            </div>
          </li>

          <li className="burgerMenu__list__item">
            <a href="" className="burgerMenu__list__item__link">Акції</a>
            <p className="arrow-right">›</p>

            <div className="burgerSubmenu">
              <ul className="burgerSubmenu__list">
                <p className="burgerSubmenu__list__goBackButton">‹</p>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__4</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__4</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__4</a>
                  <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                  <a href="" className="burgerSubmenu__list__item__link">menu__4</a>
                  <p className="arrow-right">›</p>
                </li>

              </ul>
            </div>
          </li>




        </ul>
      </div>


    </div>
  )
}