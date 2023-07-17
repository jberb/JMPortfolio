import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div  className="flex  flex-col text-xs items-center px-10 py-2 bg-gray-800 md:flex-row md:justify-between font-poppins uppercase">
        <h1 className="   py-1  items-center text-white  hover:text-yellow-300 duration-1000">
         Developed by Jerry Mark Berbaño
      </h1>
      <h1 className="py-1   items-center   text-white hover:text-yellow-300 duration-1000">
        Alrights Reserved © 2023 JMAB
      </h1>
      <section className="flex gap-4 text-white text-xl">
        <a href="https://github.com/jberb" target="_blank">
          <FaGithub className="hover:text-yellow-700 duration-1000" />
        </a>
        <a href="https://www.facebook.com/jerry.berbano.311" target="_blank">
          <FaFacebook className="hover:text-yellow-700 duration-1000" />
        </a>
        <a href="https://twitter.com/Jerryjojo10" target="_blank">
          <FaTwitter className="hover:text-yellow-700 duration-1000" />
        </a>
        <a
          href="linkedin.com/in/jerry-mark-berba�o-261306264/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-yellow-700 duration-1000" />
        </a>
        <a href="https://www.instagram.com/jmab_11/" target="_blank">
          <FaInstagram className="hover:text-yellow-700 duration-1000" />
        </a>
      </section>
    </div>
  )
}
