import NumberSelector from "./NumberSelector"
import RollDice from "./RollDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button, OutlineButton } from "../style/Button"
import Rule from "./Rule"
const MainContainer = styled.main`
   
   padding-top: 70px;
    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: 1280px;
    }

    .btns
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-top: 14px;
    }
`


const GamePlay = () => {

    const [score, setScore] = useState(0); // total score
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const[error, setError] = useState("");
    const[showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min) + min); // generating random number
    };

    const rollDice = () =>{
        const randomNumber = generateRandomNumber(1, 7); // to generate random number

        if(!selectedNumber)
         {
            setError("You have not selected any number!");
            return;
        }
       
        
        setCurrentDice(prev => randomNumber);
        

        if(selectedNumber === randomNumber) // checking with dice if equal or not
        {
            setScore(prev => prev + randomNumber);
        }
        else
        {
            setScore(prev => prev - 2);
        }

        setSelectedNumber(undefined);
    }

    const resetScore =() =>{
        setScore(0);
    }


  return (
    <MainContainer>
        <div className="top">
        <TotalScore score = {score} />
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
        
        </div>
        <RollDice currentDice={currentDice} rollDice={rollDice}/>
        <div className="btns">
        <OutlineButton onClick={resetScore}
        >Reset Total Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide ": "Show"} Rules</Button>
        </div>
   { showRules && <Rule />}
    </MainContainer>
  )
}

export default GamePlay
