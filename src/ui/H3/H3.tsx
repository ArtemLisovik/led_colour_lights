import {motion} from 'framer-motion'

import { textAnimation } from 'config/animation'

import './H3.scss'

type H3Props = {
    children: React.ReactNode,
    color?: string;
}

export const H3 = ({children, color}: H3Props) => {
    return (
        <motion.h3
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            style={{color: color}}
            variants={textAnimation}
            className="title-animated2">{children}
        </motion.h3>
    )
}

