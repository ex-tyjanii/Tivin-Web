import React, {useEffect} from 'react'
import GlobalStyle from '../styles/GlobalStyle'
import Navbar from '../components/Navbar'
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <GlobalStyle/>
        <Navbar/>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
