import { useState } from 'react'
import PlayersList from './components/PlayersList'
import SelectedPlayer from "./components/SelectedPlayer";
import './App.css'
import React from 'react';

const selectedPlayerId = null
const setSelectedPlayerId = null

function App() {
  const [selectedPlayerId, setSelectedPlayerId ] = useState(null)

  return (
    <>
       {/* {selectedPlayerId ? (
      <SelectedPlayer selectedPlayerId={selectedPlayerId} setSelectedPlayerId={setSelectedPlayerId} />
    ) : (
      <PlayersList setSelectedPlayerId={setSelectedPlayerId} />
    )} */}
    <PlayersList/>
    </>
  )
}

export default App
