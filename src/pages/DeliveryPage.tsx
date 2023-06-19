import { ExtraProposition, HelpBottomBlock, InformationBlockList, SectionTitle, SpecialOfferList } from "containers"
import { ProductList } from "containers/ProductList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const DeliveryPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Доставка</title>
            </Helmet>
            <SecondaryLayout>

                <section className="information">
                    <div className="container">
                        <SectionTitle
                            title='Frequently asked questions & contact'
                            description="On this page you can find the answers to our most frequently asked questions. You can also view the current status of your order here." />

                        <InformationBlockList />
                        <HelpBottomBlock/>
                    </div>
                </section>

            </SecondaryLayout>
        </>
    )
}