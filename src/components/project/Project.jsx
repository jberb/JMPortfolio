import React from 'react'
import UC from '../../assets/construction-under-construction.gif';
import ProjectCard from './ProjectCard';
import Img1 from '../../assets/jmab1.jpg';
import proData from './ProData';

export default function Project() {
  return (
    <div className='bg-top bg-purple-400 py-20 flex flex-col items-center justify-center font-tektur '  id='project'>
      
      <h1 className='textStyle1 font-poppins text-3xl py-8 uppercase bold italic'>Beginner's Project</h1>
     
      <div className="flex flex-col sm:gap-9 sm:flex-row">
        {proData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            links={project.links}
          />
        ))}
      </div>
      <h1 className='textStyle1 font-poppins text-3xl py-8 uppercase bold italic'>Intermediate Project</h1>
      <div className=' text-center text-3xl'>
        <h1>Under Construction</h1>
        <br />
        <img className='h-96 ' src={UC} alt="" />
      </div>
    </div>
  )
}
