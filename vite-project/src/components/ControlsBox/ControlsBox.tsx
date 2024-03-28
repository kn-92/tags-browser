import { Container } from "@mui/material";

import ElementsNumberField from "./ElementsNumberField/ElementsNumberField";

const ControlsBox = () => {
  return (
    <Container
      sx={{ display: "flex", alignItems: "center", justifyContent: "right" }}
    >
      <ElementsNumberField />
    </Container>
  );
};

export default ControlsBox;
