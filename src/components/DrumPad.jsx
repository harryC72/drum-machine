import React, { useRef } from "react";

const DrumPad = ({ label, index, letter, sound, setDisplay }) => {
  const audioRef = useRef(null);
  return (
    <button
      id={label}
      className="drum-pad"
      onClick={() => {
        audioRef.current.currentTime = 0;
        audioRef.current.play();
        setDisplay(label);
      }}
    >
      <audio ref={audioRef} className="clip" id={letter} src={sound}></audio>
      {letter}
    </button>
  );
};

export default DrumPad;
