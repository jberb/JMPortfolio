import React from 'react'
import NavBar from '../NavBar'
import Type from './Type'
import Wave from './Wave'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiJavascript1, DiReact, DiNodejs,  DiGit, DiAndroid, DiCss3, DiMysql } from "react-icons/di";
import { SiFirebase, SiVercel,   SiVisualstudiocode, } from "react-icons/si";




export default function Home() {
  return (
    <div className='bg-top backgroundimg bg-no-repeat  h-screen' id="home">
     
        
<NavBar/>

<h1 className='textStyle1  font-crimson pt-20'>
<Wave/>
<Wave/>
  {" "} Hi There!!!{" "}
  <Wave/>
  <Wave/>
</h1>
<h1 className="textStyle1 font-crimson py-3 gap-4">
               My Name is   
<strong className="main-name"> Jerry Mark A. Berbaño  </strong>
<br></br>
I'm A
</h1>
<Type/>

<h1 className='textStyle2 '>
            <i>
                <b>
                   SKILLS
                </b>
            </i>
        </h1>
        <ul className=' flex justify-center '>
            <li className='tech-icons'><DiJavascript1/></li>
            <li className='tech-icons'> <DiReact/></li>
            <li className='tech-icons'> <DiNodejs/></li>
            <li className='tech-icons'> <DiGit/></li>
            <li className='tech-icons'><DiAndroid/> </li>
            <li className='tech-icons'> <DiCss3/></li>
            <li className='tech-icons'><DiMysql/> </li>
            <li className='tech-icons'> <SiFirebase/></li>
            <li className='tech-icons'> <SiVercel/></li>
            <li className='tech-icons'> <SiVisualstudiocode/></li>
           
        </ul>
<div className='flex justify-center py-5 '>
<ul className="home-about-social-links ">
<li className="social-icons  px-10  ">
                <a
                  href="https://github.com/jberb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons "
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons px-10">
                <a
                  href="https://twitter.com/Jerryjojo10"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons px-10">
                <a
                  href="linkedin.com/in/jerry-mark-berba�o-261306264/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons px-10">
                <a
                  href="https://www.instagram.com/jmab_11/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
</ul>
</div>

</div>
   
  )
}
