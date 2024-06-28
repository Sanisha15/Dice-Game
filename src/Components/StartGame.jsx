import styled from "styled-components"
import {Button} from "../style/Button";

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    font-family: "Poppins", sans-serif;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content h1
    {
        font-size: 96px;
        white-space: nowrap;
    }
`;

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
        <img src="/image/dices 1.png" alt="" />   
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now </Button>
        </div>
    </Container>
  )
}

export default StartGame