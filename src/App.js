import React from 'react';
import Navbar from "./components/UI/Navbar/Navbar";
import classes from "./App.module.css";
import {Route, Router, Routes} from "react-router-dom";
import Main from "./pages/Main/Main";
import Header from "./components/UI/Header/Header";

const App = () => {
    return (
        <div className={classes.app}>
            <Navbar/>
        </div>
    );
};

export default App;
