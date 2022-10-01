import React from "react";
import Pending from "../Pending";
import { usePendings } from "../../providers/PendingsProvider";
import * as Styled from "./styled";
import { STATUSES } from "../../utils/constants";

const Dashboard = () => {
  const { pendings } = usePendings();

  const activePendings = Object.keys(pendings).reduce((previous, key) => {
    const { status, priority, description, dueDate } = pendings[key];
    if (status === STATUSES.ACTIVE)
      previous.push(
        <Pending
          key={key}
          id={key}
          description={description}
          priority={priority}
          dueDate={dueDate}
        />
      );
    return previous;
  }, []);

  return (
    <Styled.Dashboard>
      <Styled.AddButton
        type="button"
        onClick={() => console.log("Add Pending")}
      />
      {activePendings}
    </Styled.Dashboard>
  );
};

export default Dashboard;
