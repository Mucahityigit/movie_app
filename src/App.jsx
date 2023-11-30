import "./App.css";
import "swiper/css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Banner from "./pages/Banner/Banner";
import Header from "./pages/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./pages/Footer/Footer";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";

function App() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  });

  return (
    <>
      <Header scroll={scroll} />
      <Banner />
      <Main />
      <Footer />
      <BackToTopButton scroll={scroll} />
    </>
  );
}

export default App;
