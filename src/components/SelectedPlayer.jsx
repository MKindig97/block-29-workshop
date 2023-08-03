import { useEffect, useState } from "react"; 
import React from "react";

export default function SelectedPLayer({ SelectedPlayerId, setSelecetedPlayerId }) { 
  const [player, setPlayer] = useState()
  useEffect(()=>{ async function fetchPlayers() {
    try {
      const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${SelectedPlayerId}`);
      const result = await response.json();
      setPlayer(result);
    } catch (error) {
      console.error(error);
    }
  }
  fetchPlayers();
}, []);
return ( 
 
  <>
    <button onClick ={(() => {
      setSelecetedPlayerId(undefined)

    })} >Back</button>

  </>
); 
}