import './P.scss'

type PProps = {
    children: React.ReactNode,
}

export const P = ({ children }: PProps) => {
    return (
        // <motion.p
        //     className={className}
        //     initial='hidden'
        //     whileInView='visible'
        //     viewport={{ amount: 0.1, once: true }}
        //     variants={textAnimation}
        // >
        //     {children}
        // </motion.p>
        <p className="paragraph">
            {children}
        </p>
    )
}
