import Layout from "../components/Layout/Layout";
import "../styles.css";
import  Head  from "next/head";
import CartProvider from '../store/Cart'
import {Provider} from 'react-redux'
import store from '../store/store'

export function reportWebVitals(metric) {
    //console.log(metric)
    // analytics - calibre
    // serverAnulicts.log(metric)
  }
  
export default function MyApp({ Component, pageProps }) {

    

    return (    
        <>
           
            <Head>
                <title>Avocado Web</title>
            </Head>
            <Provider store={store}>
                <CartProvider>
                    <Component {...pageProps} />
                </CartProvider>
            </Provider>
         
        </>
    
        
    )
    
    
  }