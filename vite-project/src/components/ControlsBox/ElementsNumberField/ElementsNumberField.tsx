// import { useRef } from "react";

import { Input } from "@mui/material";

// import { useStore } from "../../../store/store";

import useInputChange from "./useInputChange";

const ElementsNumberField = () => {
  //   const inputValue = useRef<string>();

  //   const updateElementsNumber = useStore((state) => state.setNumberOfElements);

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     if (Number(e.currentTarget.value) > 0) {
  //       inputValue.current = e.currentTarget.value;
  //       updateElementsNumber(inputValue.current);
  //     }
  //   };

  const { inputValue, handleInputChange } = useInputChange();
  return (
    <Input
      inputProps={{ min: 10 }}
      type="number"
      sx={{ maxWidth: "50px" }}
      onChange={handleInputChange}
      value={inputValue.current}
    />
  );
};

export default ElementsNumberField;
