import express from "express";
import cors from "cors";
import Router from "./routes/steamapi.routes.js";

const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const PORT = 8888;

app.use(cors(corsOptions));
app.use("/api", Router);

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
