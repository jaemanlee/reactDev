
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Header} from './components/header/Header'
import SwiperPage from './components/swiper/SwiperPage'
import styled from "styled-components";
import './App.css'
import  { Kakaologin } from './components/login/KakaoCallback';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


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

const window_location = window.location.href.indexOf('code');
function App() {
  const [spanValue, setSpanValue] = useState(null);

  const [spanStyle, setSpanStyle] = useState('none');

useEffect(()=>{
  console.log(spanValue);
  // axios.post("/main/temp.do")
  //       .then(res=>{
  //         console.log(res);
  //       })
  //       .catch(res=>console.log(res));
  
} , []);

  return (

     <>
     {window_location > -1 ? 
      <BrowserRouter>
        <Routes>
          <Route path='/KakaoCallback' Component={()=><Kakaologin spanStyle={spanStyle} setSpanValue={setSpanValue} setSpanStyle={setSpanStyle}/>}></Route>

        </Routes>
      </BrowserRouter> 
    : 
      <>
        <HeaderDiv>
            <Header />
        </HeaderDiv>
        <SwiperDiv>
          <SwiperPage/>
        </SwiperDiv>
      </>
    }
      
     </>
  );
}

export default App;