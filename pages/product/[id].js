import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import {useDispatch, useSelector} from 'react-redux'
import  Layout from "../../components/Layout/Layout";
import ProductSummary from '../../components/ProductSummary/ProductSummary'

import LoaderSpinner from "../../components/Common/Loader/LoaderSpinner";
import {setLoadingSpinner} from '../../store/actions/eventsAction'

export const getStaticPaths = async () => {
    const data  = await import('../../pages/api/avo').then(mod =>
        mod.allAvosRequest()
    )
   
  
    const paths = data?.map(({ id }) => ({ params: { id } }))
    //console.log(paths)
  
    return {
      // Statically generate all paths
      paths,
      // Display 404 for everything else
      fallback: false,
    }
}

export const getStaticProps = async ({params: { id }})=> {

    let productData = {};
    //console.log(id)
    const data  = await import('../../pages/api/avo').then(mod =>
        mod.avoByIdRequest(id)
    )
    
    //console.log(data)

    if (data){
        productData = data
    }
    return {
        props:{
            loading: false,
            product : productData
        }
    }
}


const ProductItem = (props) => {

    const dispatch = useDispatch()
    const {loading} = useSelector(state => state.events)

    const {product} = props;
    //const {loading} = props;

    useEffect(() => {
        dispatch(setLoadingSpinner(false)) 
      }, [dispatch])

    console.log(loading)
    const loaderConfig = {
        size: 'big',
        inverted: false
    }
    return (
        <>
            <Layout>
            {loading === false ? 
                <>{product == null ? null : <ProductSummary product= {product} />}</> :
                     <LoaderSpinner config = {loaderConfig} /> }
            </Layout>
        </>
    );
};

export default ProductItem;