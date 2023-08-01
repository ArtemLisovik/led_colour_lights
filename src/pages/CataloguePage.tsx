
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import video from 'assets/img/promo.mp4'
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export const CataloguePage = () => {
  const { t } = useTranslation()

  const [activeFilter, setActiveFilter] = useState<string>('')

  const category = useParams().category

  useEffect(() => {

    if (category === 'all') {
      setActiveFilter('')
    } else {
      setActiveFilter(category as string)
    }
  }, [category])

  console.log(activeFilter)

  return (
    <>
      <Helmet>
        <title>Каталог</title>
      </Helmet>

      <PrimaryLayout
        video={video}
        title='Catalogue'
        text='All products'>

        {
          (activeFilter as string).length < 1 ?
            <ProductList
              path1='products'
              database="products"
              filter={true} /> :
            <ProductList
              path1='products'
              database="products"
              category={activeFilter}
              filter={true} />
        }


      </PrimaryLayout>
    </>
  )
}
