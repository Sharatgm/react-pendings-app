import styled, { css } from "styled-components";

const DarkBackground = styled.div`
  display: ${({ displayForm }) => (displayForm ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

const Modal = styled.div`
  display: ${({ displayForm }) => (displayForm ? "block" : "none")};
  background-color: #f4f2ec;
  padding: 20px;
  width: 300px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const DeleteButton = styled.button`
  height: 20px;
  width: 22px;
  border-radius: 10px;
  border: none;
  background-color: #f4f2ec;
  cursor: pointer;
  :active {
    background-color: #ebe8e1;
  }
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0;
  width: 100%;
`;

const Input = styled.input`
  display: block;
  font-size: 14px;
  width: 100%;
  border: none;
  height: 25px;
  padding: 0 5px;
  box-sizing: border-box;
  ${({ error }) =>
    error &&
    css`
      border: 1px solid #ff7177;
    `}
`;

const FormTitle = styled.h3`
  margin: 5px 0;
`;

const FormButton = styled.button`
  height: 30px;
  background-color: #43ed3f;
  border: 1px solid #43ed3f;
  margin-top: 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  :active {
    background-color: #3acd36;
  }
`;

const RadioInput = styled.input`
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  :checked + label {
    background-color: #ffffff;
    box-shadow: none;
  }
`;

const RadioInputLabel = styled.label`
  background-color: #f4f2ec;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.2);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`;

const RadioButtonContainer = styled.div`
  margin: 10px 0;
  width: 100%;
`;

const ErrorMessage = styled.p`
  margin: 5px 0;
  color: #ff7177;
  font-size: 14px;
  width: 100%;
  text-align: left;
`;

export {
  Modal,
  DarkBackground,
  TopBar,
  DeleteButton,
  FormContainer,
  Label,
  Input,
  FormTitle,
  FormButton,
  RadioInput,
  RadioInputLabel,
  RadioButtonContainer,
  ErrorMessage,
};
