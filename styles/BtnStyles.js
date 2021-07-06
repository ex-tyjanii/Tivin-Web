import styled from 'styled-components'


const BtnStyles = styled.a`
    height: 50px;
    background-color: #222020;
    color:#fff;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 15px;
    
    @media only screen and (max-width: 800px) {
        font-size: 14px;
        width: 100%;
    }
`

export {
    BtnStyles,
}

