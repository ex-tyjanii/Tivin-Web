import React from 'react'
import Image from 'next/image'
import { Wrapper, ImageDiv, TextDiv  } from '../styles/WhyTivinStyles'
import Button from './Button'
const WhyTivin = () => {
    return (
        <Wrapper>
            <TextDiv>
                <p className='shop_tivin'>Why Tivin?</p>
                <h1>We are the future of retail.</h1>
                <p>Sign up for Tivin and start buying or selling depending on your needs. Stay fashionable and make more sales by signing up today. 100% free too!!</p>
                <div>
                <Button>Download Tivin</Button>
                </div>
            </TextDiv>
            <ImageDiv>
                <div className='img-div'>
                    <Image src='/assets/man-with-bags.png' layout='fill'/>
                </div>
            </ImageDiv>
        </Wrapper>
    )
}

export default WhyTivin
