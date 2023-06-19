import { motion } from 'framer-motion'
import { textAnimation } from 'config/animation'

import './H4.scss'

export const H4 = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.h4
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
            className="h4-custom">{children}</motion.h4>
    )
}
