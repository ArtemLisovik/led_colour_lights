
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { ExtraProposition, SpecialOfferList } from "containers"

import video from 'assets/img/promo.mp4'

export const MainPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>Led Color Lights</title>
      </Helmet>
      <PrimaryLayout
        video={video}
        btn='Детальніше'
        btnLink='./catalogue'
        title='Led Colour Lights'
        text='It’s the little things that make a home, from luxury home fragrances by the best perfumers to scented candles.'>
          
        <ExtraProposition />

        <ProductList title='Новинки' category='news' path1="MainPage" database="products" />
        <SpecialOfferList />
        <ProductList title='Популярные товары' path1="MainPage" category='popular' database="specials" />

      </PrimaryLayout>
    </>
  )
}
