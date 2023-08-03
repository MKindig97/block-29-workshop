import { useState } from "react";
import React from "react";

export default function PlayerRow({ player }) { 
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)
  return (
    <>
    <tr
    onClick={(() => {
      setSelectedPlayerId(!selectedPlayerId)
      setbool(player.id)
    })}>
      <td>{player.name}</td>
      <td>{player.breed}</td>
      <td>{player.status}</td>
    </tr>
    
        </>
    );
          }