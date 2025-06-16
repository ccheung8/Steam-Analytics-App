import React from "react";
import useSteamAPI from "../../hooks/useSteamAPI";

export default function NewAndTrending() {
  const newAndTrending = useSteamAPI("featured");

  return (
    <div>
      <h2>New and Trending</h2>
      {newAndTrending.featured_win?.map((game) => (
        <div key={game.id}>
          <img src={game.header_image} alt={game.name + " Header Image"} />
          <h3>{game.name}</h3>
          <h4>${game.final_price ? game.final_price / 100 : "Free"}</h4>
        </div>
      ))}
    </div>
  );
}
