import { InputLabel, FormControl, Select, MenuItem } from "@mui/material";

import useSelectChange from "../../../hooks/useSelectChange";

const ElementsNumberField = () => {
  const { inputValue, handleChange } = useSelectChange();
  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{ width: "100px", marginLeft: "20px" }}
    >
      <InputLabel id="elements-label">Elements Number</InputLabel>
      <Select
        labelId="elements-label"
        value={inputValue.current}
        onChange={(e) => handleChange(e, "number")}
        label="Number"
        defaultValue="10"
      >
        <MenuItem value="10">10</MenuItem>
        <MenuItem value="20">20</MenuItem>
        <MenuItem value="30">30</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ElementsNumberField;
