import React, { useState } from "react";
import "./DrumContainer.css";
import DrumPad from "./DrumPad";

// const letters with an array of letters starting with the letters: "Q", "W", "E", "A", "S", "D", "Z", "X", "C"

const sounds = {
  heater1: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  heater2: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  heater3: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  heater4: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  clap: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  openHH: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  kickNHat: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  kick: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  closedHH: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
};

const letters = [
  { letter: "Q", label: "Heater 1", sound: sounds.heater1 },
  { letter: "W", label: "Heater 2", sound: sounds.heater2 },
  { letter: "E", label: "Heater 3", sound: sounds.heater3 },
  { letter: "A", label: "Heater 4", sound: sounds.heater4 },
  { letter: "S", label: "Clap", sound: sounds.clap },
  { letter: "D", label: "Open HH", sound: sounds.openHH },
  { letter: "Z", label: "Kick n' Hat", sound: sounds.kickNHat },
  { letter: "X", label: "Kick", sound: sounds.kick },
  { letter: "C", label: "Closed HH", sound: sounds.closedHH },
];

const DrumContainer = () => {
  const [display, setDisplay] = useState("");

  return (
    <div id="drum-machine">
      <section className="pad-bank">
        {letters.map((item, index) => {
          return (
            <DrumPad
              key={item.letter + index}
              {...item}
              setDisplay={setDisplay}
            />
          );
        })}
      </section>
      <section id="display">{display}</section>
    </div>
  );
};

export default DrumContainer;
