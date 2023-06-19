import './SectionTitle.scss'

type SectionTitleType = {
    title: string,
    description: string
}
export const SectionTitle = ({title, description}: SectionTitleType) => {
    return (
        <>
            <h2 className="section__title">
                {title}
            </h2>
            <p className="section__descr">
               {description}
            </p>
        </>
    )
}
