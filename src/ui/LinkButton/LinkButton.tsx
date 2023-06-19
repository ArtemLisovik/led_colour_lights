import { motion } from 'framer-motion'

import { buttonsReveal, imageReveal, textAnimation } from 'config/animation'

import './LinkButton.scss'
import { Link } from 'react-router-dom'

type ButtonProps = {
  children: React.ReactNode,
  type?: string,
  to: string;
}
export const LinkButton = ({ children, type = '', to }: ButtonProps) => {
  return (
    <motion.div
      className="button__wrapper"
      initial='hidden'
      whileInView='visible'
      transition={{ ease: "easeOut" }}
      viewport={{ amount: 0.1, once: true }}
      custom={0.2}
      variants={textAnimation}>
      <div
        className={`button ${type}`}
      >
        <Link className='button__text' to={to}>{children}</Link>
      </div>
    </motion.div>
  )
}