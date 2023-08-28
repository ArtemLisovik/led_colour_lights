import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Menu.scss'

import { menuConfig } from './config/menuConfig'
import { motion } from 'framer-motion'
import { fromLeftToRight, textAnimation } from 'config/animation'
import { BurgerSubMenu } from './components/BurgerSubMenu/BurgerSubMenu'
import { useDispatch } from 'react-redux'
import { setFilter } from 'store/FilterSlice'

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
            // onClick={() => setMenuOpened('news')}
            className="menu__list__item__link">
            <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/news'>Новинки</Link>
          </p>

        </li>

        <li
          className="menu__list__item category">
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
                <Link
                  to='/catalogue/garlands/roomGarlands'
                  onClick={() => setMenuOpened('')}
                >Гірлянди кімнатні</Link>
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
                <Link
                  onClick={() => setMenuOpened('')}
                  to='/catalogue/garlands/streetGarlands'>Гірлянди вуличні</Link>
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
                <Link
                  onClick={() => setMenuOpened('')}
                  to='/catalogue/garlands/accessories'>Аксессуари</Link>
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

                <Link
                  onClick={() => setMenuOpened('')}
                  to='/catalogue/candles/candles'>Свічки</Link>

              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.4}
                className="menu__link">
                <Link
                  onClick={() => setMenuOpened('')}
                  to='/catalogue/candles/accessories'>Аксессуари</Link>

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

                <Link
                  onClick={() => setMenuOpened('')}
                  to='/catalogue/decor/projectors'
                  className="menu__link__text">Проектори</Link>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.4}
                className="menu__link">
                <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/decor/nightLights'
                className="menu__link__text">Нічники</Link>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.5}
                className="menu__link">

                <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/decor/ledTrees'
                className="menu__link__text">LED дерева</Link>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.6}
                className="menu__link">
                <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/decor/giftSets'
                className="menu__link__text">Подарунові набори</Link>
              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.7}
                className="menu__link">

                <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/decor/christmasTreeDecorations'
                className="menu__link__text">Ялинкові прикраси</Link>

              </motion.li>

              <motion.li
                initial='hidden'
                whileInView='visible'
                viewport={{ amount: 0.1, once: false }}
                variants={fromLeftToRight}
                custom={0.8}
                className="menu__link">
                <Link 
                onClick={() => setMenuOpened('')}
                to='/catalogue/decor/christmasFigures'
                className="menu__link__text">Новорічні фігури</Link>
              </motion.li>
            </ul>
          }
        </li>



        <li className="menu__list__item category">
          <p
            className="menu__list__item__link">
            <Link to='/catalogue/sale'>Акції</Link>

          </p>


        </li>

      </ul>
    </div>
  )
}


const BurgerMenu = () => {
  const [menuActive, setMenuActive] = useState(false)
  const [subMenuActive, setSubMenuActive] = useState('')

  const menuHandler = () => {
    setMenuActive(state => !state)
  }

  useEffect(() => {
    if (menuActive) {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
    } else {
      (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
    }
  }, [menuActive])

  return (
    <div className="burgerMenu">

      <div onClick={() => setMenuActive(state => !state)}
        className="burgerMenu__button">
        <span className="burger__btn"></span>
      </div>


      <div className={menuActive ? `burgerMenu__wrapper _active` : `burgerMenu__wrapper`}>
        <ul className="burgerMenu__list">

          <li className="burgerMenu__list__item">
            <Link 
              className="burgerMenu__list__item__link"
                to='/catalogue/news'>Новинки</Link>
          </li>

          <li className="burgerMenu__list__item">
            <p onClick={() => setSubMenuActive('garlands')} className="burgerMenu__list__item__link">Гірлянди</p>
            <p className="arrow-right">›</p>

            <BurgerSubMenu
              menuHandler={menuHandler}
              func={setSubMenuActive}
              selectedCategory={subMenuActive}
              category='garlands'
              options={[
                {
                  title: 'Гірлянди кімнатні',
                  link: '/catalogue/garlands/roomGarlands'
                },
                {
                  title: 'Гірлянди вуличні',
                  link: '/catalogue/garlands/streetGarlands'
                },
                {
                  title: 'Аксессуари',
                  link: '/catalogue/garlands/accessories'
                }
              ]} />

          </li>

          <li className="burgerMenu__list__item">
            <p 
            onClick={() => setSubMenuActive('candles')}
            className="burgerMenu__list__item__link">Свічки</p>
            <p className="arrow-right">›</p>

            <BurgerSubMenu
              menuHandler={menuHandler}
              func={setSubMenuActive}
              selectedCategory={subMenuActive}
              category='candles'
              options={[
                {
                  title: 'Свічки',
                  link: '/catalogue/candles/candles'
                },
                {
                  title: 'Акссесуарі',
                  link: '/catalogue/candles/accessories'
                },
              ]} />

            {/* <div className="burgerSubmenu">
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
            </div> */}
          </li>

          <li className="burgerMenu__list__item">
            <p 
            onClick={() => setSubMenuActive('decor')}
            className="burgerMenu__list__item__link">Декор</p>
            <p className="arrow-right">›</p>

            <BurgerSubMenu
              menuHandler={menuHandler}
              func={setSubMenuActive}
              selectedCategory={subMenuActive}
              category='decor'
              options={[
                {
                  title: 'Проектори',
                  link: '/catalogue/decor/projectors'
                },
                {
                  title: 'Нічники',
                  link: '/catalogue/decor/nightLights'
                },
                {
                  title: 'LED дерева',
                  link: '/catalogue/decor/ledTrees'
                },
                {
                  title: 'Подарункові набори',
                  link: '/catalogue/decor/giftSets'
                },
                {
                  title: 'Ялинкові прикраси',
                  link: '/catalogue/decor/christmasTreeDecorations'
                },
                {
                  title: 'Новорічні фігури',
                  link: '/catalogue/decor/christmasFigures'
                }
              ]} />

            {/* <div className="burgerSubmenu">
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
            </div> */}
          </li>

          <li className="burgerMenu__list__item">
       
            <Link 
              className="burgerMenu__list__item__link"
                to='/catalogue/sale'>Акції</Link>
          </li>
        </ul>
      </div>


    </div>
  )
}