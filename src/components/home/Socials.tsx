import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import { FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <div className='flex justify-center'>
        <section className="flex gap-4 text-black text-xl  ">
        <a className=' border-2 h-8 w-8 flex justify-center items-center bg-white rounded-full' href="https://github.com/jberb" target="_blank" >
          <FaGithub className="hover:text-purple-700 duration-1000 hover:text-3xl " />
        </a>
        <a className='border-2 h-8 w-8 flex justify-center items-center bg-white rounded-full' href="https://www.facebook.com/jerry.berbano.311" target="_blank">
          <FaFacebook className="hover:text-purple-700 duration-1000 hover:text-3xl" />
        </a>
        <a className='border-2 h-8 w-8 flex justify-center items-center bg-white rounded-full' href="https://twitter.com/Jerryjojo10" target="_blank">
          <FaTwitter className="hover:text-purple-700 duration-1000 hover:text-3xl" />
        </a>
        <a className='border-2 h-8 w-8 flex justify-center items-center bg-white rounded-full'
          href="linkedin.com/in/jerry-mark-berba�o-261306264/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-purple-700 duration-1000 hover:text-3xl" />
        </a>
        <a  className='border-2 h-8 w-8 flex justify-center items-center bg-white rounded-full' href="https://www.instagram.com/jmab_11/" target="_blank">
          <FaInstagram className="hover:text-purple-700 duration-1000 hover:text-3xl" />
        </a>
      </section>

    </div>
  )
}
