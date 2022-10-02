import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { usePendings } from "../../providers/PendingsProvider";
import * as Styled from "./styled";
import { PRIORITIES, STATUSES } from "../../utils/constants";

const ERROR_MESSAGES = {
  MISSING_VALUE: "This is a required value",
  DUPLICATED_DESCRIPTION: "Duplicated description",
};

const NewPendingForm = ({ displayForm, onFormClose }) => {
  const { pendings, addPending } = usePendings();
  const [error, setError] = useState(false);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const clearForm = () => {
    setDescription("");
    setStatus("");
    setPriority("");
    setFormErrors({});
    setError(false);
  };

  const validateForm = () => {
    const duplicatedDescription =
      description &&
      !!Object.keys(pendings).find(
        (key) => pendings[key].description === description
      );
    const errors = {
      status: !status && ERROR_MESSAGES.MISSING_VALUE,
      description:
        (!description && ERROR_MESSAGES.MISSING_VALUE) ||
        (duplicatedDescription && ERROR_MESSAGES.DUPLICATED_DESCRIPTION),
      priority: !priority && ERROR_MESSAGES.MISSING_VALUE,
    };

    if (errors.status || errors.description || errors.priority) {
      setFormErrors(errors);
      return false;
    }

    return true;
  };

  const closeFormModal = () => {
    clearForm();
    onFormClose();
  };

  const addNewPending = (e) => {
    e.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      addPending({ status, description, priority });
      closeFormModal();
    } else {
      setError(true);
    }
  };

  return (
    <Styled.DarkBackground displayForm={displayForm}>
      <Styled.Modal displayForm={displayForm}>
        <Styled.TopBar>
          <Styled.FormTitle>New pending</Styled.FormTitle>
          <Styled.DeleteButton>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              onClick={closeFormModal}
            />
          </Styled.DeleteButton>
        </Styled.TopBar>

        {/* Description */}
        <Styled.FormContainer onSubmit={addNewPending}>
          <Styled.Label required={true} htmlFor="description">
            Description
          </Styled.Label>
          <Styled.Input
            id="description"
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={formErrors.description}
          ></Styled.Input>
          {formErrors.description && (
            <Styled.ErrorMessage>{formErrors.description}</Styled.ErrorMessage>
          )}

          {/* Status Radio Button */}
          <Styled.Label required={true}>Status</Styled.Label>
          <Styled.RadioButtonContainer error={error && !status}>
            <Styled.RadioInput
              type="radio"
              id="active"
              name="status"
              value={STATUSES.ACTIVE}
              onChange={(e) => setStatus(e.target.value)}
              checked={status === STATUSES.ACTIVE}
            />
            <Styled.RadioInputLabel htmlFor="active">
              Active
            </Styled.RadioInputLabel>
            <Styled.RadioInput
              type="radio"
              id="done"
              name="status"
              value={STATUSES.DONE}
              onChange={(e) => setStatus(e.target.value)}
              checked={status === STATUSES.DONE}
            />
            <Styled.RadioInputLabel htmlFor="done">Done</Styled.RadioInputLabel>
          </Styled.RadioButtonContainer>
          {formErrors.status && (
            <Styled.ErrorMessage>{formErrors.status}</Styled.ErrorMessage>
          )}

          {/* Property Radio Button */}
          <Styled.Label>Priority</Styled.Label>
          <Styled.RadioButtonContainer error={error && !priority}>
            <Styled.RadioInput
              type="radio"
              id="low"
              name="priority"
              value={PRIORITIES.LOW}
              onChange={(e) => setPriority(e.target.value)}
              checked={priority === PRIORITIES.LOW}
            />
            <Styled.RadioInputLabel htmlFor="low">
              {PRIORITIES.LOW}
            </Styled.RadioInputLabel>
            <Styled.RadioInput
              type="radio"
              id="medium"
              name="priority"
              value={PRIORITIES.MEDIUM}
              onChange={(e) => setPriority(e.target.value)}
              checked={priority === PRIORITIES.MEDIUM}
            />
            <Styled.RadioInputLabel htmlFor="medium">
              {PRIORITIES.MEDIUM}
            </Styled.RadioInputLabel>
            <Styled.RadioInput
              type="radio"
              id="high"
              name="priority"
              value={PRIORITIES.HIGH}
              onChange={(e) => setPriority(e.target.value)}
              checked={priority === PRIORITIES.HIGH}
            />
            <Styled.RadioInputLabel htmlFor="high">
              {PRIORITIES.HIGH}
            </Styled.RadioInputLabel>
          </Styled.RadioButtonContainer>
          {formErrors.priority && (
            <Styled.ErrorMessage>{formErrors.priority}</Styled.ErrorMessage>
          )}

          <Styled.FormButton type="submit">Save pending</Styled.FormButton>
        </Styled.FormContainer>
      </Styled.Modal>
    </Styled.DarkBackground>
  );
};

NewPendingForm.propTypes = {
  displayForm: PropTypes.bool.isRequired,
  onFormClose: PropTypes.func.isRequired,
};

export default NewPendingForm;
