import { imageReveal, textAnimation } from "config/animation"
import { motion } from "framer-motion"

type ImgProps = {
    src: string,
    alt: string,
    className: string
}

export const Img = ({src, alt, className}: ImgProps) => {

  return (
    <motion.img 
    // loading="lazy"
    className={className} 
    src={src} 
    alt={alt} 
    initial='hidden'
    whileInView='visible'
    viewport={{ amount: 0.1, once: true }}
    variants={textAnimation}
    />
  )
}
