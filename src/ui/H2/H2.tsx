import {motion} from 'framer-motion'

import { textAnimation } from 'config/animation'

import './H2.scss'

type H2Props = {
    children: React.ReactNode,
    color?: React.CSSProperties
}

export const H2 = ({children, color}: H2Props) => {
    return (
        <motion.h2
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            // custom={0.2}
            variants={textAnimation}
            style={color}
            className="title-animated">{children}
        </motion.h2>
    )
}

