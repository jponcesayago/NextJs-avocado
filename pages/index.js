import React, { useEffect, useState } from 'react';
import { Head } from "next/document";
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import KawaiiHeader from '../components/KawaiiHeader/KawaiiHeader'
import ProductList from '../components/ProductList/ProductList'
import 'semantic-ui-css/semantic.min.css'

const HomePage = (props) => {

    const {productData} = props;
    const [productList, setProductList] = useState([])
/* 
    let libros = {
      title: ["Speaking Javascript", "Programming Javascrip Applications","Understanding ECMAScript 6"],
      author:["Axel Rauschmayer","Eric Elliot","Nicholas C.Zakas"],
      pages:[440,254,352]
    }
    console.log(`${libros.title[0]} ${libros.author[0]} ${libros.pages[0]}`) */
    
     return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link legacyBehavior href="/yes-or-no">
          ¿Deberia comer un avo hoy?
        </Link>
      </section>
      <ProductList products={productData} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
};

export async function   getServerSideProps(){

    const productDataRequest = await import('../pages/api/avo').then(mod =>
        mod.allAvosRequest()
      )
        
    let productData = []
    if (productDataRequest){
        productData = productDataRequest
    }
    return{
        props:{
            productData
        }
    }
}

export default HomePage;