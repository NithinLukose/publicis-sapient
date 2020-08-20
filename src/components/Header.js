import React from 'react'

const Header = ({text,className}) => {
    return(
        <header className={className}>
            <span>{text}</span>
        </header>
    )
}

export default Header