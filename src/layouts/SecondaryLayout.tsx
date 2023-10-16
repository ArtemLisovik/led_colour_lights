import React, { useEffect } from 'react'
import { Footer, Header, HelpBottomBlock, SectionPromo } from '../containers'
import { P } from 'ui'
import {Modal} from 'containers'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

type PrimaryLayoutProps = {
    children: React.ReactNode
}

export const SecondaryLayout = ({children}:PrimaryLayoutProps) => {
  const {orderOpen} = useSelector((state: RootState) => state.orderOpenSlice)


  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
     <Header/>
     {/* <Modal opened={orderOpen} title='Оформлення замовлення'/> */}
        <main className="main">
            {/* <SectionPromo/> */}
            {children}
            <HelpBottomBlock/>
        </main>
    <Footer/>
    </>
   
  )
}
