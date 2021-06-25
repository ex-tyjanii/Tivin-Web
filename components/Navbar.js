import React from 'react'
import Image from 'next/image'
import { NavWrapper, NavLinks,Burger } from '../styles/NavStyles'
import Link from 'next/link'
import Button from './Button'
const Navbar = () => {
    return (
        <NavWrapper>
            <div>
                <Image src='/assets/tivin.svg' width="100" height="50"/>
            </div>
            <NavLinks>
                <Link href='/'>
                    <a>Why Tivin</a>
                </Link>
                <Link href='/'>
                    <a>How it works</a>
                </Link>
                <Link href='/'>
                    <a>Faq</a>
                </Link>
                <Button>Download Tivin</Button>
            </NavLinks>
            <Burger>
                <span></span>
                <span className='burger_bottom'></span>
            </Burger>
        </NavWrapper>
    )
}

export default Navbar
