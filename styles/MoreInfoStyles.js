import styled from 'styled-components';


const MoreInfoWrapper = styled.div`
    width: 100%;
    background-color: #F8F8F8;
    margin-bottom: 120px;
`
const MoreInfoGrid = styled.div`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:80px;
    padding: 64px 0;
    @media only screen and (max-width: 800px) {
        width: 90%;
        display: flex;
        flex-direction: column;

    }
    h3{
        margin-bottom:16px;
       
    }
    p{
        color:#373434;
        font-size:14px;
    }
   
`


export {
    MoreInfoWrapper,
    MoreInfoGrid
}