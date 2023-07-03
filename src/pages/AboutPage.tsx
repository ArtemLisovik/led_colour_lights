
import { ProductList } from "containers/ProductList"
import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { ExtraProposition, ImageWithText, SectionTitle, SpecialOfferList } from "containers"

import image from 'assets/img/poster__about.jpg'
import poster1 from 'assets/img/avatar__2.webp'
import poster2 from 'assets/img/avatar__3.webp'

export const AboutPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
        <title>Про нас</title>
      </Helmet>

      <PrimaryLayout
        image={image}
        title='ПРО НАС'
        text="We're not here to sell you beauty, we are here to make you feel good.">

        <section className="about">

          <SectionTitle
            title="THE POWER OF RITUALS"
            description="They are everywhere: at any given moment, of every single day, waiting to be discovered, eager to share the beauty within them. They are the seemingly meaningless moments we all tend to overlook."
          />

          <ImageWithText
            image={poster1}
            title='OUR PRODUCTS'
            text="Inspired by the wisdom and ancient traditions of Asian cultures, we created an extensive collection of luxurious yet affordable products for home and body. We hope to enrich your life using unique signature fragrances that are carefully designed and composed by the world’s finest perfumers."
          />
          <ImageWithText
            reverse={true}
            image={poster2}
            title='SIGNATURE FRAGRANCES'
            text="A fine fragrance holds the power to transform your mood, conjure up long lost memories and embrace you with a sense of comfort and well being. Designing a new perfume can be compared to creating a work of art: we carefully uncover and combine all the right ingredients in order to compose the uniquely appealing character of every single fragrance we create."
          />
        </section>


      </PrimaryLayout>
    </>
  )
}
