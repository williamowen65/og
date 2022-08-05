import React from 'react'
import styled from 'styled-components'
import CardComponent from '../../features/displayCard/components/Card.js'
import Card, { idGen } from './CardArchiveSetup.js'




export default () => {


  return (
    <>
      <Card
        title="Wasdfdsf"
        imgSrc={"https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80"}
        pretext="Hello world"
        attributes={['refs to an ENUM list']}
        link={"https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80"}
        key={idGen.next().value}
        id={idGen.next().value}
      >
        <h4>Title</h4>
        <p>This is the test for body text</p>
        <p>This is the test for body text</p>
      </Card>

      <Card
        title="Wasdfdsf"
        imgSrc={"https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80"}
        pretext="Hello world"
        attributes={['refs to an ENUM list']}
        link={"https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80"}
        key={idGen.next().value}
        id={idGen.next().value}
      >
        <h4>Title</h4>
        <p>This is the test for body text</p>
        <p>This is the test for body text</p>
      </Card>
    </>
  )
}






// const Card = styled.div`

// `

const Title = styled.div`

`