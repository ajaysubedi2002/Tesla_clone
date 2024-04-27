import React from 'react'
import styled from 'styled-components'
import Sections from './Sections'

export default function Home() {
  return (
    <Container>
      <Sections left={"ordernow"} right={"demo ride"} bgImage={"model-y.jpg"} title={"Model y"}  description={"After Federal Tax Credit & Est. Gas Savings" }/>
      <Sections left={"ordernow"} right={"demo ride"} bgImage={"model-x.jpg"} title={"Model x"}  description={"After Federal Tax Credit & Est. Gas Savings" }/>
      <Sections left={"ordernow"} right={"learn more"} bgImage={"solar-panel.jpg"} title={"solar-panel"}  description={"Solar Panels" }/>
      <Sections left={"ordernow"} right={"learn more"}bgImage={"solar-roof.jpg"} title={"solar roof"}  description={"After Federal Tax Credit & Est. Gas Savings" }/>
      
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
 

 

`