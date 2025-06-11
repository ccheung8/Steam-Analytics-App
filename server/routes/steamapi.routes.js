import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/featured", async (_, res) => {
  const newAndTrending = await axios.get(
    "https://store.steampowered.com/api/featured"
  );

  res.json(newAndTrending.data);
});

export default router;
