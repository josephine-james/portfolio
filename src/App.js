import "./App.css";
import React from "react";
import Cards from "./components/cards/Cards";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Cards />
      <Contact />
    </div>
  );
}

export default App;
