import styled from "styled-components"

interface StyledButtonProps {
    isActive?: boolean
  }

export const Button = styled.button<StyledButtonProps>`
    font-size:16px;
    background-color: #00000077;
    color: white;
    padding: 2%;
    margin-left: 0.5%;
  
    ${(props) =>
    props.isActive ? "border: 2px solid red;" : "border: 1px solid grey;"}
`;