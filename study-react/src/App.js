
import React, {Component, useEffect} from 'react';
import axios from 'axios';
import Header from './components/header/Header'
import SwiperPage from './components/swiper/SwiperPage'
import styled from "styled-components";
import './App.css'

const HeaderDiv = styled.div`
width : 100%;
display : inline-flex;
flex-flow: row;
justify-content: space-between;
background-color: #000;
`

const SwiperDiv = styled.div`
  background: #cbcbcb;
  margin-top: 10px;
`

function App() {

useEffect(()=>{
  // axios.post("/main/temp.do")
  //       .then(res=>{
  //         console.log(res);
  //       })
  //       .catch(res=>console.log(res));
 
} , []);

  return (
     <>
      <HeaderDiv>
          <Header/>
      </HeaderDiv>
      <SwiperDiv>
        <SwiperPage/>
      </SwiperDiv>
     </>
  );
}

export default App;