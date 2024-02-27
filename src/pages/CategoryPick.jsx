import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import StyledHeadingComp from '../components/StyledHeading'
import StyledButtonComp from '../components/StyledButton'
import StyledButton from '../components/StyledButton'


const StyledCategoryPick=styled.div`
    width: 325px;
    margin-top: -70px;
`
const StyledHero=styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const StyledCategories=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    gap: 16px;
`
const CategoryPick = () => {
  return (
    <StyledCategoryPick>
        <StyledHero>
            <Link to={"/"}>
                <img src="../src/assets/to-back-icon.svg" alt="Back" />
            </Link>
            <StyledHeadingComp text={"Pick a Category"}/>
        </StyledHero>
        <StyledCategories>
            <StyledButton>MOVIES</StyledButton>
            <StyledButton>TV SHOWS</StyledButton>
            <StyledButton>COUNTRIES</StyledButton>
            <StyledButton>CAPITAL CITIES</StyledButton>
            <StyledButton>ANIMALS</StyledButton>
            <StyledButton>SPORTS</StyledButton>
        </StyledCategories>
    </StyledCategoryPick>
  )
}

export default CategoryPick
