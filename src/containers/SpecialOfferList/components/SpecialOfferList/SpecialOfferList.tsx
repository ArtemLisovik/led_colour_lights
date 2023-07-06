import './SpecialOfferList.scss'

import { SpecialOfferItem } from '../SpecialOfferItem/SpecialOfferItem'
import { useEffect, useState } from 'react'
import { db } from 'config/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { ProductType } from 'types/types'

export const SpecialOfferList = () => {

  const [specials, setSpecials] = useState<Array<ProductType>>([])

    useEffect(() => {

      const getSpecials = async () => {
        const docSnap = await getDoc(doc(db, "pages", "main"));
        setSpecials(docSnap.data()?.SPECIAL)
      }

      getSpecials()
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