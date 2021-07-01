import React from 'react'
import { sliderData } from '../data/SliderData'
import { MoreInfoWrapper,MoreInfoGrid } from '../styles/MoreInfoStyles'
const MoreInfo = () => {
    return (
        <MoreInfoWrapper>
            <MoreInfoGrid>
            {
                sliderData.map(slide=>(
                    <div key={slide.id}>
                        <h3>{slide.title}</h3>
                        <p>{slide.body}</p>
                    </div>
                ))
            }
            </MoreInfoGrid>
            
        </MoreInfoWrapper>
    )
}

export default MoreInfo
