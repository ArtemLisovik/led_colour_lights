import { useEffect, useRef, useState } from "react"

import './Submenu.scss'


type SubmenuProps = {
    name: string,
    children: React.ReactNode
}
export const Submenu = ({name, children}: SubmenuProps) => {
    const [isOpen, setIsOpen] = useState(false)


    const subMenuRef = useRef<HTMLLIElement>(null)



    useEffect(() => {
        const handler = (event: MouseEvent) => {
            if (!subMenuRef?.current?.contains(event.target as Element))
                setIsOpen(false)
        }
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [setIsOpen])

    const isActive = `menu__list-submenu submenu ${isOpen ? 'opened' : ''}`
    return (
        <li className="menu__list-item"
        onClick={() => setIsOpen(state => !state)}
        ref={subMenuRef}>
                <p className={`menu__list-item ${isOpen ? 'active' : ''}`}>{name}</p> 
                <ul className={isActive}>
                    {children}
                    {/* <li className="submenu__item">
                        <a href="#" className="submenu__link">Welcome to ECO</a>
                    </li>
                    <li className="submenu__item">
                        <a href="#" className="submenu__link">С чего начать?</a>
                    </li>
                    <li className="submenu__item">
                        <a href="#" className="submenu__link">Tokens</a>
                    </li>
                    <li className="submenu__item">
                        <a href="#" className="submenu__link">Claim токенов</a>
                    </li>
                    <li className="submenu__item">
                        <a href="#" className="submenu__link">Discord сервер</a>
                    </li> */}
                </ul>
            </li>
    )
}