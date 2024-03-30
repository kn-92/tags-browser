import { Pagination } from "@mui/material";

import { useStore } from "../../store/store";

const PaginationBox = () => {
  const setPage = useStore((state) => state.setPage);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

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
