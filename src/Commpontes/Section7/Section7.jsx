import React from 'react'
import CallusSupportButoon from '../CallussupportButoon/CallusSupportButoon'

const Section7 = () => {
  return (
<div className="bg-white text-gray-800 font-sans min-h-screen">
      


      {/* 2. Hero Section: Direct & Bold */}
      <main className="container mx-auto px-4 py-16 md:py-32 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900">
          Simplify Your Finances. <br className="hidden md:inline" />Find the Right Card for You.
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          We help you navigate the world of credit cards to find the perfect match for your financial goals.
        </p>
        <a href="#benefits" className="mt-8 md:mt-12 inline-block bg-blue-600 text-white font-bold text-lg py-4 px-12 rounded-full shadow-lg hover:bg-blue-700 transition-all transform hover:scale-105">
          Explore Benefits
        </a>
      </main>

     
      
      {/* 5. Final Call to Action */}
      <section id="apply" className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)]  text-white py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Get Your Card?
          </h2>
          <p className="text-lg md:text-xl font-light mb-8">
            Start your application now and get approved in minutes.
          </p>
      <CallusSupportButoon phone="+91 98765 43210" label="Contact Us" />
    
        </div>
      </section>



    </div>
  )
}

export default Section7
