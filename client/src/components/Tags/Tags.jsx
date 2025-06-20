import React from "react";
import useSteamAPI from "../../hooks/useSteamAPI";

export default function Tags() {
  const tags = useSteamAPI("tags");

  return (
    <div>
      <h2>Tags</h2>
      <p>
        Tags on Steam are more user driven as they can be applied by developers,
        players, and Steam moderators. They allow for a more specific
        description of the game and can include descriptors related to genre,
        visual properties, themes and moods, and features. Tags have a weight
        that fluctuates based on how customers tag the game and the developer's
        set tags. They are ordered from most to least weight and the top 5 tags
        should paint a fairly clear picture of the game. The listed tags are
        ordered by popularity. Select tag(s) to browse games by tag.
      </p>
      {tags.map((tag) => (
        <button key={tag.tagid}>{tag.name}</button>
      ))}
    </div>
  );
}
