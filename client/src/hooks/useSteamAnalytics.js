import axios from "axios";
import { useState, useEffect } from "react";

const STORE_ENDPOINT = "https://store.steampowered.com/api/";

export default function useSteamAnalytics() {
  const [featured, setFeatured] = useState([]);

  async function getFeatured() {
    if (featured.length <= 0) {
      const newAndTrending = await axios.get(
        "https://store.steampowered.com/api/featured"
      );

      console.log(newAndTrending.data);
      // setFeatured();
    }
  }

  return {
    featured,
    getFeatured,
  };
}
