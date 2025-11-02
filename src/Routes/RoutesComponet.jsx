
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Home = lazy(() => import(/* webpackChunkName: "home" */ "../Home/Home"));
const Aboutsus = lazy(() => import(/* webpackChunkName: "about" */ "../Commpontes/Aboutsus/Aboutsus"));
const FormPage = lazy(() => import(/* webpackChunkName: "contact-form" */ "../Home/FormPage"));
const PartnerPage = lazy(() => import(/* webpackChunkName: "partner" */ "../Home/PartnerPage"));
const AdminAuth = lazy(() => import(/* webpackChunkName: "admin-auth" */ "../Commpontes/AdminCompontes/adminAuth/AdminAuthj"));
const otpVerfication = lazy(() => import(/* webpackChunkName: "otp-verification" */ "../Commpontes/AdminCompontes/otpVerificatiob/otpVerfication"));
const UseTranstion = lazy(() => import(/* webpackChunkName: "use-transtion"*/ "../Commpontes/useTranstion/UseTranstion"));


const RoutesComponet = () => {
  return (
    <>
      <ToastContainer theme="colored" />

   
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Aboutsus />} />
          <Route path="/contact" element={<FormPage />} />
          <Route path="/BecomePartner" element={<PartnerPage />} />
          <Route path="/admin/auth" element={<AdminAuth />} />
          <Route path="/otp-verfication-register/:email/:phone" element={<otpVerfication/>} />
          <Route path="/usetranstion" element={<UseTranstion/>} />
          <Route path="/usetranstion" element={<UseTranstion/>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesComponet;
