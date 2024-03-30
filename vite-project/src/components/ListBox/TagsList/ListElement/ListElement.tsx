import { ListItem, ListItemText } from "@mui/material";
import { ListElementProps } from "./types";

const ListElement = ({ name, count }: ListElementProps) => {
  return (
    <ListItem
      sx={{
        width: "100%",
        border: "1px solid #310f44",
        borderRadius: "5px",
        marginBottom: "10px",
        fontWeight: "bold",
        "&:hover": { bgcolor: "#310f4434", scale: "1.1" },
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
