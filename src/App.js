import "./styles.css";
import React from "react";
import { useState } from "react";

const channeldb = {
  Podcast: [
    { name: "BeerBiceps", creator: "Ranveer  Allahbadia" },
    { name: "TeaWithTanay", creator: "Tanay Pratap" }
  ],
  Comedy: [
    { name: "MostlySane", creator: "Prajakta Kolhi" },
    { name: "Captain Nick", creator: "Niharika Singh" }
  ],
  WebSeries: [
    { name: "TVF", creator: "Arunabh Kumar" },
    { name: "DiceMedia", creator: "Ashwin, Anirudh & Aditi" }
  ]
};

export default function App() {
  function generehandler(genere) {
    setGenereState(genere);
  }
  const [genereState, setGenereState] = useState("Podcast");

  return (
    <div className="App">
      <h1>Youtube Channels</h1>
      <h2>Checkout my favoroute Youtube channels</h2>

      {Object.keys(channeldb).map((channel) => (
        <button
          class="button"
          onClick={() => {
            generehandler(channel);
          }}
        >
          {channel}
        </button>
      ))}

      <hr></hr>

      {channeldb[genereState].map((g) => (
        <div class="maindiv">{g.name}</div>
      ))}
    </div>
  );
}
