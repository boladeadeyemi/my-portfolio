// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import RecentWork from "./Components/RecentWork";
import WhatIDo from "./Components/WhatIDo";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <WhatIDo />
      <RecentWork />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
