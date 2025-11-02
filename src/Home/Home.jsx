import React from 'react'
import Section1 from '../Commpontes/Section1/Section1'
import Section2 from '../Commpontes/secotion2/Section2'
import Section3 from '../Commpontes/section/Section3'
import Section4 from '../Commpontes/Section4/Section4'
import Section5 from '../Commpontes/Section5/Section5'
import Section6 from '../Commpontes/Section6/Section6'
import Section7 from '../Commpontes/Section7/Section7'
import Testimonials from '../Commpontes/testimonials/testimonials'
import ContactUs from '../Commpontes/Form/ContactUs'
import Nav from "../Commpontes/Nav/Nav"
import Footer from '../Commpontes/Footer/Footer'
import Frequesntquestion from "../Commpontes/Frequentaskedqeustion/Frequesntquestion"
import CoreAdvantages from "../Commpontes/Frequentaskedqeustion/CoreAdvantages"
import Callsupport from "../Commpontes/Callsupport/Callsupport"
const Home = () => {

  return (
    <div>
        <Nav/>
      <Section1/>
<Section2/>
<Section3/>
<Section4/>
<Section5/>
<Section6/>

<Section7/>
<CoreAdvantages/>
<Frequesntquestion/>

    <Testimonials/>
<ContactUs/>


<Footer/>
    </div>
  )
}

export default Home
