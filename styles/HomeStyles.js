import styled from 'styled-components';

const HomeWrapper = styled.div`
    /* width: 100vh; */
    /* @media only screen and (max-width: 600px) {
        width: 100vh;
    } */
`
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.25fr 2fr;
    /* height: 1000px; */
    .green-box{
        height: 1000px;
        display: flex;
        flex-direction:column;
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction:column;
        margin-top: 180px;
        width: 90%;
    }
    
`
const TextWrapper = styled.div`
    align-self: center;
    margin-top: -100px;
    h1{
        font-size: 40px;
        @media only screen and (max-width: 600px) {
            font-size: 32px;
            text-align: center;
        }
    }
    .shop_tivin{
        margin-bottom: 24px;
        @media only screen and (max-width: 600px) {
            text-align: center;
        }
    }
`

const ImageWrapper = styled.div`
    height: 700px;
    padding-left: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    .top_img{
        position:relative;
        margin-top:50px;
        .abs{
            position: absolute;
            left: 120px;
            width: 350px;
            height: 450px;
        }
        .abs-zero{
            position: absolute;
            bottom: 100px;
            left: 200px;
        }
    }
    .bottom_img{
        position: relative;        
        .abs{
            position: absolute;
            bottom: 0;
            width: 350px;
            height: 450px;
            right:0;
        }
        .abs-x{
            position: absolute;
            right: 100px;
            top: 150px;
        }
    }
  
`
const BtnDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 40px;
`
export {
    HomeWrapper,
    TextWrapper,
    Container,
    ImageWrapper,
    BtnDiv
}