import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import Button from '../components/ui/Button'
import EmbeddedLink from '../components/ui/EmbeddedLink.js'
import Modal from '../components/ui/Modal'
import DisplayCard from '../features/displayCard/index'
import configValues from '../data/configValues.json'
import Section from '../components/ui/Section'
import gsap from '../../gsap/gsap.min'
import GSDevTools from '../../gsap/GSDevTools.min'

import { allCards } from '../features/displayCard/layoutStyles/carousel/randomData/CardArchive.js'
// import { allCards } from '../'

export default function Home() {

  // console.log(allCards);
  return (
    <HomeStyled>
      <p>Create and edit cards directly in github by <a target="_blank" href="https://github.dev/williamowen65/og/blob/main/src/features/displayCard/layoutStyles/carousel/randomData/CardArchive.js"> following this link </a></p>


      <DisplayCard
        type='carousel'
        title="Gameplay Cards"
        data={allCards}
      />
    </HomeStyled>
  )
}

const HomeStyled = styled.div`
  a {
    text-shadow: 0px 0px #ff0000;
  }
`


