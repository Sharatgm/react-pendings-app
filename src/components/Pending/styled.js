import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { PRIORITIES } from "../../utils/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  height: 200px;
  width: 200px;
  padding: 15px;
  margin: 20px;
  background-color: #ffffff;
  -webkit-box-shadow: 0px 0px 18px -2px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 0px 18px -2px rgba(168, 168, 168, 1);
  box-shadow: 0px 0px 18px -2px rgba(168, 168, 168, 1);
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Description = styled.p`
  font-size: 16px;
`;

const Status = styled.p`
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
`;

const DoneButton = styled.button`
  border-radius: 10px;
  padding: 5px;
  border: 1px solid #43ed3f;
  background-color: #43ed3f;
  cursor: pointer;
  :active {
    background-color: #3acd36;
  }
`;

const DeleteButton = styled.button`
  height: 20px;
  width: 22px;
  border-radius: 10px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  :active {
    background-color: #edefed;
  }
`;

const PrioritySpan = styled.span`
  padding: 0px 2px;
  border-radius: 5px;
  ${({ priority }) => {
    switch (priority) {
      case PRIORITIES.LOW:
        return css`
          border: 1px solid #fae17b;
          background-color: #fae17b;
        `;
      case PRIORITIES.MEDIUM:
        return css`
          border: 1px solid #ffbd59;
          background-color: #ffbd59;
        `;
      case PRIORITIES.HIGH:
        return css`
          border: 1px solid #ff9467;
          background-color: #ff9467;
        `;
      default:
        return "";
    }
  }}
`;

export {
  Container,
  TopBar,
  Description,
  Status,
  BottomBar,
  DoneButton,
  PrioritySpan,
  DeleteButton,
};
