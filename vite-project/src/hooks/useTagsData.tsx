import useSWR from "swr";

import { getTags } from "../api/api";
import { useStore } from "../store/store";

const useTagsData = () => {
  const tagsByPage = useStore((state) => state.numberOfElements);
  const sort = useStore((state) => state.sort);
  const order = useStore((state) => state.order);
  const page = useStore((state) => state.page);
  const apiUrl = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${tagsByPage}&order=${order}&sort=${sort}&site=stackoverflow`;

  const { data, error, isLoading } = useSWR(apiUrl, getTags);
  return { data, error, isLoading };
};
export default useTagsData;
