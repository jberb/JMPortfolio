import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="textStyle1">
    <Typewriter 
      options={{
        strings: [
          "Web Developer",
          "Programmer",
          "Pro Gamer",
          "Enthusiastic Fresh Graduate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
    </div>
  );
}

export default Type;
