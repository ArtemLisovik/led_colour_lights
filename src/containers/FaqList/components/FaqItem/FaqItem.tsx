import { useState } from 'react'

import './FaqItem.scss'

export const FaqItem = () => {
    const [isActive, setIsActive] = useState(false)

    return (
        <li
            className={`faq__questionsList__item ${isActive ? '_active' : ''}`}
            onClick={() => setIsActive(state => !state)}>
            <button
                className="faq__button">How can I pay?</button>
            <div className="faq__answerWrapper">
                <p className="faq__answerText">We try to make payment as easy as possible for you. You can complete your order securely using the following payment methods:</p>
            </div>
        </li>
    )
}
