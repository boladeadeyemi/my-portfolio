// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loader from "./Components/Loader";
import RecentWork from "./Components/RecentWork";
import WhatIDo from "./Components/WhatIDo";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header />
          <Banner />
          <About />
          <WhatIDo />
          <RecentWork />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
