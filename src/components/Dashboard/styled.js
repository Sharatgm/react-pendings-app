import styled from "styled-components";

const Dashboard = styled.div`
  height: 100%;
  width: 100%;
  background-color: #f4f2ec;
  border: 1px solid #f4f2ec;
  --auto-grid-min-size: 16rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  overflow-y: scroll;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  height: 200px;
  width: 200px;
  margin: 20px;
  cursor: pointer;

  background: linear-gradient(
      to top left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      to top right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) calc(50% - 0.8px),
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0) calc(50% + 0.8px),
      rgba(0, 0, 0, 0) 100%
    );
`;

export { Dashboard, AddButton };
