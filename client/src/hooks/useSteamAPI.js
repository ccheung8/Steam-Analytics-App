import axios from "axios";
import { useState, useEffect } from "react";

const ENDPOINT = "http://localhost:8888/api/";

export default function useSteamAPI(path) {
  const [data, setData] = useState([]);

  async function getData() {
    setData((await axios.get(ENDPOINT + path)).data);
  }

  useEffect(() => {
    getData();
  }, [path]);

  return data;
}
