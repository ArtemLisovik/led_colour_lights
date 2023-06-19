import { Route, Routes } from "react-router-dom"
import { MainPage } from "../pages/MainPage"
import { DeliveryPage } from "../pages/DeliveryPage"

export const Routings = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/information' element={<DeliveryPage/>}/>
        
      </Routes>
    </>
  )
}
