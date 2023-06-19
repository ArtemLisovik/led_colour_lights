import { SectionTitle } from 'containers/SectionTitle/SectionTitle'
import './HelpBottomBlock.scss'

export const HelpBottomBlock = () => {
    return (
        <>
            <SectionTitle 
            title='Need our help?'
            description='Contact our customer relations team through one of the below channels'
            />
            <p className="help-bottom__border"></p>
            <p className="help-bottom__notification">Available for all your questions from Monday - Sunday 09:00 - 21:00</p>
        </>
    )
}
