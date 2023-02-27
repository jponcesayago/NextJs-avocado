import React from 'react'
import { Card } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image'
import {useDispatch, useSelector} from 'react-redux'
import {setLoadingSpinner} from '../../store/actions/eventsAction'
import LoaderSpinner from "../../components/Common/Loader/LoaderSpinner";

/* type ProductListProps = {
  products: TProduct[]
} */

const mapProductsToCards = (products) =>
  products.map(({ name, id, price, image }) => (
    <Link legacyBehavior key={id} href={`/product/${id}`} passHref>
      <Card
        onClick={handleClickCard}
        as="a"
        header={name}
        image={{ children: <Image alt='' src={image} width={333} height={333} /> }}
        meta={{
          children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
        }}
      />
    </Link>
  ))

const ProductList = ({ products }) =>{

  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.events)
  console.log(loading)

  const handleClickCard = () =>{
    dispatch(setLoadingSpinner(true))
    //console.log('apreto')
  }
  
  const loaderConfig = {
    size: 'big',
    inverted: false
}

  return(
    ( loading === false ? <Card.Group itemsPerRow={2} stackable>
      {  products.map(({ name, id, price, image }) => (
      <Link legacyBehavior key={id} href={`/product/${id}`} passHref>
        <Card
          onClick={handleClickCard}
          as="a"
          header={name}
          image={{ children: <Image alt='' src={image} width={333} height={333} /> }}
          meta={{
            children: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
          }}
        />
      </Link>
    ))}
    </Card.Group> : <LoaderSpinner config = {loaderConfig} />)
    
)

}

/* (
    <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group> 

) */
   


export default ProductList