
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { ExtraProposition, SpecialOfferList } from "containers"

export const MainPage = () => {
  const {t} = useTranslation()
  return (
    <>
    <Helmet>
        <title>Led Color Lights</title>
      </Helmet>
    <PrimaryLayout>
      <ExtraProposition/>
      <ProductList title='Новинки' path='NEWS' database="products"/>
      <SpecialOfferList />
      <ProductList title='Популярные товары' path='POPULAR' database="specials"/>

    </PrimaryLayout>
    </>
  )
}
