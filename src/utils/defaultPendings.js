import { STATUSES, PRIORITIES } from "./constants";

const defaultPendings = [
  {
    id: 1,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.HIGH,
    description: "Complete ReactJS course",
    dueDate: new Date("2022-10-10T00:00:00"),
  },
  {
    id: 2,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.MEDIUM,
    description:
      "Go to the market and buy bananas, tomatoes, flour, oat and milk",
    dueDate: new Date("2022-10-07T00:00:00"),
  },
  {
    id: 3,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.MEDIUM,
    description: "Take dogs for their rabbies vaccination",
    dueDate: new Date("2022-10-12T00:00:00"),
  },
  {
    id: 4,
    status: STATUSES.ACTIVE,
    priority: PRIORITIES.LOW,
    description:
      "Bake banana bread for Maria's party. Don't forget to add chocolate chips!!",
    dueDate: new Date("2022-10-03T00:00:00"),
  },
];

export default defaultPendings;
