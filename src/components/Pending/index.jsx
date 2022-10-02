import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { usePendings } from "../../providers/PendingsProvider";
import * as Styled from "./styled";
import { PRIORITIES, STATUSES } from "../../utils/constants";

const Pending = ({ id, description, priority, dueDate }) => {
  const { updatePending } = usePendings();
  const [dueDateSoon, setDueDateSoon] = useState(false);
  useEffect(() => {
    if (dueDate) {
      const now = new Date();
      const msBetweenDates = Math.abs(dueDate.getTime() - now.getTime());
      const hours = msBetweenDates / (60 * 60 * 1000);
      if (hours <= 48) {
        setDueDateSoon(true);
      }
    }
  }, [dueDate]);

  const markAsDone = () => {
    updatePending({ id, attribute: "status", value: STATUSES.DONE });
  };

  const deletePending = () => {
    updatePending({ id, attribute: "status", value: STATUSES.DELETED });
  };

  return (
    <Styled.Container dueDateSoon={dueDateSoon}>
      <Styled.TopBar>
        <Styled.Status>
          <Styled.PrioritySpan priority={priority}>
            Priority:
            {priority}
          </Styled.PrioritySpan>
          <br />
          Due date: {`${dueDate.getDate()}`.padStart(2, "0")}-
          {`${dueDate.getMonth() + 1}`.padStart(2, "0")}-
          {`${dueDate.getFullYear()}`.substring(2)}
        </Styled.Status>
        <Styled.DeleteButton dueDateSoon={dueDateSoon}>
          <FontAwesomeIcon icon={faXmark} size="lg" onClick={deletePending} />
        </Styled.DeleteButton>
      </Styled.TopBar>
      <Styled.Description>{description}</Styled.Description>
      <Styled.BottomBar>
        <Styled.DoneButton type="button" onClick={markAsDone}>
          Done <FontAwesomeIcon icon={faCheck} size="xs" />
        </Styled.DoneButton>
      </Styled.BottomBar>
    </Styled.Container>
  );
};

Pending.propTypes = {
  description: PropTypes.string.isRequired,
  priority: PropTypes.oneOf([
    PRIORITIES.HIGH,
    PRIORITIES.LOW,
    PRIORITIES.MEDIUM,
  ]).isRequired,
  status: PropTypes.oneOf([STATUSES.ACTIVE, STATUSES.DELETED, STATUSES.DONE]),
};

export default Pending;
