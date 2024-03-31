import { FormControl, Select, InputLabel, MenuItem } from '@mui/material';

import useSelectChange from '../../../hooks/useSelectChange';

const SortSelect = () => {
  const { inputValue, handleChange } = useSelectChange();

  return (
    <FormControl variant="outlined" size="small" sx={{ width: '100px', marginLeft: '20px' }}>
      <InputLabel id="sort-label">Sort</InputLabel>
      <Select
        labelId="sort-label"
        label="Age"
        onChange={(e) => handleChange(e, 'sort')}
        ref={inputValue}
        defaultValue="popular"
      >
        <MenuItem value="popular">Popular</MenuItem>
        <MenuItem value="activity">Activity</MenuItem>
        <MenuItem value="name">Name</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SortSelect;
