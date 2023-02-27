import { Card, Typography } from "@mui/material";
import React from "react";

const CardItem = ({ item, category }) => {
  const handleOnDrag = (e) => {
    e.dataTransfer.setData("temp", JSON.stringify([category, item]));
  };
  return (
    <Card
      sx={{
        width: "80%",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "15px",
      }}
      draggable
      onDragStart={handleOnDrag}
    >
      <Typography sx={{ justifyContent: "center" }}>{item[1]}</Typography>
    </Card>
  );
};

export default CardItem;
