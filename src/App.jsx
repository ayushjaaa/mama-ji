import { lazy, useState } from "react";
import { Menu, X, Star } from "lucide-react";

import Section4 from './Commpontes/Section4/Section4'
import Testimonials from "../src/Commpontes/testimonials/testimonials"
import 'remixicon/fonts/remixicon.css';
import ContactUs from "./Commpontes/Form/ContactUs";
import RoutesComponet from "../src/Routes/RoutesComponet"
import "./index.css";
import Home from "./Home/Home";

// import ContactUs from "./Commpontes/Form/ContactUs";
export default function HeroSection() {
  const [open, setOpen] = useState(false);



  return (
    <div  className="overflow-x-hidden bg bg-[linear-gradient(10deg,rgba(249,249,249,1)_45%,rgba(190,228,205,1)_100%)] min-h-screen">
<RoutesComponet/>


    </div>
  );
}
