import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 75px;

  padding: 0px 10px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  background-color: #8f8f8f;

  font-size: 24x;

  user-select: none; /* Impede a seleção de texto */
  pointer-events: none; /* Impede a interação do mouse */

  input {
    width: 100%;
    height: 75px;
    border: none;
    background-color: #8f8f8f;
    color: white;
    font-size: 24px;
    text-align: right;
    padding: 0px 10px;
  }
 `; 