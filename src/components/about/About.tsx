import React from 'react'


export default function About() {
  return (
    <div className=' textStyle2 backgroundimg flex justify-between' id='about'>
    <div className='w-1/2 mx-24'>
    <h1 className=' pt-6'>
          ABOUT <strong className="text-yellow-400"> ME</strong>
      </h1>
     
     <p className=' font-crimson'>
      
     <br/>
          Hi I am <span className="text-purple-400 font-poppins">Jerry Mark A. Berbaño </span>
          from <span className="purple"> Cupang Muntinlupa City.</span>
          <br />
          <br />
          I'm a Fresh Graduate from <i><b>PLMun in Bachelors in Science in Computer
          Science</b></i> who is eager to apply their skills and contribute to
         
          <br />
          <br />
          cutting-edge projects. Passionate about creating user-friendly websites and staying up to
          date with emerging technologies
          <br />
          <br />
  
          With a good foundation in web development languages
            <i>
              <b className="text-purple-400"> like HTML, CSS, and JavaScript. </b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="text-purple-400">Web Technologies and Products </b> and
              {" "}
              <b className="text-purple-400">
                Game and Mobile application Development.
              </b>
            </i>

          
        </p>
    </div>
      
        <img className='w-1/2 ' src="src\assets\jmab.JPG" alt="" />

  </div>
  
  )
}
