import styled from 'styled-components';


const ImageShowcaseWrapper = styled.div`
    width: 90%;
    height: 800px;
    float: right;
    display: grid;
    grid-template-columns: 10% 30% 60%;
    align-items: center;
    gap: 24px;
    margin-bottom: 50px;
    margin-top: 50px;
    .wrapper_0{
        display: flex;
        justify-content: center;
        @media screen and (min-width:200px) and (max-width:1000px){
            display: none;
        }
    }
    @media screen and (min-width:500px) and (max-width:1000px){
        width: 95%;
        grid-template-columns: 1fr 1fr;
        height: 100vh;
        gap: 0;
    }
    @media screen and (min-width:100px) and (max-width:499px){
        width: 95%;
        grid-template-columns: 1fr 1fr;
        height: 60vh;
        gap: 0;
    
    }
`
const PhoneDiv = styled.div`
    position: relative;
    height: 800px;
    @media screen and (min-width:500px) and (max-width:1000px){
        height: 100vh;
    }
    @media screen and (min-width:100px) and (max-width:499px){
        height: 60vh;
    }
`
const PhotoGridWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 480px;
    gap: 16px;
    .wrapper_1{
        position: relative;
    }
    .wrapper_2{
        display: grid;
        grid-template-rows: 1fr 1fr;
        gap: 16px;
        div{
            position: relative;
        }
        @media screen and (min-width:200px) and (max-width:1000px){
            display: none;
        }
    }
    @media screen and (min-width:500px) and (max-width:1000px){
        height: 60vh;
        grid-template-columns:1fr;
        gap: 0;
    }
    @media screen and (min-width:100px) and (max-width:499px){
        height: 30vh;
        grid-template-columns:1fr;
    }
`

export {
    ImageShowcaseWrapper,
    PhoneDiv,
    PhotoGridWrapper
}