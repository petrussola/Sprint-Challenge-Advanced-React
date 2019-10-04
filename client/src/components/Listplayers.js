import React from "react";

import PlayerCard from "./Playercard";

export default function ListPlayers({ players }) {
  return (
    <div>
      {
        players.map(player => {
            return <PlayerCard key={player.id} player={player} />;
      })
      }
    </div>
  );
}
