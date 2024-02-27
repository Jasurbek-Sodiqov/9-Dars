import React from 'react'
import { styled } from 'styled-components'

const StyledButton=styled.button`
  width: 260px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #2463FF;
  box-shadow: 0px -2px 0px 3px #140E66 inset, 0px 1px 0px 6px #3C74FF inset;
  color: #FFF;
  font-family: "Mouse Memoirs", sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; 
  letter-spacing: 1.6px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  border-radius: ${(props)=>props.variant?80:20}px;
`

export default StyledButton
