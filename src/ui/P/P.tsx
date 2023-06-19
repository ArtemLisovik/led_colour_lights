import { textAnimation } from "config/animation"
import { motion } from "framer-motion"

type PProps = {
    children: React.ReactNode,
    className: string
}

export const P = ({ children, className }: PProps) => {
    return (
        <motion.p
            className={className}
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.1, once: true }}
            variants={textAnimation}
        >
            {children}
        </motion.p>
    )
}
