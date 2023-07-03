import { SectionTitle } from 'containers/SectionTitle/SectionTitle'
import './HelpBottomBlock.scss'

type HelpBottomBlockType = {
    color?: string
}
export const HelpBottomBlock = ({color}: HelpBottomBlockType) => {
    return (
        <>
            <SectionTitle 
            title='Need our help?'
            description='Contact our customer relations team through one of the below channels'
            color={color}
            />
            <p style={{color: color}} className="help-bottom__border"></p>
            <p style={{color: color}} className="help-bottom__notification">Available for all your questions from Monday - Sunday 09:00 - 21:00</p>
        </>
    )
}
