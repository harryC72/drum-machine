import React, { useEffect, useState } from "react";
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

  const handleKeyDown = (e) => {
    if ((e.key === "Q") | (e.key === "q")) {
      const sound = new Audio(letters[0].sound);
      sound && sound.play();
    }
    if ((e.key === "W") | (e.key === "w")) {
      const sound = new Audio(letters[1].sound);
      sound && sound.play();
    }
    if ((e.key === "E") | (e.key === "e")) {
      const sound = new Audio(letters[2].sound);
      sound && sound.play();
    }
    if ((e.key === "A") | (e.key === "a")) {
      const sound = new Audio(letters[3].sound);
      sound && sound.play();
    }
    if ((e.key === "S") | (e.key === "s")) {
      const sound = new Audio(letters[4].sound);
      sound && sound.play();
    }
    if ((e.key === "D") | (e.key === "d")) {
      const sound = new Audio(letters[5].sound);
      sound && sound.play();
    }
    if ((e.key === "Z") | (e.key === "z")) {
      const sound = new Audio(letters[6].sound);
      sound && sound.play();
    }
    if ((e.key === "X") | (e.key === "x")) {
      const sound = new Audio(letters[7].sound);
      sound && sound.play();
    }
    if ((e.key === "C") | (e.key === "c")) {
      const sound = new Audio(letters[8].sound);
      sound && sound.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

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
