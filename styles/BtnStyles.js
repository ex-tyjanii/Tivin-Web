import styled from 'styled-components'


const BtnStyles = styled.a`
    height: 50px;
    padding: 0 20px;
    background-color: #222020;
    color:#fff;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
const DownloadBtn = styled.a`
    background-color: #222020;
    color:#fff;
    padding: 10px 15px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        margin-left: 10px;
    }
    p{
        color:#fff;
        margin-bottom:0;
    }
    .regular-font{
        font-size: 10px;
    }
    .bold-font{
        font-weight:bold;
    }
`
export {
    BtnStyles,
    DownloadBtn
}

