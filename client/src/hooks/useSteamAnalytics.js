import axios from "axios";
import { useState, useEffect } from "react";

const STORE_ENDPOINT = "https://store.steampowered.com/api/";

export default function useSteamAnalytics() {
  const [newAndTrending, setNewAndTrending] = useState([]);

  async function getNewAndTrending() {
    if (newAndTrending.length <= 0) {
      const newAndTrending = await axios.get("http://localhost:8888/api");

      setNewAndTrending(newAndTrending.data);
    }
  }

  return {
    newAndTrending,
    getNewAndTrending,
  };
}
