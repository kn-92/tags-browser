import { List, ListItem, ListItemText, Typography } from "@mui/material";

import useTagsData from "../../../hooks/useTagsData";

import { TagItem } from "./types";

const TagsList = () => {
  const { data, error, isLoading } = useTagsData();

  if (isLoading) return <Typography variant="h3">Loading...</Typography>;
  if (error)
    return (
      <Typography color="red" variant="h5">
        {error.toString()}
      </Typography>
    );
  console.log(data);
  console.log(error);
  return (
    <List sx={{ width: "50%" }}>
      {data?.items?.map((tag: TagItem) => (
        <ListItem
          key={tag.name}
          sx={{
            width: "100%",
            border: "1px solid black",
            borderRadius: "5px",
            marginBottom: "10px",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#464646", scale: "1.1" },
            transition: "0.2s",
          }}
        >
          {"#" + tag.name}
          <ListItemText sx={{ marginLeft: "10px", color: "white" }}>
            {"Count: " + tag.count}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default TagsList;
