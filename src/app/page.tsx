import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import UseCases from "./components/UseCases";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <div>
    {/* <Navbar /> */}
     <Hero />
     <Features />
     <HowItWorks />
     <UseCases />
     <FAQs />
     <Footer />
   </div>
   
  );
}
