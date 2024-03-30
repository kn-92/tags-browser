import { ListItem, ListItemText } from "@mui/material";
import { ListElementProps } from "./types";

const ListElement = ({ name, count }: ListElementProps) => {
  return (
    <ListItem
      sx={{
        width: "100%",
        border: "1px solid #9e02f8",
        borderRadius: "5px",
        marginBottom: "10px",
        fontWeight: "bold",
        "&:hover": { bgcolor: "#9e02f8", scale: "1.1" },
        transition: "0.2s",
      }}
    >
      {"#" + name}
      <ListItemText sx={{ marginLeft: "10px", color: "orange" }}>
        {"Count: " + count}
      </ListItemText>
    </ListItem>
  );
};

export default ListElement;
