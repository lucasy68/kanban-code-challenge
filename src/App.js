import "./App.scss";
import { Typography, Box, Card, Chip } from "@mui/material";
import CardsItem from "./components/CardsItem";
function App() {
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
          sx={{
            width: "20%",
            height: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Chip
            label="Todo"
            color="primary"
            sx={{ fontSize: "20px", padding: "10px", margin: "15px 0" }}
          />
          <CardsItem />
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
            label="In Progress"
            color="secondary"
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
