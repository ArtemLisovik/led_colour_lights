import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Footer, Header, HelpBottomBlock, SectionPromo } from '../containers'
import { Preloader } from 'ui/Preloader/Preloader'
import { useAppSelector } from 'hooks/useRedux'
import {Modal} from 'containers'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'


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
  const {orderOpen} = useSelector((state: RootState) => state.orderOpenSlice)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useLayoutEffect(() => {
    setIsLoading(false)
  }, [])


  const {filter} = useAppSelector(state => state.filterSlice)
  
  // useEffect(() => {
  //   // console.log(filter)
  // }, [filter])


  return (
    <>
      <Preloader loading={isLoading}/>
      <Header />
      <Modal opened={orderOpen} title='Оформлення замовлення'/>
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
