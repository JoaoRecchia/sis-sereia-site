// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <Header />
      <Outlet  />   {/* aqui entram as páginas-filhas */}
      <Footer  />
    </>
  );
}



   
