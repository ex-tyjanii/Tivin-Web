import React from 'react'
import Link from 'next/link'
import {BtnStyles} from '../styles/BtnStyles'
const Button = ({view100,children}) => {
    return (
        <Link href='/'>
            <BtnStyles view100={view100}>
                {children}
            </BtnStyles>
        </Link>
        
    )
}

export default Button
