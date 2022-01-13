import TimelineComponent from "./TimelineComponent";
import "./App.css";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: green;
`;
function App() {
  return (
    <Container>
      <TimelineComponent />
    </Container>
  );
}

export default App;
