import React, { useEffect } from 'react'
import configValues from '../../data/configValues.json'
import { useSelector } from 'react-redux'
import styled from 'styled-components';
import Carousel from './layoutStyles/carousel/Carousel.js';

export default function DisplayCard({ type = 'small', title, data }) {
  const screenWidth = useSelector(state => state.app.screenWidth)

  // console.log(data);



  let el;

  switch (type) {
    case "carousel":
      el = <Carousel
        cards={data}
        title={title} />
      break;
    default:
      return null
      break;
  }
  return (
    <Article>
      {el}
    </Article>
  )

}


const Article = styled.article`
margin: 60px 0;
position: absolute;
    width: 100vw;
    /* left: -37px; */
    left: 0;
`