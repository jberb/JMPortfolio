import React from 'react'

  import { DiJavascript1, DiReact, DiNodejs,  DiGit, DiAndroid, DiCss3, DiMysql } from "react-icons/di";
  import { SiFirebase, SiVercel,   SiVisualstudiocode, } from "react-icons/si";

export default function Skills() {
  return (
    <div className='py-10'>
        <h1 className='textStyle2 font-tektur font-bold italic'>
          SKILLS
        </h1>
        <div className=''>
        <ul className=' flex justify-center gap-5 py-3 ' >
            <li className='tech-icons'><DiJavascript1/></li>
            <li className='tech-icons'> <DiReact/></li>
            <li className='tech-icons'> <DiNodejs/></li>
            <li className='tech-icons'> <DiGit/></li>
            <li className='tech-icons'><DiAndroid/> </li>
        </ul>
        <ul className=' flex justify-center  gap-5'>
        <li className='tech-icons'> <DiCss3/></li>
            <li className='tech-icons'><DiMysql/> </li>
            <li className='tech-icons'> <SiFirebase/></li>
            <li className='tech-icons'> <SiVercel/></li>
            <li className='tech-icons'> <SiVisualstudiocode/></li>
           
        </ul>
        </div>
    </div>
  )
}
