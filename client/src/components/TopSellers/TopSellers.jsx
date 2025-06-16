import React from "react";
import useSteamAPI from "../../hooks/useSteamAPI";

export default function TopSellers() {
  const topSellers = useSteamAPI("topsellers");

  return (
    <div>
      <h2>Top Sellers</h2>
      {topSellers.items?.map((game) => (
        <div key={game.id}>
          <img src={game.tiny_image} alt={"image of " + game.name} />
          <h3>{game.name}</h3>
          <h4>{game.price ? game.price.final / 100 : "Free"}</h4>
        </div>
      ))}
    </div>
  );
}
