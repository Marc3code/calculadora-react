import React from "react";
import { InputContainer } from "./style";

const Input = ({value}) =>{
    return (
      <InputContainer>
       <input type="text" />
       {value}
      </InputContainer>
    );
  }

export default Input;