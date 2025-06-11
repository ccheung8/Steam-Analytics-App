const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: ["http://localhost:5173"],
};

const PORT = 8888;

app.use(cors(corsOptions));

app.get("/api", async (_, res) => {
  const newAndTrending = await axios.get(
    "https://store.steampowered.com/api/featured"
  );

  res.json(newAndTrending.data);
});

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
