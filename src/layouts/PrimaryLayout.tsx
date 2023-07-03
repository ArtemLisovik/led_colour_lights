import React, { useEffect } from 'react'
import { Footer, Header, HelpBottomBlock, SectionPromo } from '../containers'


type PrimaryLayoutProps = {
  children: React.ReactNode
  image?: string,
  video?: string,
  text: string,
  title: string,
  btn?: string,
  dark?: boolean,
  color?: string,
  btnLink?: string
}

export const PrimaryLayout = ({ children, video, image, text, title, btn, dark, color, btnLink }: PrimaryLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Header />
      <main className={`main ${dark ? 'dark': null}`} >
        <SectionPromo
          image={image}
          video={video}
          btn={btn}
          title={title}
          text={text}
          btnLink={btnLink} />
          
        <div className="container">
          {children}
          <HelpBottomBlock color={color}/>
        </div>
      </main>
      <Footer />
    </>

  )
}
