import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;

    .Dice
    {
        cursor: pointer;
    }

    p{
        font-size: 24px;
    }
`


const RollDice = ({currentDice, rollDice}) => {

   

  
  return (
    <DiceContainer>
        <div className='Dice' onClick={rollDice}>
            <img src={`image/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice