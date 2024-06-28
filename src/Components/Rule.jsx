import React from 'react'
import styled from 'styled-components'

const RulesContainer = styled.div`
    background-color: #fbf1f1;
    padding: 20px;
    font-family: "Poppins", sans-serif;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 35px;
    border-radius: 10px;
    h2
    {
        font-size: 24px;
    }
    .text{
        margin-top: 15px;
        line-height: 10px;
        font-size: 16px;
    }

`

const Rule = () => {
  return (
    <RulesContainer>
        <h2>How to play dice game: </h2>
        <div className="text">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>After click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>Points will be added in Total Score</p>
            <p>If you get wrong guess then  2 points will be dedcuted </p>
            <p>Click on Reset Total Score to start the new game.</p>
        </div>
    </RulesContainer>
  )
}

export default Rule