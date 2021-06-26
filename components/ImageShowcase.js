import React from 'react'
import { ImageShowcaseWrapper,PhoneDiv,PhotoGridWrapper } from '../styles/ImageShowcaseStyles'
import Image from 'next/image'
const ImageShowcase = () => {
    return (
        <ImageShowcaseWrapper>
           <div className='wrapper_0'>
                <Image src='/assets/x.svg' width={20} height={20}/> 
           </div>
           <PhoneDiv>
            <Image src='/assets/phone.png' layout='fill'/>
           </PhoneDiv>
           <PhotoGridWrapper>
               <div className='wrapper_1'>
                   <div>
                      <Image src='/assets/girl.png' layout='fill'/>
                   </div>
               </div>
               <div className='wrapper_2'>
                   <div>
                      <Image src='/assets/shoes.png' layout='fill'/>
                   </div>
                   <div>
                      <Image src='/assets/girl2.png' layout='fill'/>
                   </div>
               </div>
           </PhotoGridWrapper>
          
        </ImageShowcaseWrapper>
        
    )
}

export default ImageShowcase
