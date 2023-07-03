import { PrimaryLayout } from "../layouts/PrimaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"
import { NewsBlockList } from "containers"

import image from 'assets/img/poster__about.jpg'

export const NewsPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Новини</title>
            </Helmet>

            <PrimaryLayout
                dark={true}
                color='white'
                image={image}
                title='НОВИНИ'
                text="We're not here to sell you beauty, we are here to make you feel good.">

                <NewsBlockList />

            </PrimaryLayout>
        </>
    )
}
