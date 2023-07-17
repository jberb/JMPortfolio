import React from 'react'
import Type from './Type'
import Wave from './Wave'
import Skills from './Skills'
import Socials from './Socials'




export default function Home() {
  return (
    <div className='bg-top bg-purple-400 text-sm py-20 sm:text-lg' id="home">
<h1 className='textStyle1 italic  font-crimson py-4 pt-20'>
<Wave/>
<Wave/>
  {" "} Hi There!!!{" "}
  <Wave/>
  <Wave/>
</h1>
<h1 className="textStyle1 font-crimson italic py-3 gap-4">
               My Name is   
<strong className="font-tektur text-blue-500"> Jerry Mark A. Berbaño  </strong>
<br></br><br />
I'm A
</h1>
<Type/>
<Skills/>
<Socials/>

        


</div>
   
  )
}
