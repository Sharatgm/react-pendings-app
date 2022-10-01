import { STATUSES, PRIORITIES } from "./constants";

const defaultPendings = {
  1: {
    id: 1,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.HIGH,
    description: "Complete ReactJS course",
    dueDate: "10-10-22",
  },
  2: {
    id: 2,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.MEDIUM,
    description:
      "Go to the market and buy bananas, tomatoes, flour, oat and milk",
    dueDate: "7-10-22",
  },
  3: {
    id: 3,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.MEDIUM,
    description: "Take dogs for their rabbies vaccination",
    dueDate: "12-10-22",
  },
  4: {
    id: 4,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.LOW,
    description:
      "Bake banana bread for Maria's party. Don't forget to add chocolate chips!!",
    dueDate: "3-10-22",
  },
};

export default defaultPendings;
