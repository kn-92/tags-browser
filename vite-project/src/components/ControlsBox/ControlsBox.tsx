import { Container } from "@mui/material";

import NumberSelect from "./NumberSelect/NumberSelect";
import SortSelect from "./SortSelect/SortSelect";
import OrderSelect from "./OrderSelect/OrderSelect";

const ControlsBox = () => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "right",
      }}
    >
      <NumberSelect />
      <SortSelect />
      <OrderSelect />
    </Container>
  );
};

export default ControlsBox;
