import styled from "styled-components";

const Nav = styled.div`
    position: relative;
    z-index:100000000000000000;
    font-size: 20px;
`

const NavWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    @media only screen and (max-width: 600px) {
        width: 90%;
        height:60px;
    }
`
const NavLinks = styled.div`
    display: flex;
    width: 500px;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 900px) {
        display: none;
    }
`
const Burger = styled.div`
    width: 40px;
    height: 20px;
    align-items: center;
    justify-content: center;
    display: none;
    
    @media only screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

    }

    @media only screen and (max-width: 900px) {
            display: block;
        }
`
const NavResponsive = styled.div`
    height: 100vh;
    width: 100vw;
    background-color:#fff;
    position: absolute;
    overflow-y:hidden;
    display: flex;
    flex-direction: column;
    display: ${props=>props.toggled?'block':'none'};
    /* left: ${props=> props.toggled ?'0px':'100vw'};
    
    transition: all ease-in 5000; */
    .links-div{
        height: 50%;
        padding: 72px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
    }
    .btn-div{
        height: 50%;
        width: 90%;
        margin:0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
       
    }
`
export {
    NavWrapper,
    NavLinks,
    Burger,
    NavResponsive,
    Nav
}