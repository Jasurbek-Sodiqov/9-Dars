import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { styled } from 'styled-components'
import MainMenu from './pages/MainMenu'
import HowToPlay from './pages/HowToPlay'
import CategoryPick from './pages/CategoryPick'


const StyledApp=styled.div`
  width: 375px;
  height: 730px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("../src/assets/bg-mainmenu-mobile.png");
  background-repeat: no-repeat;
  background-color: yellow;
  background-size: cover;
  padding-top: 30px;
`

const App = () => {
  return (
  <BrowserRouter>
    <StyledApp>
      <Routes>
        <Route exact path='/' Component={MainMenu}/>
        <Route path='how-to-play' Component={HowToPlay}/>
        <Route path='categories' Component={CategoryPick}/>
      </Routes>
    </StyledApp>
  </BrowserRouter>
  )
}

export default App
