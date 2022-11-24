import React from "react";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";

import Footer from "./components/footer/Footer";
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
