import { useEffect } from "react";
import NewAndTrending from "./components/NewAndTrending/NewAndTrending";
import TopSellers from "./components/TopSellers/TopSellers";

function App() {
  return (
    <>
      <h1>Steam Analytics App</h1>
      <TopSellers />
      <NewAndTrending />
    </>
  );
}

export default App;
