import { List, Typography } from "@mui/material";

import useTagsData from "../../../hooks/useTagsData";

import { TagItem } from "./types";
import ListElement from "./ListElement/ListElement";

const TagsList = () => {
  const { data, error, isLoading } = useTagsData();

  if (isLoading) return <Typography variant="h3">Loading...</Typography>;
  if (error)
    return (
      <Typography color="red" variant="h5">
        {error.toString()}
      </Typography>
    );

  return (
    <List sx={{ width: "50%" }}>
      {data?.items?.map((tag: TagItem) => (
        <ListElement key={tag.name} name={tag.name} count={tag.count} />
      ))}
    </List>
  );
};

export default TagsList;
