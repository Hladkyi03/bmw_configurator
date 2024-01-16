import React from "react";
import "./cssreset.css";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Route, Routes, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={navigate("/home")}></Route>
        <Route path="/home" element={<HomePage />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
