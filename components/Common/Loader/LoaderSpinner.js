import React from 'react'
import { Dimmer, Loader, Image, Segment, Container } from 'semantic-ui-react'

const LoaderSpinner = ( {config} ) => {
  //console.log(config)
  const {size, inverted} = config;
  return ( 
    <Container>
      <Loader active inverted={inverted}  size = {size} ></Loader>
    </Container>
    
  )
}


export default LoaderSpinner