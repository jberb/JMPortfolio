import React from 'react'
import UC from '../../assets/construction-under-construction.gif';
export default function Project() {
  return (
    <div className='bg-top bg-purple-400 py-40 flex flex-col items-center justify-center font-tektur '  id='project'>
      
      
      <p className='text-3xl py-2'> Project Under Construction</p>
     <br />
      <div>
      <img src={UC} alt="" />
      </div>
   
    </div>
  )
}
