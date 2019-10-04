import React from "react";

export default function PlayerCard({player}) {
  return (
  <div>
      <p>{player.name} [{player.country}]: {player.searches} searches</p>
  </div>
  );
}
