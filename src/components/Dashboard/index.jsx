import React, { useEffect, useState } from "react";
import Pending from "../Pending";
import NewPendingForm from "../NewPendingForm";
import { usePendings } from "../../providers/PendingsProvider";
import * as Styled from "./styled";
import { STATUSES } from "../../utils/constants";

const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);
  const [doneCount, setDoneCount] = useState(null);
  const [activePendings, setActivePendings] = useState([]);
  const { pendings } = usePendings();

  useEffect(() => {
    const done = Object.keys(pendings).filter(
      (key) => pendings[key].status === STATUSES.DONE
    );

    const active = Object.keys(pendings).reduce((previous, key) => {
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

    setDoneCount(done.length);
    setActivePendings(active);
  }, [pendings]);

  const displayForm = () => {
    setShowForm(true);
  };

  const onFormClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <Styled.Dashboard>
        <NewPendingForm displayForm={showForm} onFormClose={onFormClose} />
        <Styled.AddButton type="button" onClick={displayForm} />
        {activePendings}
      </Styled.Dashboard>
      Active: {activePendings.length} &nbsp; Done: {doneCount}
    </>
  );
};

export default Dashboard;
