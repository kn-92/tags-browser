import { useStore } from "../store/store";

const usePaginationPage = () => {
  const setPage = useStore((state) => state.setPage);
  const handleChange = (e: React.ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  return { handleChange };
};

export default usePaginationPage;
