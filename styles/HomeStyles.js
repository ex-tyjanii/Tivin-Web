import styled from 'styled-components';

const HomeWrapper = styled.div`

`
const TextWrapper = styled.div`
    align-self: center;
    margin-top: -100px;
    h1{
        font-size: 40px;
    }
    .shop_tivin{
        margin-bottom: 24px;
    }
`
const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.25fr 2fr;
    /* height: 1000px; */
    .green-box{
        height: 1000px;
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