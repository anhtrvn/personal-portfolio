import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

export default function App() {
  return (
    <div className="h-screen bg-[#282c34] text-white">
      <Header />
      <Hero />
    </div>
  );
}
