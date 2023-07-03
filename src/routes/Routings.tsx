import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { DeliveryPage } from "../pages/DeliveryPage"
import { AboutPage } from "pages/AboutPage"
import { NewsPage } from "pages/NewsPage"
import { FaqPage } from "pages/FaqPage"
import { CataloguePage } from "pages/CataloguePage"

export const Routings = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/information' element={<DeliveryPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/news' element={<NewsPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/catalogue' element={<CataloguePage/>}/>
        
      </Routes>
    </>
  )
}
