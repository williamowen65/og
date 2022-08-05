import React from 'react'
import styled from 'styled-components'
import Card, { idGen } from './CardArchiveSetup.js'

import * as A from './Attributes.js'



export const allCards = [
  (() => {

    const UniqueCardStyle = styled.div`
      h4 {
        color: red !important
      }
    `
    return (<Card
      title="Wasdfkkkdsf"
      imgSrc={(<img
        src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
        style={{
          width: 'auto'
        }}
      />)}
      pretext="Hello world"
      attributes={[A.STRENGTH, A.ENDURANCE]}
      link={"example.com"}
      callToAction="Accept Challenge"
      id={idGen.next().value}
    >
      <UniqueCardStyle>

        <h4>Title</h4>
        <p>This is the test for body text</p>
        <p>This is the test for body text</p>
        <p>This is the test for body text</p>
      </UniqueCardStyle>
    </Card>)
  })(),




  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={[A.STEALTH, A.VIRTUE]}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Title</h4>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
    <p>This is the test for body text</p>
  </Card>,
]









// const Card = styled.div`

// `

// const Title = styled.div`

// `