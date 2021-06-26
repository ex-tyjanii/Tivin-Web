import styled from 'styled-components';

const Wrapper = styled.div`
    width: 80%;
    margin:0 auto;
    display: grid;
    grid-template-columns: 40% 60%;
    margin-top: 150px;
    @media screen and (min-width:200px) and (max-width:900px){
        display: flex;
        flex-direction: column;
        margin-top: 0;
    }
    
`
const TextDiv = styled.div`
    align-self: center;
    h1{
        font-size: 36px;
        margin-bottom: 24px;
        @media only screen and (max-width: 1000px) {
            font-size: 32px;
        }
        @media only screen and (max-width: 600px) {
            font-size: 28px;
        }
    }
    p{
        font-size: 16px;
        color:#373434;
        margin-bottom: 40px;
        line-height: 1.5;
        width: 90%;
        @media only screen and (max-width: 800px) {
            font-size: 14px;
        }
        @media only screen and (max-width: 600px) {
           width: 100%;
        }
    }
    div{
        width: 50%;
        @media only screen and (max-width: 600px) {
            width: 60%;
        }
    }
    .shop_tivin{
        margin-bottom: 24px;
        @media only screen and (max-width: 600px) {
            /* text-align: center; */
        }
    }
`
const ImageDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    .img-div{
        width: 500px;
        height: 500px;
        position: relative;
        @media only screen and (max-width: 600px) {
            /* width: 250px; */
            /* height: 250px; */
            width: 80%;
            height: 250px;
        }
        @media only screen and (max-width: 100px) {
            
            width: 100%;
            height: 500px;
        }
    }
    /* @media only screen and (max-width: 600px) {
        margin-top: 80px;
        justify-content: center;
    } */
    @media screen and (min-width:200px) and (max-width:900px){
        justify-content: center;
    }
`




export {
    Wrapper,
    TextDiv,
    ImageDiv
}