import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loader from "../Commpontes/Lorder/Lorder";
import 'react-toastify/dist/ReactToastify.css';
import RouteLoader from "../Commpontes/Lorder/RouteLoader";
const Home = lazy(() => import("../Home/Home"));
const Aboutsus = lazy(() => import("../Commpontes/Aboutsus/Aboutsus"));
const FormPage = lazy(() => import("../Home/FormPage"));
const PartnerPage = lazy(() => import("../Home/PartnerPage"));
const AdminAuth = lazy(() => import("../Commpontes/AdminCompontes/adminAuth/AdminAuthj"));
const otpVerfication = lazy(() => import("../Commpontes/AdminCompontes/otpVerificatiob/otpVerfication"));
const UseTranstion = lazy(() => import("../Commpontes/useTranstion/UseTranstion"));
import DelayedLorder from "../Commpontes/Lorder/DelayedLorder";

const RoutesComponet = () => {
  return (
    <>
      <ToastContainer theme="colored" />
      
      <RouteLoader>
      <Suspense fallback={<DelayedLorder  delay={150} size={60} text="Loading page..." />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Aboutsus />} />
            <Route path="/contact" element={<FormPage />} />
            <Route path="/BecomePartner" element={<PartnerPage />} />
            <Route path="/admin/auth" element={<AdminAuth />} />
            <Route path="/otp-verfication-register/:email/:phone" element={<otpVerfication />} />
            <Route path="/usetranstion" element={<UseTranstion />} />
          </Routes>
        </Suspense>
      </RouteLoader>
    </>
  );
};

export default RoutesComponet;
