import { Card, Typography } from "@mui/material";
import { React, useContext } from "react";
import { ItemsContext } from "../itemContext/ItemsContexts";

const CardItem = ({ item, category }) => {
  const {
    todo,
    setTodo,
    progress,
    setProgress,
    blocked,
    setBlocked,
    completed,
    setCompleted,
  } = useContext(ItemsContext);
  const handleOnDrag = (e) => {
    e.dataTransfer.setData("temp", JSON.stringify([category, item]));
  };
  const handleOnDrop = async (e) => {
    let tempData = JSON.parse(e.dataTransfer.getData("temp"));
    let categoryToRemove = tempData[0];
    let idToRemove = tempData[1][0];
    let item = tempData[1][1];
    if (category !== categoryToRemove) {
      console.log("dddd");
      switch (category) {
        case "todo":
          setTodo([...todo, { id: idToRemove, item }]);
          break;
        case "progress":
          setProgress([...progress, { id: idToRemove, item }]);
          break;
        case "blocked":
          setBlocked([...blocked, { id: idToRemove, item }]);
          break;
        case "completed":
          setCompleted([...completed, { id: idToRemove, item }]);
          break;
        default:
      }
    }

    let tempArr = {};
    let newArr = {};

    if (category !== categoryToRemove) {
      console.log("dddd");
      switch (categoryToRemove) {
        case "todo":
          tempArr = todo;
          newArr = tempArr.filter((item) => item.id !== idToRemove);
          setTodo(newArr);
          break;
        case "progress":
          tempArr = progress;
          newArr = tempArr.filter((item) => item.id !== idToRemove);
          setProgress(newArr);
          break;
        case "blocked":
          tempArr = blocked;
          newArr = tempArr.filter((item) => item.id !== idToRemove);
          setBlocked(newArr);
          break;
        case "completed":
          tempArr = completed;
          newArr = tempArr.filter((item) => item.id !== idToRemove);
          setCompleted(newArr);
          break;
        default:
      }
    }
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
      onDrop={handleOnDrop}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <Typography sx={{ justifyContent: "center" }}>{item[1]}</Typography>
    </Card>
  );
};

export default CardItem;
