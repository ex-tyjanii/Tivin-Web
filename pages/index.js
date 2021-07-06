import Head from 'next/head'
import Image from 'next/image'
import { HomeWrapper,TextWrapper,Container,ImageWrapper,BtnDiv } from '../styles/HomeStyles'
import {DownloadButton} from '../components/Button'
import CardsSection from '../components/CardsSection'
import WhyTivin from '../components/WhyTivin'
import ImageShowcase from '../components/ImageShowcase'
import MoreInfo from '../components/MoreInfo'
import PreFooter from '../components/PreFooter'
import { DownloadBtnsGrid } from '../styles/PreFooterStyles'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <Container>
          <TextWrapper>
            <p className='shop_tivin'>Shop Tivin</p>
            <div>
              <h1>We are making the way people buy and sell clothes easier and convenient.</h1>
            </div>
          
              <BtnDiv> 
                  <Image src='/assets/appstore.svg' width='200' height='50'/>
                  <Image src='/assets/googleplay.svg' width='200' height='50'/>
              </BtnDiv> 
           
          </TextWrapper>
          <ImageWrapper>
            <Image src='/assets/hero-main.png' width='600' height='700'/>
          </ImageWrapper>
        </Container>
          
      </HomeWrapper>
      <ImageShowcase/>
      <WhyTivin/>
      <CardsSection/>
      <MoreInfo/>
      <PreFooter/>
      <Footer/>
    </div>
  )
}
