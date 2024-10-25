import { useState } from "react";
// import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import Experties from "./Components/Experties";
import ProjectFilter from "./Components/ProjectFilter";
import Bar from "./Components/bottombar";
import Contact from "./Components/contact";
import Footer from "./Components/Footer";
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Banner />
      <Bar/>
      <About />
      <Services />
      <Experties />
      <ProjectFilter />
      <Contact/>
      <Footer/>
    </>
  )
}