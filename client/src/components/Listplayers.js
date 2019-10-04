import React from "react";

import PlayerCard from "./Playercard";

export default function ListPlayers({ players }) {
    debugger
  return (
    <div>
      {
        players.map(player => {
            return <PlayerCard player={player} />;
      })
      }
    </div>
  );
}
