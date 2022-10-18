import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
  
}

export default App;
