import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { CardSectionWrapper, CardWrapper,GridsWrapper } from '../styles/CardSectionStyles'
import {sliderData} from '../data/SliderData'
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore,{Pagination} from 'swiper/core'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


SwiperCore.use([Pagination])

const CardsSection = () => {
    useEffect(() => {
       console.log(window);
    })
    return (
        <CardSectionWrapper>
            <p className='light_text'>How it works</p>
            <h3 className='heading_text'>Tivin’s got the details covered in one place</h3>
            <Swiper pagination={true} spaceBetween={30} className='mobile-display'>
            {
                sliderData.map(slide=>(
                    <SwiperSlide key={slide.id} className='mySwiper'>
                        <CardWrapper >
                        <div className='photo-wrapper'>
                            <Image src={slide.img} layout='fill'/>
                        </div>
                        <div className='content-wrapper'>
                            <h4>{slide.title}</h4>
                            <p>{slide.body}</p>   
                        </div>
                        
                        </CardWrapper>
                    </SwiperSlide>
                   
                ))
            }
            </Swiper>
            


            {/* IF SCREEN SIZE IS > 800 */}

            <GridsWrapper>
                <div>
                <CardWrapper >
                        <div className='photo-wrapper'>
                            <Image src='/assets/clothes.png' layout='fill'/>
                        </div>
                        <div className='content-wrapper'>
                            <h4>Get styled</h4>
                            <p>From women to men to kids, discover a wide selection of items across thousands of brands—at prices</p>   
                        </div>
                        
                        </CardWrapper>
                </div>
                <div>
                    <CardWrapper divHeight='50vh'>
                        <div className='photo-wrapper'>
                            <Image src='/assets/afro-woman.png' layout='fill'/>
                        </div>
                        <div className='content-wrapper'>
                            <h4>Get styled</h4>
                            <p>From women to men to kids, discover a wide selection of items across thousands of brands—at prices</p>   
                        </div>    
                    </CardWrapper>
                </div>
                <div>
                    <CardWrapper>
                        <div className='photo-wrapper'>
                            <Image src='/assets/delivery.png' layout='fill'/>
                        </div>
                        <div className='content-wrapper'>
                            <h4>Who got you covered</h4>
                            <p>Orders arrive in two days with Priority Mail shipping. If you love it, leave the seller a note to let them know</p>   
                        </div>
                    </CardWrapper>
                </div>
            </GridsWrapper>
        </CardSectionWrapper>
    )
}

export default CardsSection
