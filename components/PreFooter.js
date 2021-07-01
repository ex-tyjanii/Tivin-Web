import React from 'react'
import { PreFooterGrid, PreFooterWrapper,DownloadBtnsGrid } from '../styles/PreFooterStyles'
import Image from 'next/image'
const PreFooter = () => {
    return (
        <PreFooterWrapper>
            <PreFooterGrid>
                <div className='text_content'>
                    <div className='logo_div'>
                    <Image src='/assets/tivin-white.svg' layout='fill'/>

                    </div>
                    <p>Download this app for free on the iPhone or Android</p>
                    <DownloadBtnsGrid>
                        <Image src='/assets/appstore.svg' width='200' height='50'/>
                        <Image src='/assets/googleplay.svg' width='200' height='50'/>
                    </DownloadBtnsGrid>
                </div>
                <div className='img_div'>
                    <Image src='/assets/phones.png' width='600' height='450'/>
                </div>
            </PreFooterGrid>
        </PreFooterWrapper>
    )
}

export default PreFooter
