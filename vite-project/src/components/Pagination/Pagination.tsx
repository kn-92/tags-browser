import { Pagination } from "@mui/material";

import usePaginationPage from "../../hooks/usePaginationPage";

const PaginationBox = () => {
  const { handleChange } = usePaginationPage();
  return (
    <Pagination
      sx={{ marginBottom: "20px" }}
      defaultPage={1}
      count={25}
      onChange={handleChange}
    />
  );
};

export default PaginationBox;
