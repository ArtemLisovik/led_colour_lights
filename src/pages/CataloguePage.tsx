
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import video from 'assets/img/promo.mp4'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { db } from "config/firebase"
import { doc, getDoc } from "firebase/firestore"

export const CataloguePage = () => {
  const { t } = useTranslation()

  const [activeFilter, setActiveFilter] = useState<string>('')
  const [subcategory, setSubCategory] = useState<any>('')

  const category = useParams().category
  const sub = useParams().subcategory


  useEffect(() => {
    if (category === 'all') {
      setActiveFilter('')
      setSubCategory('')
    } else {
      setActiveFilter(category as string)
      setSubCategory(sub as string)
    }
  }, [category, sub])
  
  return (
    <>
      <Helmet>
        <title>Каталог</title>
      </Helmet>

      <PrimaryLayout
        video={video}
        title='Catalogue'
        text='All products'>

        <ProductList
          path1='products'
          database="products"
          subcategory={subcategory}
          category={activeFilter}
          filter={true} />

        {/* {
          (activeFilter as string).length < 1 ?
            <ProductList
              path1='products'
              database="products"
              subcategory={subcategory}
              category={activeFilter}
              filter={true} /> :
            <ProductList
              path1='products'
              database="products"
              filter={true} />
        } */}


      </PrimaryLayout>
    </>
  )
}
