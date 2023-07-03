import './SectionTitle.scss'

type SectionTitleType = {
    title: string,
    description: string,
    color?: string
}
export const SectionTitle = ({title, description, color}: SectionTitleType) => {
    return (
        <>
            <h2 style={{color: color}} className="section__title">
                {title}
            </h2>
            <p style={{color: color}} className="section__descr">
               {description}
            </p>
        </>
    )
}
