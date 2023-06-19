import { Link } from 'react-router-dom'
import './Logo.scss'

import logo from 'assets/img/logo.png'

export const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  )
}
