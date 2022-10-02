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

    let active = Object.keys(pendings)
      .sort((keyA, keyB) => pendings[keyA].dueDate - pendings[keyB].dueDate)
      .filter((key) => pendings[key].status === STATUSES.ACTIVE);

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
        {activePendings.reduce((previous, key) => {
          const { priority, description, dueDate } = pendings[key];
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
        }, [])}
      </Styled.Dashboard>
      Active: {activePendings.length} &nbsp; Done: {doneCount}
    </>
  );
};

export default Dashboard;
