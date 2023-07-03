import {Menu } from 'containers'
import {Logo} from 'ui'

import './Header.scss'

export const Header = () => {
  return (
    <header className="header">
    <div className="container">
      <nav className="header__wrapper">

        <Logo/>

        <Menu/>

        <div className="header__wrapper__additional additional">

          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" width="30" height="30"
            fill="white" stroke="white">
            <circle cx="22.01" cy="22" r="20.02" fill="none" stroke="white" strokeMiterlimit="10"
              strokeWidth="4" width="30" height="30" />
            <path fill="none" stroke="white" strokeMiterlimit="10" strokeWidth="4" d="M35.94,36Q49,49,62,62" />
          </svg>
          <input type="text" placeholder="Пошук..." className="additional__search"/>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30" height="30" fill="white">
            <path
              d="M41.3 14.58a5 5 0 0 0-5-4.58H34a10 10 0 0 0-20 0h-2.32a5 5 0 0 0-5 4.58l-2.36 28a5 5 0 0 0 5 5.39h29.35a5 5 0 0 0 5-5.4ZM24 2a8 8 0 0 1 8 8H16a8 8 0 0 1 8-8Zm14.67 44H9.33a3 3 0 0 1-3-3.23l2.35-28a3 3 0 0 1 3-2.75H14v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1V12h16v6h-1a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2h-1v-6h2.32a3 3 0 0 1 3 2.75l2.35 28a3 3 0 0 1-3 3.25Z"
              data-name="Shopping Bag" />
          </svg>

        </div>

      </nav>
    </div>
    </header>

  )
}