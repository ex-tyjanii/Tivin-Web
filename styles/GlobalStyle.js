import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        overflow-x: hidden;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        min-width: 300px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    h1,h2,h3,h4,p{
        margin: 0;
        color:#222020;
    }

    * {
        box-sizing: border-box;
    }
    span{
        margin:0;
    }

`
export default GlobalStyle;