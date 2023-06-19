import { textAnimation } from 'config/animation'
import { motion } from 'framer-motion'

type LiProps = {
    children: React.ReactNode,
    className: string
}

export const Li = ({ children, className }: LiProps) => {
    return (
        <motion.li
            className={className}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}>
            {children}
        </motion.li>
    )
}
