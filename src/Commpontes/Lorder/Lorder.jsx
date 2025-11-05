import { ClipLoader } from "react-spinners"; 
import React from 'react'

const Lorder = ({ size = 50, color = "#2563eb", text = "Loading..." }) => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center py-8 absolute  bg-white z-50">
      <ClipLoader size={size} color={color} />
      {text && <p className="mt-3 text-gray-600 text-sm">{text}</p>}
    </div>
  )
}

export default Lorder;
