import "./styles.css";
import React from "react";
import { useState } from "react";

const channeldb = {
  Podcast: [
    {
      name: "BeerBiceps",
      creator: "Ranveer  Allahbadia",
      desc:
        "India's smartest podcast featuring some of the country's most SUCCESSFUL people with the most INSPIRING stories.",
      rating: "4.8"
    },
    {
      name: "TeaWithTanay",
      creator: "Tanay Pratap",
      desc:
        "Join Tanay in his light-hearted conversations with people to learn about programming, entrepreneurship, and personal growth. ",
      rating: "5"
    },
    {
      name: "Podcast of Sandeep",
      creator: "Sandeep Maheshwari",
      desc:
        "Sandeep Maheshwari is a name among millions who struggled, failed and surged ahead in search of success, happiness and contentment.",
      rating: "4.8"
    }
  ],
  Comedy: [
    {
      name: "MostlySane",
      creator: "Prajakta Kolhi",
      desc:
        "Prajakta Koli is an Indian YouTuber and actress who makes comedy videos. ... She is popularly known by her YouTube name MostlySane.",
      rating: "5"
    },
    {
      name: "Captain Nick",
      creator: "Niharika Singh",
      desc:
        "Captain Nick welcomes you aboard on HAHA Flight l0l to humorland with continuing service to Roflberg.Fasten your seatbelt and get ready for a hilarious ride",
      rating: "4.8"
    },
    {
      name: "Ashish Chanchalani Vines",
      creator: "Ashish Chanchalani",
      desc: "He makes homemade funny vines and videos",
      rating: "4.9"
    }
  ],
  WebSeries: [
    {
      name: "TVF",
      creator: "Arunabh Kumar",
      desc:
        "The Viral Fever, abbreviated to TVF, is an Indian video on demand and over-the-top streaming service and YouTube channel started by TVF Media Labs in 2010",
      rating: "4.8"
    },
    {
      name: "DiceMedia",
      creator: "Ashwin, Anirudh & Aditi",
      desc:
        "Dice Media is the premium digital video division of Pocket Aces. They make web series and shows",
      rating: "4.8"
    },
    {
      name: "Filter Copy",
      creator: "Ashwin, Anirudh & Aditi",
      desc:
        "Freshly brewed videos from the sharable content platform of Pocket Aces. We make awesome short videos that you can relate to!",
      rating: "4.7"
    }
  ]
};
export default function App() {
  var [selectedGenere, setGenere] = useState("Podcast");
  function genereHandler(genere) {
    setGenere(genere);
  }
  return (
    <div className="App">
      <h1>
        <img
          alt="icon"
          src="https://image.flaticon.com/icons/png/512/1384/1384060.png"
          height="100px"
          width="100px"
        />
        <span class="top"> GoodChannels</span>
      </h1>
      {Object.keys(channeldb).map((channel) => (
        <button class="button" onClick={() => genereHandler(channel)}>
          {channel}
        </button>
      ))}
      <div class="center">
        <hr />

        {channeldb[selectedGenere].map((ch) => (
          <div class="list">
            <h3>{ch.name}</h3>
            <h5 class="details">
              <b>{ch.creator}</b>
            </h5>
            <h6 class="details">{ch.desc}</h6>
            Rating : {ch.rating}
          </div>
        ))}
      </div>
    </div>
  );
}
