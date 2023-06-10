import React, { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { Route, Routes, Link, Switch, Router } from "react-router-dom";
import { useState } from "react";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const themeCheck = () => {
    if (userTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");

      return;
    }
  }, [theme]);

  useEffect(() => {
    themeCheck();
  }, []);

  const themeSwitchHandler = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <div className="dark:bg-black ">
        <div className="text-gray-400 bg-slate-200 body-font h-1/5 grid justify-items-end dark:bg-gray-800">
          <Navbar />
          <button
            onClick={themeSwitchHandler}
            className="bg-green-200 p-4 rounded-3xl "
          >
            Dark Mode
          </button>
        </div>

        <div className="text-gray-400 bg-slate-200 body-font h-1/5 dark:bg-gray-800">
          <About />
          <Contact />
        </div>

        <div className="text-gray-400 bg-white-800 body-font h-1/5 dark:bg-gray-400">
          <Skills />
        </div>

        <div className="text-black bg-slate-200 body-font h-1/5 dark:bg-gray-800">
          <Profile />
        </div>

        <div className="text-gray-400 bg-white-800 body-font h-1/5 dark:bg-gray-400">
          <Projects />
        </div>

        <div className="dark:bg-gray-800">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
