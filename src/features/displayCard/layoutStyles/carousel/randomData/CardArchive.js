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
      title="Welcome to <br/> Outside Games"
      imgSrc={(<img
        src='https://images.unsplash.com/photo-1659264734757-e87d622e76ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1068&q=80' alt="Dfsd"
        style={{

        }}
      />)}
      pretext="Are you up for a challenge?"
      attributes={[A.STRENGTH, A.ENDURANCE]}
      link={"http://www.example.com"}
      callToAction="Accept Challenge"
      id={idGen.next().value}
    >
      <UniqueCardStyle>

        <h4>First Challenge</h4>
        <p>Create 5 cards!</p>
      </UniqueCardStyle>
    </Card>)
  })(),




  <Card
    title="Some Card"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1657299156791-44140a28a518?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=900&q=60' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={[A.STEALTH, A.VIRTUE]}
    link={"http://www.example.com"}
    callToAction="Accept Challenge"
    id={idGen.next().value}

  >
    <h4>Header</h4>
    <p>sdsad</p>
  </Card>,
  <Card
    title="Wasdssdfdsf"
    imgSrc={(<img
      src='https://images.unsplash.com/photo-1498940757830-82f7813bf178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
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
      src='https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' alt="Dfsd"
      style={{
        width: 'auto'
      }}
    />)}
    pretext="Hello world"
    attributes={['refs to an ENUM list']}
    link={"http://www.example.com"}
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
    link={"http://www.example.com"}
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
    link={"http://www.example.com"}
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
    link={"http://www.example.com"}
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