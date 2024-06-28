
import { useState } from 'react';
import styled from 'styled-components'


const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    font-size: 24px;
    font-weight: 700;
    place-items: center;
    font-family: "Poppins", sans-serif;
    background-color: ${(props) => props.isSelected ? "black" : "white" };
    color: ${(props) => (!props.isSelected) ? "black" : "white" };
    `;
    
const NumberSelectorContainer = styled.div`
  font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px;
    }
    p{

        font-size: 30px;
        font-weight: 700;
    }

    .Error
    {
        color: red;
    }
`
const arrNumber = [1,2,3,4,5,6];

const NumberSelector = ({ error,setError, selectedNumber, setSelectedNumber}) => {

    const numberSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("");
    }

  return (
    <NumberSelectorContainer>
        <p className='Error'>{error}</p>
    <div className='flex'>
        {
            arrNumber.map((value, i) => (
            <Box 
            isSelected= {value === selectedNumber}
            key = {i} onClick={() =>
                 numberSelectorHandler(value)}> {value}
                 </Box>))
        }
        {/* <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box> */}

    </div>
    <p>
        Select Number
    </p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector