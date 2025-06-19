import { Router } from "express";
import axios from "axios";

const router = Router();

// get new and trending games
router.get("/featured", async (_, res) => {
  const newAndTrending = await axios.get(
    "https://store.steampowered.com/api/featured"
  );

  res.json(newAndTrending.data);
});

// get top selling games
router.get("/topsellers", async (_, res) => {
  const topSelling = await axios.get(
    "https://store.steampowered.com/api/storesearch/?l=english&cc=US"
  );

  res.json(topSelling.data);
});

// get genre
router.get("/genre/:genrename", async (req, res) => {
  const genre = req.params.genrename;

  const gamesInGenre = await axios.get(
    `https://store.steampowered.com/api/getappsingenre/?genre=${genre}&cc=us&l=english`
  );

  res.json(gamesInGenre.data);
});

export default router;
