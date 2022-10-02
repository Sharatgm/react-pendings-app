import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCheck } from "@fortawesome/free-solid-svg-icons";
import { usePendings } from "../../providers/PendingsProvider";
import * as Styled from "./styled";
import { PRIORITIES, STATUSES } from "../../utils/constants";

const Pending = ({ id, description, priority, dueDate }) => {
  const { updatePending } = usePendings();

  const markAsDone = () => {
    updatePending({ id, attribute: "status", value: STATUSES.DONE });
  };

  const deletePending = () => {
    updatePending({ id, attribute: "status", value: STATUSES.DELETED });
  };

  return (
    <Styled.Container>
      <Styled.TopBar>
        <Styled.Status>
          <Styled.PrioritySpan priority={priority}>
            Priority:
            {priority}
          </Styled.PrioritySpan>
          <br />
          Due date: {dueDate}
        </Styled.Status>
        <Styled.DeleteButton>
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
