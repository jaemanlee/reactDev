import React, {Component, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Button,Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import Header from './Header'
import './App.css'



function App() {

useEffect(()=>{
  axios.post("/vs/temp")
        .then(res=>{
          console.log(res);
        })
        .catch(res=>console.log(res));
} , []);

  return (
     <div className="Header">
        <Header/>
        
     </div>
      
  );
}

export default App;

