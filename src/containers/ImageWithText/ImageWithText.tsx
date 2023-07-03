import './ImageWithText.scss'


type ImageWithTextType = {
    image: string,
    title: string,
    text: string,
    reverse?: boolean
}
export const ImageWithText = ({image, title, text, reverse}:ImageWithTextType) => {
    return (
        <div className="about__product">
            <div 
            className="about__imageWrapper"
            style={reverse ? {order: '1'} : {order:'0'}}>
                <img src={image} alt="image" className="about__image"/>
            </div>
            <div className="about__descrWrapper">
                <div className="about__descrInner">
                    <h3 className="about__title">{title}</h3>
                    <p className="about__text">{text}</p>
                </div>
            </div>
        </div>
    )
}
