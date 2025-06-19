import React from "react";
import useSteamAPI from "../../hooks/useSteamAPI";

// https://partner.steamgames.com/doc/store/tags

export default function Genres() {
  // const gamesInGenre = useSteamAPI("genre/strategy");
  // genre IDs I don't want to display
  const miscGenreIDs = [
    "Accounting",
    "Audio Production",
    "Education",
    "Photo Editing",
    "Software Training",
    "Utilities",
    "Video Production",
    "Web Publishing",
    "Controller support",
    "Mac OS X",
    "Linux",
    "genre_demos",
  ];
  const genres = useSteamAPI("genres").genres;

  return (
    <div>
      <h2>Genres</h2>
      <p>
        Genres on Steam are defined by the developer and/or publisher. They
        provide a loose description of the game and are a reflection of what
        genre the developer believes the game falls under. Select a genre to
        browse games by genre.
      </p>
      {genres.map((genre) => {
        /* returns button element if genre is not in misc genres */
        if (!miscGenreIDs.includes(genre.id))
          return <button key={genre.id}>{genre.name}</button>;
      })}
    </div>
  );
}
