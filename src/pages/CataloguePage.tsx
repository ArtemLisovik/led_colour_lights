
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

import video from 'assets/img/promo.mp4'

export const CataloguePage = () => {
  const { t } = useTranslation()
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
        // category='garlands'
        filter={true}/>
        
        {/* <section className="products">

        </section> */}
          
        {/* <ExtraProposition />
        <ProductList title='Новинки' path='NEWS' database="products" />
        <SpecialOfferList />
        <ProductList title='Популярные товары' path='POPULAR' database="specials" /> */}

      </PrimaryLayout>
    </>
  )
}
