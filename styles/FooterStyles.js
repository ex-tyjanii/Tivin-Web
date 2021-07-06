import styled from 'styled-components';


const FooterWrapper = styled.div`
    width: 80%;
    margin:0 auto;
    padding: 50px 0;
    .purple{
         color: #5D5FEF;
         text-align: center;
         margin-bottom: 32px;
    }
`
const FooterLinks = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   align-items: center;
   gap:56;
    
    div{
        display: grid;
        grid-template-columns: repeat(3,1fr);
        align-self: center;
        gap: 56;
        
    }
`



export {
    FooterWrapper,
    FooterLinks
}