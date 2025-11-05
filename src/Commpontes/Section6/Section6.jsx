import React from 'react'
import Button from '../Button.jsx/Button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Section6 = () => {
    return (
        <div className='flex min-h-screen flex-col justify-center items-center px-10 gap-4 '>
            <h1 className='text-center w-full text-5xl md:text-5xl font-semibold'>How to Get  <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent " >The Card</span></h1>
            <p className=' w-full md:w-1/2 text-center text-[#7A7A7A]'>orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>


            <div className='flex flex-col md:flex-row gap-90 relative '>    
            <div className='w-full h-1 border-t border-dotted border-gray-400 absolute top-8 left-0'></div>
                    <div  style={{
    background: "radial-gradient(at top left, rgba(220, 255, 234, 1) 0%, rgba(27, 117, 107, 1) 77%)"
  }} className='hidden md:flex w-[4vw] h-[4vw] z-50  justify-center items-center rounded-full'> <h1 className='text-2xl  text-white'>01</h1> </div>
    <div style={{
                background: "radial-gradient(at top left, rgba(220, 255, 234, 1) 0%, rgba(27, 117, 107, 1) 77%)"
            }} className='hidden md:flex w-[4vw] h-[4vw] z-50  justify-center items-center rounded-full'> <h1 className='text-2xl text-white'>02</h1> </div>   </div>
         
         
            <div className=' flex flex-col  gap-12 md:flex-row text-center'>
                <div    style={{ boxShadow: "rgba(27, 117, 107, 0.24) 3px 8px 20px 0px" }} className='w-80 h-fit flex flex-col gap-2 items-center  p-4 bg-[#FFFFFF] rounded-2xl'>
                    <div className='h-30 w-20'>
                        <img src="../../public/contact-form.png" />
                    </div>

                    <h2 className='text-3xl font-semibold text-[#00180f]'>Submit The Form</h2>
                    <p className='text-[#7A7A7A]'>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis.</p>
                </div>
                <div   style={{ boxShadow: "rgba(27, 117, 107, 0.24) 3px 8px 20px 0px" }}  className='rounded-2xl w-80 h-fit flex flex-col gap-2 items-center p-4 bg-[#FFFFFF] '>
                    <div className='h-30 w-20'>
                        <img  src="../../public/card1.png" />
                    </div>

                    <h2 className='text-3xl font-semibold text-[#001810]'>Wait for response</h2>
                    <p className='text-[#7A7A7A]'>Lorem ipsum dolor sit amet, consectetu adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis.</p>
                    
                </div>

            </div>
       <div className='flex gap-2'>
       <p className='text-[#7A7A7A]'>Get More Special Offer
               
               </p>
               <Link className='text-[#1B766B] flex gap-2  font-bold
' to={"/contact"}>Contact Us<ArrowRight/> </Link>
        
       </div>
       
        </div>
    )
}

export default Section6
