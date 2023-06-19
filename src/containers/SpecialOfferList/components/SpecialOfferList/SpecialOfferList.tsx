import './SpecialOfferList.scss'

import { SpecialOfferItem } from '../SpecialOfferItem/SpecialOfferItem'
import { getSpecials } from '../../store/specialOffersThunk'
import { useAppSelector, useAppDispatch } from 'hooks/useRedux'
import { useEffect } from 'react'

export const SpecialOfferList = () => {

    const specials = useAppSelector(state => state.SpecialsReducer.specials)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSpecials())
    }, [])

    const specialsView = specials.map((specials, index) => (
        <SpecialOfferItem 
        key={index}
        name={specials.name} 
        oldPrice={specials.oldPrice}
        newPrice={specials.newPrice} 
        description={specials.description}
        id={specials.id}
        image={specials.image}/>
    ))

  return (
    <section className="presentation">
    <div className="container">

      <div className="presentation__wrapper">

        {specialsView}
        {/* <SpecialOfferItem/>
        <SpecialOfferItem/> */}


      </div>

    </div>
  </section>
  )
}
