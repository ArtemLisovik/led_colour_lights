import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// example usage:
// <BurgerSubMenu category='garlands'>
//     [
//         {name: 'Гирлянды',
//         link : '/product/garlands'}
//     ]
// </BurgerSubMenu>

type BurgerSubMenuType = {
    category: string,
    options: any,
    func: Function,
    selectedCategory: string
}
export const BurgerSubMenu = ({ category, options, func, selectedCategory }: BurgerSubMenuType) => {

    const [isActive, setIsActive] = useState('')

    useEffect(() => {
        setIsActive(selectedCategory)
    }, [selectedCategory])

    console.log(selectedCategory)

    return (
        <div className={isActive === category ? `burgerSubmenu _active` : `burgerSubmenu`}>
            <ul className="burgerSubmenu__list">
                <li onClick={() => func('')}
                    className="burgerSubmenu__list__goBackButton">‹</li>

                {options?.map((item: any) => {
                    return (
                        <li key={item.title}
                        className="burgerSubmenu__list__item">
                            <Link to={item.link} className="burgerSubmenu__list__item__link">{item.title}</Link>
                            <p className="arrow-right">›</p>
                        </li>)
                })}

                {/* <li className="burgerSubmenu__list__item">
                    <Link to="" className="burgerSubmenu__list__item__link">Гірлянди кімнатні</Link>
                    <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                    <Link to="" className="burgerSubmenu__list__item__link">Гірлянди вуличні</Link>
                    <p className="arrow-right">›</p>
                </li>

                <li className="burgerSubmenu__list__item">
                    <Link to="" className="burgerSubmenu__list__item__link">Аксессуари</Link>
                    <p className="arrow-right">›</p>
                </li> */}

            </ul>
        </div>
    )
}
