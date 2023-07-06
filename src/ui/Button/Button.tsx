import { motion } from 'framer-motion'

import { textAnimation } from 'config/animation'

import './Button.scss'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: React.ReactNode,
  type?: string,
  to?: string;
}
export const Button = ({ children, type = '', to }: ButtonProps) => {
  return (
    <motion.div
      className={`button ${type}`}
      // initial='hidden'
      // whileInView='visible'
      // transition={{ ease: "easeOut" }}
      // viewport={{ amount: 0.1, once: true }}
      // custom={0.2}
      // variants={textAnimation}
      >
        {to ? <Link
          className='button__text'
          to={to}>
          {children}
        </Link> : children}
    </motion.div>
  )
}