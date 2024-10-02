import React from "react";
import Header from "./components/simple/header/Header";
import Navbar from "./components/simple/navbar/Navbar";
import classes from "./App.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/pages/dialogs/Dialogs";
import Profile from "./components/pages/profile/Profile";
import News from "./components/pages/news/News";
import Rating from "./components/pages/rating/Rating";
import Music from "./components/pages/music/Music";

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
      </div>
    </BrowserRouter>

  );
}

export default App;
