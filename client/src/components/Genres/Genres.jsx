import React from "react";
import useSteamAPI from "../../hooks/useSteamAPI";

// https://partner.steamgames.com/doc/store/tags

export default function Genres() {
  const gamesInGenre = useSteamAPI("genre/strategy");

  console.log(gamesInGenre);

  return (
    <div>
      <h2>Genres</h2>
      <p>
        Genres on Steam are defined by the developer and/or publisher. They
        provide a loose description of the game and are a reflection of what
        genre the developer believes the game falls under. Select a genre to
        browse games by genre.
      </p>
    </div>
  );
}
