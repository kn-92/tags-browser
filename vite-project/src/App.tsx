import "./App.css";

import { Container } from "@mui/material";

import ControlsBox from "./components/ControlsBox/ControlsBox";
import ListBox from "./components/ListBox/ListBox";
import PaginationBox from "./components/Pagination/Pagination";

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
      <ListBox />
      <PaginationBox />
    </Container>
  );
}

export default App;
