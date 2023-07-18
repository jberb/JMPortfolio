import React from 'react'
import developer from '../../assets/developer.svg';
import Type from './Type'
import Wave from './Wave'
export default function Intro() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center py-2'>
    
    <div>
    <h1 className="textStyle1 font-crimson italic px-5 py-3 gap-4 ">
                   My Name is   
    <strong className="font-tektur text-blue-500"> Jerry Mark A. Berbaño  </strong><br />
    </h1>
    <h1 className="textStyle1 font-crimson italic py-2  gap-2 flex">I'm A <Type/></h1>

    <p className='px-8 text-xs textStyle1 font-crimson bold text- uppercase sm:text-xl sm:px-24 sm:py-5'>
    Im  a programmer with experience in web development with good  foundation in front-end development with some experience in backend technology. 
    I also possess some experience in game development. 
    Through my journey, I have cultivated a deep passion for programming and a commitment to delivering high-quality, 
    user-centric solutions.With a continuous desire to expand my knowledge and stay up-to-date with industry trends, 
    I am dedicated to making meaningful contributions to the ever-evolving world of technology.
    </p>
    </div>
   

    <img className='sm:w-1/3' src={developer} alt="" />
    </div>
  )
}
