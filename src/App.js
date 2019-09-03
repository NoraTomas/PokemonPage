import React,{ Component, Fragment } from 'react';
import { Router } from './Router';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar'
import './App.css';

function App () {

    return (
      <BrowserRouter>
        <Fragment>
         <NavBar />
         <Router />
        </Fragment>
      </BrowserRouter>
    );
  }

export default App 
