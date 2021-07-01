import styled from 'styled-components';


const CardSectionWrapper = styled.div`
    width: 80%;
    margin: 80px auto 50px;
    .gridd{
        display: grid;
        gap:50px;
    }
    .light_text{
        text-align: center;
    }
    .heading_text{
        text-align: center;
        margin:16px 0 40px;
    }
    .mobile-display{
        @media only screen and (min-width: 800px) {
            display: none;
        }
    }
    @media only screen and (max-width: 800px) {
        width: 90%;
    
    }
`
 const CardWrapper = styled.div`
    .photo-wrapper{
        position: relative;
        height: ${ props=>props.divHeight || '30vh' };

       @media screen and (min-width:600px) and (max-width:801px){ 
            height: ${ props=>props.divHeight || '50vh' };
        }
    }
    .content-wrapper{
        padding: 24px;
        box-shadow: 0px 0px 12px rgba(188, 188, 188, 0.25);

        h4{
            margin-bottom: 16px;
        }
        p{
            margin-bottom: 30px;
            line-height: 1.4;
        }
    }
 `
const GridsWrapper =  styled.div`
    display: grid;
    grid-template-columns: 1fr 1.3fr 1fr;
    gap:24px;
    align-items: center;
    div{
        width: 100%;
    }
    @media only screen and (max-width: 800px) {
        display: none;
    }
`
export {
    CardSectionWrapper,
    CardWrapper,
    GridsWrapper
}