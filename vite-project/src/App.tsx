import "./App.css";

import { Container } from "@mui/material";

import ControlsBox from "./components/ControlsBox/ControlsBox";

function App() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "20px",
        bgcolor: "gray",
      }}
    >
      <ControlsBox />
    </Container>
  );
}

export default App;
