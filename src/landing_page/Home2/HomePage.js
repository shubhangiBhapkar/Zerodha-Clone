
import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage() {
  console.log("✅ HomePage loaded");
    return ( 
        <>
     <Hero />
       <Awards />
      <Stats />
      <Pricing />
      <Education />  
       <OpenAccount />
       
        </>
     );
}
export default HomePage;