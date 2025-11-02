import React from 'react'
import Button from '../Button.jsx/Button';
import { ArrowRight } from "lucide-react";
import { ShieldCheck,Plane ,ClockPlus,Headset} from 'lucide-react';



const Section3 = () => {
    return (
        <div className='w-screen h-full bg-[#F9F9F9]  flex flex-col lg:flex-row lg:gap-0  px-6 pt-8  lg:pb-0 max-w-[1400px] 2xl:max-w-[1800px] mx-auto gap-6'  >
            <div className='w-full lg:w-1/2   lg:px-28 lg:p-18 text-start flex   gap-4 flex-col bg'>
                <h1 className=' text-4xl  pr-5 md:text-5xl md;p-0 lg:text-7xl font-semibold text-text-primery'>Banking Solution That Works Around You in <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent " >Easy Way</span></h1>
                <p className='text-xl pr-8 font-light    pt-4  text-p-light'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur.
                </p>
                <Button style={"primary"} image={"./Fonts/hand.png"} buttonText={"Know More "} />
            </div>
            <div className='w-full flex justify-center p-8 flex-col md:flex-row md:px-0 lg:flex-row lg:w-1/2'>
                <div className=' lg:w-1/2 flex  flex-col gap-2  '>

                   
                <div className="max-w-sm   py-14 mx-auto  rounded-2xl p-6 shadow-lg shadow-[#D6E2E0] transition-shadow duration-300">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3">
                            {/* Certification Icon */}
                            <div className="text-green-700">
                             <ShieldCheck className='w-10 h-10' />
                            </div>
                            <h2 className="text-4xl  text-gray-900">Certified</h2>
                        </div>


                        {/* Description */}
                        <p className="text-gray-500 mt-3 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>


                        {/* Learn More Link */}
                        <button className="mt-5 flex items-center gap-2 text-green-700 font-medium hover:underline">
                            Learn More <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                
                    <div className="max-w-sm   py-14 mx-auto hover:bg-white rounded-2xl p-6 hover:shadow-lg shadow-[#D6E2E0] transition-shadow duration-300">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3">
                            {/* Certification Icon */}
                            <div className="text-green-700">
                             <Plane className='h-10 w-10'/>
                            </div>
                            <h2 className="text-4xl  text-gray-900">Transparant</h2>
                        </div>


                        {/* Description */}
                        <p className="text-gray-500 mt-3 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>


                        {/* Learn More Link */}
                        <button className="mt-5 flex items-center gap-2 text-green-700 font-medium hover:underline">
                            Learn More <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>





                </div>
                <div className='w-full lg:w-1/2 flex  pt-8 flex-col gap-2.5  '>


               
                <div className="max-w-sm   py-14 mx-auto  hover:bg-white rounded-2xl p-6 hover:shadow-lg shadow-[#D6E2E0] transition-shadow duration-300">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3">
                            {/* Certification Icon */}
                            <div className="text-green-700">
                         <ClockPlus className='w-10 h-10'/>
                            </div>
                            <h2 className="text-4xl  text-gray-900">Fast Apply</h2>
                        </div>


                        {/* Description */}
                        <p className="text-gray-500 mt-3 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>


                        {/* Learn More Link */}
                        <button className="mt-5 flex items-center gap-2 text-green-700 font-medium hover:underline">
                            Learn More <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="max-w-sm   py-14 mx-auto hover:bg-white rounded-2xl p-6 hover:shadow-lg shadow-[#D6E2E0] transition-shadow duration-300">
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3">
                            {/* Certification Icon */}
                            <div className="text-green-700">
                          <Headset className='w-10 h-10'/>
                            </div>
                            <h2 className="text-4xl  text-gray-900">Certified</h2>
                        </div>


                        {/* Description */}
                        <p className="text-gray-500 mt-3 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>


                        {/* Learn More Link */}
                        <button className="mt-5 flex items-center gap-2 text-green-700 font-medium hover:underline">
                            Learn More <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>





</div>


            </div>


        </div>
    )
}

export default Section3
