import express from "express";
import cors from "cors";
import cmd_rx_routes from "./routes/cmd_rx_routes.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", cmd_rx_routes);

app.listen(port, "0.0.0.0", () => {
  console.log("Listening on port 3000");
});
