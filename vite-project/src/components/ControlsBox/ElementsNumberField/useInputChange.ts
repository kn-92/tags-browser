import { useRef } from "react";

import { useStore } from "../../../store/store";

const useInputChange = () => {
  const inputValue = useRef<string>();

  const updateElementsNumber = useStore((state) => state.setNumberOfElements);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue.current = e.target.value;
    updateElementsNumber(inputValue.current);
  };

  return { inputValue, handleInputChange };
};

export default useInputChange;
