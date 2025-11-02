import React from 'react'
import ContactUs from '../Commpontes/Form/ContactUs'
import Nav from '../Commpontes/Nav/Nav'
import Footer from '../Commpontes/Footer/Footer'
const FormPage = () => {
  return (
    <div>
        <Nav/>
<div className='h-full w-full bg-white'>      
    
<div className='p-30'>
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-3 leading-tight text-center  bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent">
  Contact Us
</h1>

<p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-snug text-center max-w-2xl mx-auto">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
  ullamcorper mattis, pulvinar dapibus leo.
</p>

</div>
      <ContactUs className=""></ContactUs></div>
<Footer/>
    </div>
  )
}

export default FormPage
