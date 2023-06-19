import React, { useEffect } from 'react'
import { Footer, Header, SectionPromo } from '../containers'
import { P } from 'ui'

type PrimaryLayoutProps = {
    children: React.ReactNode
}

export const SecondaryLayout = ({children}:PrimaryLayoutProps) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <>
     <Header/>
        <main className="main">
            {/* <SectionPromo/> */}
            {children}
        </main>
    <Footer/>
    </>
   
  )
}
