import React from "react";
import aadi from "../images/aadi.jpg"
import western from "../images/westernghats.jpg"
import redfort from "../images/redfort.jpg"
import chatrapathi from '../images/sivaji.jpg'
import ganga from '../images/ganga.jpg'
import bandi from '../images/bandi.jpg'
import aaa from '../images/suntemple.jpg'
const heritageData = [
  {
    id: 1,
    name: "Modhera Sun Temple",
    description: "",
    image: aaa,
  },
  {
    id: 2,
    name: "Adi Annamalai temple",
    description: "",
    image: aadi,
  },
  {
    id: 3,
    name: "Western Ghats",
    description: "",
    image: western
  },
  {
    id: 4,
    name: "Red Fort",
    description: "Inscripted by UNESCO In 2007",
    image: redfort
  },
  {
    id: 5,
    name: "Chhatrapati Shivaji Terminus",
    description: "",
    image: chatrapathi
  },
  {
    id: 6,
    name: "Bandipur National Park",
    description: "",
    image: bandi
  },
  {
    id: 7,
    name: "Ganga Aarti",
    description: "",
    image: ganga
  },
];

const Heritage = () => {
  return (
    <div>
      {heritageData.map((heritage) => (
        <div key={heritage.id}>
          <h2>{heritage.name}</h2>
          <img src={heritage.image} alt={heritage.name} />
          <p>{heritage.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Heritage;