import React from 'react'
import { FooterWrapper, FooterLinks } from '../styles/FooterStyles'
const Footer = () => {
    return (
        <FooterWrapper>
            <div>
                <p className='purple'>#ShopTivin</p>
            </div>
            <FooterLinks>
                <div>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
                <div>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                </div>
            </FooterLinks>
        </FooterWrapper>
    )
}

export default Footer
