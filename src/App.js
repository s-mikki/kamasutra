import React from "react";
import Header from "./components/simple/header/Header";
import Navbar from "./components/simple/navbar/Navbar";
import classes from "./App.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./pages/dialogs/Dialogs";
import Profile from "./pages/profile/Profile";
import News from "./pages/news/News";
import Rating from "./pages/rating/Rating";
import Music from "./pages/music/Music";
import Modal from "./components/smart/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header/>
        <Navbar/>
        <div className={classes.app__content}>
          <Routes>
            <Route path='' Component={Profile}/>
            <Route path='/dialogs' Component={Dialogs}/>
            <Route path='/News' Component={News}/>
            <Route path='/rating' Component={Rating}/>
            <Route path='/Music' Component={Music}/>
          </Routes>
        </div>
        <Modal/>
      </div>
    </BrowserRouter>

  );
}

export default App;
