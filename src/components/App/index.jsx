import React from "react";
import Dashboard from "../Dashboard";
import PendingsProvider from "../../providers/PendingsProvider";
import * as Styled from "./styled";

const App = () => {
  return (
    <>
      <Styled.Header>My Pendings</Styled.Header>
      <Styled.AppContainer>
        <PendingsProvider>
          <Dashboard />
        </PendingsProvider>
      </Styled.AppContainer>
    </>
  );
};

export default App;
