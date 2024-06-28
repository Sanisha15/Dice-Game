import React from 'react'
import styled from 'styled-components'

const ScoreContainer = styled.div`
    max-width: 200px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0;
    }
    p{
        font-size: 24px;
        font-weight:700;
        margin: 0;
    }

`;

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
</ScoreContainer>

  )
}

export default TotalScore