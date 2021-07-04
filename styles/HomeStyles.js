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
    gap: 100px;
    /* height: 1000px; */
    /* .green-box{
        height: 1000px;
        display: flex;
        flex-direction:column;
    } */
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction:column;
        width: 90%;
        gap:0px;
    }
    
`
const TextWrapper = styled.div`
    align-self: center;
    /* margin-top: -100px; */
    h1{
        font-size: 40px;
        margin-bottom: 40px;
        @media only screen and (max-width: 600px) {
            font-size: 32px;
            text-align: center;
            margin-bottom: 56px;
        }
    }
    .shop_tivin{
        margin-bottom: 24px;
        @media only screen and (max-width: 600px) {
            text-align: center;
        }
    }
    @media only screen and (max-width: 600px) {
        margin-top: 100px;
        margin-bottom: 80px;
    }
`

const ImageWrapper = styled.div`
    /* height: 700px; */
    padding-left: 50px;
    margin-top: 100px;
    @media only screen and (max-width: 600px) {
        margin-top: 0px;
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