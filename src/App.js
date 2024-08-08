import React from "react";
import Header from "./components/simple/header/Header";
import Navbar from "./components/simple/navbar/Navbar";
import classes from "./App.module.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dialogs from "./components/ordinary/dialogs/Dialogs";
import Profile from "./components/simple/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header/>
        <Navbar/>
        <div className={classes.app__content}>
          <Routes>
            <Route exact path='/Profile' Component={Profile}/>
            <Route exact path='/Dialogs' Component={Dialogs}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
