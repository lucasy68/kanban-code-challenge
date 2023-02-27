import { Card, Typography } from "@mui/material";
import React from "react";

const CardItem = ({ key, item }) => {
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
    >
      <Typography sx={{ justifyContent: "center" }}>{item[1]}</Typography>
    </Card>
  );
};

export default CardItem;
