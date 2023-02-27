import { Card ,Typography} from "@mui/material";
import React from "react";

const CardsItem = () => {
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
      <Typography sx={{ justifyContent: "center" }}>www</Typography>
    </Card>
  );
};

export default CardsItem;
