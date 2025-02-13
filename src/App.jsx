import { useState } from "react";
import { create } from "zustand";
import "./App.css";
import Navbar_top from "./Navbar/Navbar_top";
import Navbar from "./Navbar/Navbar";
import Navbar_bottom from "./Navbar/Navbar_bottom";
import Corusel from "./Main/Corusel";
import Catigoria from "./Main/Catigoria";
import Cards from "./Main/Cards";
import { BrowserRouter, Routes, Route } from "react-router";
import Aboute from "./Aboute";
import CatalogPages from "./Navbar/CatalogPages/CatalogPages";

function App() {
  return (
    <div>
      <Navbar_top />
      <Navbar />
      <Navbar_bottom />
      {/* <Corusel/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about/:id" element={<Aboute />} />
        <Route path="/catalog/:slug" element={<CatalogPages />} />
      </Routes>
    </div>
  );
}

function HomePage(params) {
  return (
    <div>
      <Catigoria />
      <Cards />
    </div>
  );
}

export default App;
