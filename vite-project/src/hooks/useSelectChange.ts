import { useRef } from "react";

import { useStore } from "../store/store";

import { SelectChangeEvent } from "@mui/material";

const useSelectChange = () => {
  const inputValue = useRef<string>();

  const updateElementsNumber = useStore((state) => state.setNumberOfElements);
  const updateSort = useStore((state) => state.setSort);
  const updateOrder = useStore((state) => state.setOrder);

  const handleChange = (e: SelectChangeEvent<string>, name: string) => {
    inputValue.current = e.target.value;
    if (name === "number") {
      updateElementsNumber(inputValue.current);
    }
    if (name === "sort") {
      updateSort(inputValue.current);
    }
    if (name === "order") {
      updateOrder(inputValue.current);
    }
  };

  // const handlenNumberChange = (e: SelectChangeEvent<string>) => {
  //   inputValue.current = e.target.value;
  //   updateElementsNumber(inputValue.current);
  // };

  // const handleSortChange = (e: SelectChangeEvent<string>) => {
  //   inputValue.current = e.target.value;
  //   updateSort(inputValue.current);
  // };

  // const handleOrderChange = (e: SelectChangeEvent<string>) => {
  //   inputValue.current = e.target.value;
  //   updateOrder(inputValue.current);
  // };

  return {
    inputValue,
    // handlenNumberChange,
    // handleSortChange,
    // handleOrderChange,
    handleChange,
  };
};

export default useSelectChange;
