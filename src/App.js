import React from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Main from "./components/Main";

import Footer from "./components/Footer";
import "./commenResource/css/styles.css";
import "./commenResource/css/bootstrap.css";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Main />
      <Footer />
    </>
  );
}

export default App;
