import React, { useState, useEffect } from 'react'
//import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

import { Header, Button } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'

/* type YesOrNoApiResponse = {
  data: 'yes' | 'no'
} */

const fetchResult = async () => {
  const res = await fetch('https://platzi-avo.vercel.app/api/yes-or-no')
  const { data } = await res.json()
  console.log(data)
  return data
}

export async function getServerSideProps() {
  //const initialResult = await fetchResult()
  let initialResult = ''
  const {data} = await import('../pages/api/avo').then(mod =>
    mod.yesOrNo()
  )
  //console.log(resp,initialResult)

  initialResult = data
  return {
    props: {
      initialResult,
    },
  }
}

const YesOrNo = ({ initialResult }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(initialResult)
  const [triggerCount, setTriggerCount] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    fetchResult().then((initialResult) => {
      setResult(initialResult)
      setIsLoading(false)
    })
  }, [triggerCount])

  const onClick = async () => {
    setTriggerCount(triggerCount + 1)
  }

  return (
    <Layout>
      <div>
        <Header as="h1" color={isLoading ? 'grey' : 'green'}>
          {result}
        </Header>

        <p>
          <Button
            color="green"
            onClick={onClick}
            loading={isLoading}
            disabled={isLoading}
          >
            Intentar de nuevo
          </Button>
        </p>
        <p>
          <Link legacyBehavior href="/">
            <a className="ui black button basic">Volver al inicio</a>
          </Link>
        </p>
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
        div :global(h1.header) {
          font-size: 7rem;
          text-transform: uppercase;
        }
      `}</style>
    </Layout>
  )
}

export default YesOrNo
