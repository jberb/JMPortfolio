import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  const textStyle = "font-poppins text-2xl hover:text-yellow-500 text-sm uppercase";
  return (
    <div className="bg-white bg-opacity-5">
      <nav className=" flex justify-between py-4 px-20">
        <p className="text-white text-2xl uppercase font-crimson">
         JMAB Portfolio
        </p>
        <ul className="text-white  justify-between flex gap-10 text-center  px-36">
          <li>
            <AnchorLink className={textStyle} href="#home">Home</AnchorLink>
          </li>
          <li>
          <AnchorLink className={textStyle} href="#about">About</AnchorLink>
          </li>
          <li>
          <AnchorLink className={textStyle} href="">Project</AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
