import React from 'react'
import { Header, Transition } from 'semantic-ui-react'

import { Avocado } from '../SVG'

/* type AnimatedHeaderProps = {
  visible: boolean
  onClick: () => void
  onComplete: () => void
} */

const AnimatedHeader = ({
  visible,
  onClick,
  onComplete,
}) => (
  <Header size="huge" as="h1" onClick={onClick}>
    Platzi
    <Transition
      animation="jiggle"
      visible={visible}
      duration={900}
      onComplete={onComplete}
    >
      <Avocado size="58px" />
    </Transition>
    Avo
  </Header>
)

export default AnimatedHeader
