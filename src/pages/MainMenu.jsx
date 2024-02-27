import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import StyledButton from '../components/StyledButton'



const StyledMainMenu=styled.div`
  width: 325px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 135px;
`
const StyledBox=styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 48px;
  background: linear-gradient(180deg, #344ABA 0%, rgba(0, 20, 121, 0.83) 100%);
  box-shadow: 0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset;
  padding-top: 140px;
  padding-bottom: 65px;
  margin-top: 55px;
`


const MainMenu = () => {
  return (
    <StyledMainMenu>
      <img style={{position: 'absolute'}} src="../src/assets/game-logo.png" alt="The Hangman Game" />
      <StyledBox>
        <Link to={"/categories"}>
          <img  style={{cursor: 'pointer', marginBottom: "60px"}} src="../src/assets/start-button.svg" alt="Start game" />
        </Link>
        <Link to={"/how-to-play"} style={{textDecorationLine: 'none'}}>
          <StyledButton variant="true" >How to Play</StyledButton>
        </Link>
      </StyledBox>
    </StyledMainMenu>
  )
}

export default MainMenu
