import styled from "styled-components";


const NavWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    
    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`
const NavLinks = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 600px) {
        display: none;
    }
`
const Burger = styled.div`
    width: 40px;
    height: 20px;
    /* background-color: red; */
    display: none;

    span{
        height: 5px;
        width: 100%;
        background-color: black;
        /* display: block; */
        @media only screen and (max-width: 600px) {
            display: block;
        }
    }
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }
`

export {
    NavWrapper,
    NavLinks,
    Burger
}