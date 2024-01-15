import React from "react";
import "./cssreset.css";
import "./App.scss";
import { Header } from "./components/Header/Header";
import { PurchasePrograms } from
  "./components/PurchasePrograms/PurchasePrograms";

function App() {
  return (
    <>
      <Header />

      <PurchasePrograms />
    </>
  );
}

export default App;
