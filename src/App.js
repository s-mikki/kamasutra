import React from "react";
import './App.css';
import Header from "./components/simple/header/Header";
import Navbar from "./components/simple/navbar/Navbar";
import Profile from "./components/simple/profile/Profile";

function App() {
  return (
    <div className="App-wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
