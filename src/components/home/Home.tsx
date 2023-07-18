import React from 'react'
import Intro from './Intro'
import Skills from './Skills'
import Socials from './Socials'
import Wave from './Wave'


export default function Home() {
  return (
    <div className='bg-top bg-purple-400 text-sm py-10 sm:text-lg' id="home">

<h1 className='textStyle1 italic pt-20  font-crimson sm:text-4xl'>
    <Wave/>
    <Wave/>
      {" "} Hi There!!!{" "}
      <Wave/>
      <Wave/>
    </h1>
<Intro/>
<Skills/>
<Socials/>

        


</div>
   
  )
}
