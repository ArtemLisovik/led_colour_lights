import { SectionTitle, InformationBlockList, FaqList } from "containers"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Helmet } from "react-helmet"
import { useTranslation } from "react-i18next"

export const FaqPage = () => {
    const { t } = useTranslation()
    return (
        <>
            <Helmet>
                <title>Найчастіші питання</title>
            </Helmet>
            <SecondaryLayout>

                <section className="faq">
                    <div className="container">
                        <SectionTitle
                            title='Найчастіші запитання та відповіді'
                            description="On this page you can find the answers to our most frequently asked questions. You can also view the current status of your order here." />
                        <FaqList />
                    </div>
                </section>

            </SecondaryLayout>
        </>
    )
}
