
export const titleAnimation = {
    hidden: {
        x: '-50px',
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
  }
  
  export const textAnimation = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: custom, ease: "easeOut" }
    })
  }


export const imageReveal = {
    hidden: {
        scale: 0.5,
        opacity: 0
    },
    visible: (custom: number) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}

export const deskTopMenuReveal = {
    hidden: {
        y: '30px',
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {duration: 0.3, ease: 'easeOut', delay: custom}
    })
}

export const buttonsReveal = {
    hidden: {
        opacity: 0
    },
    visible: (custom: number) => ({
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}


export const fromLeftToRight = {
    hidden: {
        x: '-50px',
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}
