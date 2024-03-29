import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
