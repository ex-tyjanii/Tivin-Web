import React, { useState, useRef,useEffect } from 'react'
import Image from 'next/image'
import { NavWrapper, NavLinks,Burger,NavResponsive,Nav } from '../styles/NavStyles'
import Link from 'next/link'
import Button from './Button'



const Navbar = () => {
  
    const [isToggled, setIsToggled] = useState(false)
    const menuRef = useRef(null)
    // useEffect(() => {
    //     if(isToggled){
            
    //         },{
    //             opacity: 1,
    //         })
    //     }
    // }, [isToggled,setIsToggled])
   
    return (
        <Nav>
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

            <Burger onClick={()=> setIsToggled(!isToggled)} toggled={isToggled}>
                {
                    isToggled?(
                        <Image src='/assets/cancel_svg.svg' width="100" height="50"/>
                    ):(
                        <Image src='/assets/hamburger.svg' width="100" height="50"/>
                    )
                }
                
            </Burger>

            
        </NavWrapper>
        <NavResponsive toggled={isToggled} ref={menuRef}>
            <div className='links-div'>
            <p>Why Tivin?</p>
            <p>How it works</p>
            <p>FAQ</p>
            </div>
            <div className='btn-div'>
                <Button>Download Tivin</Button>
            </div>
        </NavResponsive>
        </Nav>
    )
}

export default Navbar
