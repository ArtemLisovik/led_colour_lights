import {motion} from 'framer-motion'

import './Backdrop.scss'

type BackdropProps = {
  onHandler?: () => void 
}
export const Backdrop = ({onHandler}: BackdropProps) => {
  return (
    <motion.div 
        onClick={onHandler}
        className='backdrop'
        initial={{opacity: 0, visibility: 'hidden'}}
        animate={{opacity: 1, visibility: 'visible'}}
        exit={{opacity: 0, visibility: 'hidden', transition: {duration: 0.3}}}
        transition={{duration: 0.2}}>
    </motion.div>
  )
}