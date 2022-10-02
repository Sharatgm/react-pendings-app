import React, { useState, useContext, createContext } from "react";
import defaultPendings from "../../utils/defaultPendings";

const PendingsContext = createContext(null);

const PendingsProvider = ({ children }) => {
  const [pendings, setPendings] = useState(defaultPendings);

  const updatePending = ({ id, attribute, value }) => {
    setPendings((previousPendings) => {
      return {
        ...previousPendings,
        [id]: {
          ...previousPendings[id],
          [attribute]: value,
        },
      };
    });
  };

  const addPending = ({
    status = "",
    description = "",
    dueDate = "",
    priority = "",
  }) => {
    setPendings((previousPendings) => {
      const newId = Object.keys(pendings).pop() + 1;
      const newPendings = {
        ...previousPendings,
        [newId]: {
          id: newId,
          status,
          description,
          dueDate,
          priority,
        },
      };
      return newPendings;
    });
  };

  return (
    <PendingsContext.Provider value={{ pendings, updatePending, addPending }}>
      {children}
    </PendingsContext.Provider>
  );
};

const usePendings = () => {
  const context = useContext(PendingsContext);
  if (!context) {
    throw new Error(`Can't use "usePendings" without a PendingsProvider`);
  }

  return context;
};

export { usePendings, PendingsProvider as default };
