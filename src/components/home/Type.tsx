import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className=" font-tektur ">
    <Typewriter 
      options={{
        strings: [
          "Web Developer",
          "Programmer",
          "Pro Gamer",
          "Motivated Graduate",
          "Game Dev",
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        cursor:"🤸",
      }}
    />
    </div>
  );
}

export default Type;
