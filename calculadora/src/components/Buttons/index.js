import React from "react";
import { ButtonContainer } from "./style";

const Button = ({Label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {Label}
      </ButtonContainer>
    );
  }

export default Button;