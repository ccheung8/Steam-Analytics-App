import { useEffect } from "react";
import useSteamAnalytics from "./hooks/useSteamAnalytics";
import axios from "axios";

function App() {
  const { newAndTrending, getNewAndTrending } = useSteamAnalytics();

  useEffect(() => {
    getNewAndTrending();
  }, []);

  console.log(newAndTrending.featured_win);

  return (
    <>
      <h1>Steam Analytics App</h1>
      <h2>New and Trending</h2>
      {newAndTrending.featured_win.map((game) => (
        <div key={game.id}>
          <img src={game.header_image} alt={game.name + " Header Image"} />
          {game.name}, ${game.final_price / 100}
        </div>
      ))}
    </>
  );
}

export default App;
