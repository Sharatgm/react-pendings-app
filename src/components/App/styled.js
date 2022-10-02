import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 70px 30px 50px 30px;
  box-sizing: border-box;
`;

const Header = styled.div`
  position: fixed;
  height: 40px;
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  box-shadow: 1px 3px 14px 0px rgba(171, 171, 171, 0.75);
  -webkit-box-shadow: 1px 3px 14px 0px rgba(171, 171, 171, 0.75);
  -moz-box-shadow: 1px 3px 14px 0px rgba(171, 171, 171, 0.75);
`;
export { AppContainer, Header };
