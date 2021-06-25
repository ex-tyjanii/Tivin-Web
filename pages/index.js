import Head from 'next/head'
import Image from 'next/image'
import { HomeWrapper,TextWrapper,Container,ImageWrapper,BtnDiv } from '../styles/HomeStyles'
import {DownloadButton} from '../components/Button'
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
              <DownloadButton/>
              <DownloadButton/>
            </BtnDiv>
           
          </TextWrapper>
          <ImageWrapper>
            <div className='top_img'>
              <div className='abs'>
                <Image src='/assets/hero2.jpg' layout='fill'/>
              </div>
              <div className='abs-zero'>
                <Image src='/assets/zero.svg' width={20} height={20}/> 
              </div>
            </div>
            <div className='bottom_img'>
              <div className='abs'>
              <Image src='/assets/heroo.jpg'  layout='fill'/> 
              </div>
              <div className='abs-x'>
                <Image src='/assets/x.svg' width={20} height={20}/> 
              </div>
            </div>
          </ImageWrapper>
          <div className='green-box'>
            
          </div>
        </Container>
          
      </HomeWrapper>
    </div>
  )
}
