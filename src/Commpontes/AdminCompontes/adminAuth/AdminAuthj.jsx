import React, { useContext, useState } from 'react'
import { Context } from '../../../main'
import { Navigate } from 'react-router-dom'
import AdminLogin from "./AdminLogin";

import AdminRegister from '../AdminRegister'

const AdminAuth = () => {
    const {isAuthenticated} =  useContext(Context)
    console.log(isAuthenticated)
    const [isLogin,setlogin] = useState(true) 
    if(isAuthenticated){
        return <Navigate to={"/"}/>
    }


  return (
    <div className='auth-page'>
        <div className='auth-container'>
<div children="auth-toggle">
<button className={`toggle-btn ${isLogin ? "active":""}`} onClick={()=>setlogin(true)}>Login</button>
<button className={`toggle-btn ${!isLogin ? "active":""}`} onClick={()=>{setlogin(false)}}>Register</button>

</div>
{
    isLogin ? <AdminLogin></AdminLogin>:<AdminRegister/>
}
        </div>
    </div>
  )
}

export default AdminAuth
