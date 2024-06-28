import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 18px;
    font-size: 16px;
    min-width: 220px;
    background: black;
    border-radius: 5px;
    border: none;
    color: white;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`;
export const OutlineButton = styled(Button)`
    padding: 10px 18px;
    font-size: 16px;
    min-width: 220px;
    background: white;
    border-radius: 5px;
    border: none;
    color: black;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    border: 1px solid black;
    cursor: pointer;
    transition: 0.4s background ease-in;

    &:hover{
        background-color: black;
        border: 1px solid transparent;
        color: white;
        transition: 0.3s background ease-in;
    }
`;
