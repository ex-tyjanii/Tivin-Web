import styled from 'styled-components';


const PreFooterWrapper = styled.div`
   
    background-color: #222020;
    width: 100%;
    p{
    color:#fff;
    }
`
const PreFooterGrid = styled.div`
    width: 80%;
    margin:0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    .logo_div{
        width: 40%;
        height: 5vh;
        position: relative;
    }
    .img_div{
        @media only screen and (max-width: 800px) {
            margin-top: 80px;
        }
    }
    .text_content{
   
        p{
            margin-bottom: 24px;
            margin-top: 24px;
        }
    }
    @media only screen and (max-width: 800px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        padding-top: 60px;
    }
`
const DownloadBtnsGrid = styled.div`
    margin-left: -15px;
    display: flex;
`

export {
    PreFooterWrapper,
    PreFooterGrid,
    DownloadBtnsGrid
}