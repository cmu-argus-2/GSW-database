import express from "express";
import cors from "cors";
import commandRoutes from "./routes/commandRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", commandRoutes);

app.listen(port, () => {
  console.log("Listening on port 3000");
});
