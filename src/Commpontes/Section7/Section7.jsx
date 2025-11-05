import React from 'react'
import CallusSupportButoon from '../CallussupportButoon/CallusSupportButoon'

const Section7 = () => {
  return (
<div className="bg-white text-gray-800 font-sans h-fit mt-5">
      
     
      
      {/* 5. Final Call to Action */}
      <section id="apply" className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)]  text-white px-10 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Your Card?
          </h2>
          <p className="text-lg md:text-xl font-light mb-0">
            Start your application now and get approved in minutes.
          </p>
      <CallusSupportButoon phone="+91 98765 43210" label="Contact Us" />
    
        </div>
      </section>



    </div>
  )
}

export default Section7
