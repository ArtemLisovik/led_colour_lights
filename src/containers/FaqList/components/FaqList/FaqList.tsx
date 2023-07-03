import { FaqItem } from '../FaqItem/FaqItem'
import './FaqList.scss'

export const FaqList = () => {
    return (

                <div className="faq__inner">
                    <ul className="faq__questionsList">

                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />
                        <FaqItem />

                    </ul>
                </div>
    )
}
