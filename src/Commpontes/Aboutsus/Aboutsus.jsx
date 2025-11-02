import React from 'react'
import AboutSection from "./AboutSection"
import TeamSection from "./TeamSection"
import Footer from "../Footer/Footer"
import Frequesntquestion from '../Frequentaskedqeustion/Frequesntquestion'
import Nav from '../Nav/Nav'
const Aboutsus = () => {


const handelKeydown = (e,index) =>{
  if(e.key === "Backspace" && otp[index] === "" && index > 0){
    document.getElementById(`opt-input${index  - 1 }`).focus()
  }
}
  return (
<div>
    <Nav/>
<div className=' w-full'>
<div className=' h-60 w-full back relative text-center'>

<div className='back w-full h-full'>
<h1 className='text-6xl pt-30 font-semibold text-center '>
Our      <span className='gradient-text'>Mission</span> </h1>
    <div className='border-1 bg-black'></div>
    <h2 className='w-full pt-4 text-2xl italic md:px-42 font-bold text-p-light'>"To Provide Quality Financial Services at Less Time"</h2>
</div>

    </div>
   
</div>
<div>
    
</div>
<div>

    <AboutSection/>
    <TeamSection/>
    <Frequesntquestion/>
    <Footer/>
</div>
</div>
  )
}

export default Aboutsus 
