import { InformationBlockItem } from '../InformationsBlockItem/InformationBlockItem'
import './InformationBlockList.scss'

export const InformationBlockList = () => {
    return (
        <div className="information__inner">

            <InformationBlockItem
                title='Доставка'
                descr='Доставка реалізується Новою Поштою. Відправки кожен вівторок и пятницю' />

            <InformationBlockItem
                title='Доставка'
                descr='Доставка реалізується Новою Поштою. Відправки кожен вівторок и пятницю' />

            <InformationBlockItem
                title='Доставка'
                descr='Доставка реалізується Новою Поштою. Відправки кожен вівторок и пятницю' />
        </div>
    )
}
