import "./App.scss";
import { Typography, Box, Card, Chip } from "@mui/material";
import CardItem from "./components/CardItem";
import { ItemsContext } from "./itemContext/ItemsContexts";
import { useContext } from "react";
function App() {
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

  const handleOnDrop = (e) => {
    let tempData = JSON.parse(e.dataTransfer.getData("temp"));
    console.log(tempData);
    let categoryToRemove = tempData[0];
    let idToRemove = tempData[1][0];
    let item = tempData[1][1];
    if (e.target.id && e.target.id !== categoryToRemove) {
      switch (e.target.id) {
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

      let tempArr = {};
      let newArr = {};

      if (e.target.id && e.target.id !== categoryToRemove) {
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
    }
  };
  return (
    <div className="App">
      <Typography variant="h3" mt={20}>
        Kanban Board
      </Typography>
      <Box
        sx={{
          width: "80%",
          height: "70%",
          display: "flex",
          justifyContent: "space-between",
        }}
        mt={5}
      >
        <Card
          id="todo"
          sx={{
            width: "20%",
            height: "80%",
            backgroundColor: "rgba(200, 207, 207, 0.408)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
          }}
        >
          <Chip
            label="Todo"
            color="primary"
            sx={{ fontSize: "20px", padding: "10px", margin: "15px 0" }}
          />
          {todo.length > 0 &&
            todo.map(({ id, item }) => (
              <CardItem key={id} item={[id, item]} category="todo" />
            ))}
        </Card>

        <Card
          id="progress"
          sx={{
            width: "20%",
            height: "80%",
            backgroundColor: "rgba(200, 207, 207, 0.408)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflowY: "auto",
          }}
          onDrop={handleOnDrop}
          onDragOver={(e) => {
            e.preventDefault();
          }}
        >
          <Chip
            label="In Progress"
            color="secondary"
            sx={{ fontSize: "20px", padding: "10px", margin: "15px 0" }}
          />
          {progress.length > 0 &&
            progress.map(({ id, item }) => (
              <CardItem key={id} item={[id, item]} category="progress" />
            ))}
        </Card>
        <Card
          sx={{
            width: "20%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            label="Blocked"
            color="warning"
            sx={{ fontSize: "20px", padding: "10px", margin: "15px 0" }}
          />
        </Card>
        <Card
          sx={{
            width: "20%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            label="Completed"
            color="success"
            sx={{ fontSize: "20px", padding: "10px", margin: "15px 0" }}
          />
        </Card>
      </Box>
    </div>
  );
}

export default App;
