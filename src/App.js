import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { Route, Routes, Link, Switch, Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className="text-gray-400 bg-slate-200 body-font h-1/5">
        <Navbar />
      </div>

      <div className="text-gray-400 bg-slate-200 body-font h-1/5">
        <About />
        <Contact />
      </div>

      <div className="text-gray-400 bg-white-800 body-font h-1/5">
        <Skills />
      </div>

      <div className="text-black bg-slate-200 body-font h-1/5">
        <Profile />
      </div>

      <div>
        <Projects className="text-gray-400 bg-white-800 body-font h-1/5" />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
