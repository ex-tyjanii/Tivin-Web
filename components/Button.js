import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import {BtnStyles,DownloadBtn} from '../styles/BtnStyles'
const Button = ({children}) => {
    return (
        <Link href='/'>
            <BtnStyles>
                {children}
            </BtnStyles>
        </Link>
        
    )
}

export const DownloadButton = ()=>{
    return (
        <Link href='/'>
            <DownloadBtn>
                <Image src='/assets/apple.svg' width={20} height={20}/>
                <div>
                    <p className='regular-font'>Download on the</p>
                    <p className='bold-font'>App Store</p>
                </div>
            </DownloadBtn>
        </Link>
    )
}

export default Button
