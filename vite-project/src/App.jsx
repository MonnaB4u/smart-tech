import { useState } from 'react'

import './App.css'
import Header from './component/Header'
import About from './component/About'
import Automation from './component/Automation'
import Floorplan from './component/Floorplan'
import WhyAutomate from './component/WhyAutomate'
import Services from './component/Services'
import AutomationLifestyle from './component/AutomationLifestyle'
import WhatsAppButton from './component/whatsAppButton'
import Brands from './component/Brands'
import ProblemsSolutions from './component/ProblemsSolutions'
import YourHome from './component/YourHome'
import OtherProblem from './component/OtherProblem'
import ContactForm from './component/ContactForm'
import Footer from './component/Footer'

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Automation />
      <Floorplan />
      <WhyAutomate />
      <AutomationLifestyle />
      <Services />
      <Brands />
      <ProblemsSolutions />
      <YourHome />
      <OtherProblem />
      <ContactForm />
      <Footer />
      
      <WhatsAppButton />

    </div>
  )
}

export default App
