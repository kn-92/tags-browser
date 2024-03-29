import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

import useSelectChange from "../../../hooks/useSelectChange";

const SortSelect = () => {
  const { inputValue, handleChange } = useSelectChange();

  return (
    <FormControl
      variant="outlined"
      size="small"
      sx={{ width: "100px", marginLeft: "20px" }}
    >
      <InputLabel id="order-label">Order</InputLabel>
      <Select
        defaultValue="asc"
        labelId="order-label"
        label="Order"
        onChange={(e) => handleChange(e, "order")}
        value={inputValue.current}
      >
        <MenuItem value="asc">Asc</MenuItem>
        <MenuItem value="desc">Desc</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
