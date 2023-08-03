import { useState, useEffect } from "react"; 
import PlayerRow from "./PlayerRow";
import React from "react";

export default function PlayersList() { 
  const [players, setPlayers] = useState([])
  useEffect(()=>{ async function fetchPlayers() {
    try {
      const response = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-et-web-pt-a/players");
      const { data } = await response.json();
      setPlayers(data.players);
      console.log(data.players);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPlayers();
}, []);
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Good Doggo List</th>
            </tr>
          </thead>
          <tbody>
           {players.map((player) => {
            
           return <PlayerRow key={player.id} player={player} />;
        })}  
          </tbody>
        </table>
    ); 
}