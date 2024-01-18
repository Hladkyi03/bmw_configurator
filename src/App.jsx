import React from "react";
import "./cssTools/cssreset.css";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="home" element={<HomePage />}></Route>
        <Route path="catalog" element={<CatalogPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
