import React from 'react'
import './Section5.css'
import { Check } from 'lucide-react';
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from 'react';

const plans = [
  {
      name:"Silver",
    rewords: "Silver",
    price: "₹1,000",
    period: "Yearly Membership Fee",
    popular: false,
    recomandee:false,
    features: [
      "Earn 4 reward points on ₹150",
      "5% cashback on travel and shopping"
    ],
    notIncluded: [
      "Fuel surcharge waiver",
      "Smart EMI",
      "Welcome benefits"
    ]
  },

  {name:"Gold",
      rewords: "Fuel Points Plan",
    price: "₹500+",
    period: "Joining/Renewal Fee",
    popular: false,
    recomandee:false,
    features: [
      "Earn up to 50 Litres of Free Fuel annually",
      "Smart EMI",
      "Fuel Surcharge Waiver"
    ],
    notIncluded: [
      "2X Reward Points on shopping",
      "Cashback on online purchases"
    ]
  },
  {name:"Platinum",
      rewords: "Cashback Plan",
    price: "₹500+",
    period: "Joining/Renewal Fee",
    recomandee:true,
    popular: false,
    features: [
      "5% Cashback on Amazon, Flipkart, Flight ",
      "Smart EMI",
      "Fuel Surcharge Waiver"
    ],
    notIncluded: [
      "Free fuel",
      "2X Reward Points"
    ]
  },
  {name:"Platinum",
      rewords: "Cashback Plan",
    price: "₹500+",
    period: "Joining/Renewal Fee",
    popular: false,
    recomandee:true,
    features: [
      "5% Cashback on Amazon, Flipkart, Flight ",
      "Smart EMI",
      "Fuel Surcharge Waiver"
    ],
    notIncluded: [
      "Free fuel",
      "2X Reward Points"
    ]
  }
];
const Section5 = () => {

   
      
      const [isClicked, setIsClicked] = useState({
        0:false,
        1:false,
        2:false,
        3:false,
      });

      const handleClick = (e) => {
        
        // console.log(e.target.name)
        setIsClicked({...isClicked,[e.target.name]:true});
        // remove animation after short delay
        setTimeout(() => setIsClicked({...isClicked,[e.target.name]:false}), 200);
      };
    
  return (
    <div className='container mx-auto text-center  p-8   lg:p-1 flex flex-col'>
        <div className='p-1 right md:p-20'>
            <h1 className='w-full text-5xl font-bold'> Credit <span className="bg-[linear-gradient(160deg,rgba(220,255,234,1)_0%,rgba(27,117,107,1)_51.8%)] bg-clip-text text-transparent " > Card Opetions</span></h1>
            <p className='p-4 px-0 md:px-32 text-xl leading-5 text-[#64758B]'>Select the perfect credit card that matches your lifestyle and spending habits  </p>
        </div>
      <div className='w-full h-fit   grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-12 px-4  '>
        {
            plans.map((elem,index)=>{

return(
                    <div className={`w-full h-fit  ${elem.recomandee ? "recomandee ":"bg-white"}  p-10 px-6 rounded-2xl  border-1 border-t-[#E5E7E8]   border-x-[#0f101145] shadow-premium  border-b-[#9D9FA6] `}>
<h3 className={`text-5xl font-semibold w-full leading-tight  lg:text-2xl ${elem.recomandee ? "text-white ":""} `}>{elem.name}</h3>
<h2 className={`text-4xl font-bold pt-1  ${elem.recomandee ? "text-white ":" text-[#3C84F6]"} `} >₹2,500</h2>
<h4 className={` ${elem.recomandee ? "text-white ":" text-[#64758B]"}`}>Annual Fee</h4>
<div className='text-center mt-4'>
<p className={`leading-8    ${elem.recomandee ? "text-white ":" text-[#171B26]"}  text-sm flex items-center gap-4`}>  <Check className={`   ${elem.recomandee ? "text-white ":" text-blue-500"} h-5 w-5 `}/> {elem.rewords}</p>
{elem.features.map((fetureleme)=>{
    return(
<p className={`leading-7   ${elem.recomandee ? "text-white ":" text-[#171B26]"} text-start text-sm flex justify-start gap-4`}>  <Check className={` ${elem.recomandee ? "text-white ":" text-blue-500"}  h-5 w-5 mt-2`}/> {fetureleme}</p>   
    )
})}
{
    elem.notIncluded.map((notincludelem)=>{
        return(
            <p className='leading-8 text-[#B2B9C5] text-sm flex text-start  gap-4'>  <X className={`${elem.recomandee ? "text-white ":" text-blue-500"} h-5 w-5 mt-2`}/> {notincludelem}</p>   
        )
    })
}




</div>
<div className='pt-4'>
    <button className={`border-1  ${elem.recomandee ? "text-reen-light: bg-white ":" text-[#171B26]"}   w-full py-3 border-[#E2E8F0]`}>Select Plan</button>


</div>
{/* <button
      onClick={(e)=>handleClick(e,index)}
      name={`${index}`}
      className={`px-6 py-3 text-black rounded-lg border-2 font-semibold transition-all duration-300 
      bg-white-500 
      hover:bg-white-600
      ${isClicked[index] ? "bg-white-700 scale-95" : ""}
      `}
    >
      Click Me
    </button> */}
</div>
)
            })
        }
      </div>
    </div>
  )
}

export default Section5


// import React, { useState, memo, useCallback } from "react";

// // ✅ Memoized Child Component
// const Child = memo(({ name, value, onIncrement }) => {
//   console.log(`👶 Child rendered: ${name}`); // Debug re-renders

//   return (
//     <div className="p-4 border rounded-lg w-64 mx-auto my-2 shadow-md">
//       <h2 className="text-lg font-semibold">{name}</h2>
//       <p className="text-gray-600">Count: {value}</p>
//       <button
//         onClick={onIncrement}
//         className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200"
//       >
//         Increase {name}
//       </button>
//     </div>
//   );
// });

// const Section5 = () => {
//   const [count, setCount] = useState({ 0: 0, 1: 0, 2: 0 });

//   const handleIncrement = useCallback((key) => {
//     setCount((prev) => ({ ...prev, [key]: prev[key] + 1 }));
//   }, []);

//   // ✅ Memoized callbacks for each child
//   const incrementAyush = useCallback(() => handleIncrement(0), [handleIncrement]);
//   const incrementRahul = useCallback(() => handleIncrement(1), [handleIncrement]);
//   const incrementNeha = useCallback(() => handleIncrement(2), [handleIncrement]);

//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-2xl font-bold mb-5">Optimized Section5 Example</h1>

//       <div className="flex flex-col items-center gap-4">
//         <Child name="Ayush" value={count[0]} onIncrement={incrementAyush} />
//         <Child name="Rahul" value={count[1]} onIncrement={incrementRahul} />
//         <Child name="Neha" value={count[2]} onIncrement={incrementNeha} />
//       </div>
//     </div>
//   );
// };

// export default Section5;
