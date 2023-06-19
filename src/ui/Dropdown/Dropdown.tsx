import { useState } from 'react'

import './Dropdown.scss'

type DropdownProps = {
    title?: string
    children: React.ReactNode
}

export const Dropdown = ({title, children}: DropdownProps) => {
    const [isOpened, setOpened] = useState(false)
    return (
        <div className='dropdown'>
            <div className="dropdown__header"
                onClick={() => setOpened(state => !state)}>
                <p className="dropdown__title">{title}</p>
                <div 
                className={`dropdown__btn ${isOpened ? 'active' : ''}`}>
                    <svg viewBox="0 0 20 20" width="15" height="15"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                </div>
            </div>
        <div className={`dropdown__body ${isOpened ? 'active' : ''}`}>
            {children}
        </div>
        </div>
    )
}