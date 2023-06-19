import { Link } from 'react-router-dom'

import './CustomLink.scss'
import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

type CustomLinkProps = {
    to: string,
    children: React.ReactNode
}

export const CustomLink = ({ to, children }: CustomLinkProps) => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
            className='link-wrapper'>
            <Link className='link-custom' to={to}>{children}</Link>
        </motion.div>
    )
}


