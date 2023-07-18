import React from 'react'
import jmab1 from '../../assets/jmab1.jpg'
import Skills from '../home/Skills';

export default function About() {
  return (
    <div className=' bg-purple-400' id='about'>
   
<div className=' textStyle3 bg-purple-500 flex flex-col sm:flex-row justify-between pt-12 '>
<div className='px-12 sm:px-0 py-5 '>
    <h1 className=' pt-4 font-tektur sm:text-3xl bold italic'>
          ABOUT <strong className="text-yellow-400"> ME</strong>
      </h1>
     
     <p className=' font-poppins text-sm sm:text-xl sm:px-20 sm:pb-20 '>
      
     <br/>
          Hi I am <span className="text-blue-800 font-body">Jerry Mark A. Berbaño </span>
          from <span className="purple"> Cupang Muntinlupa City.</span>
          <br />
          <br />
          I'm a Fresh Graduate from <i><b>PLMun in Bachelors in Science in Computer
          Science</b></i>
         
          <br />
          <br />
          who is eager to apply their skills and contribute to cutting-edge projects. Passionate about creating user-friendly websites and staying up to
          date with emerging technologies
          <br />
          <br />
  
          With a good foundation in web development languages
            <i>
              <b className="text-blue-800 font-tektur"> like Java, HTML, CSS, and JavaScript. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="text-blue-800 font-tektur">Web Technologies and Products </b> and
              {" "}
              <b className="text-blue-800 font-tektur ">
                Game and Mobile application Development.
              </b>
            </i>

          
        </p>
    </div>
      <div className='items-center flex justify-center sm:w-1/2  sm:py-1 pb-5   '>
      <img className='border-8 rounded-full    hover:animate-wave ' src={jmab1} alt="" />
      </div>
        
</div>

<Skills/>
      

  </div>
  
  )
}
