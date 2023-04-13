import React, {  useEffect, useState, useRef } from 'react';
import styled from "styled-components";
import {Button, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as common from '../../common/CommonFunction'
import kakao from '../../img/kakao_login.png'

const HeaderDiv = styled.div`
    position: relative;
    top: 5px;
`

const HeaderStrong = styled.strong`
    font-size: 30px;
    color: #fff;
`

const HeaderInput = styled.input`
    margin-left : ${props=> (props.input) ? '8px': ''};
`

const HeaderButton = styled(Button)`
    position: relative;
    bottom: 2px;
`
const HeaderA = styled(Nav.Link)`
    font-weight: bold !important;
    font-size: 21px !important;
    position: relative;
    bottom : 4px;
    color: #fff !important;
    margin-left : ${props=> (props.index) ? '70px' : ''};
`

const LoginSpan = styled.span`
    font-size: 16px;
    color: #fff;
    margin-right: 40px;
    display : none;
`
const ModalBack = styled.div`
width: 100%;
height: 100%;
position: fixed;
overflow: hidden;
background: rgb(169 169 169 / 84%);
z-index: 10;
`

const ModalPop = styled.div`
    width: 400px;
    height: 100px;
    position: absolute;
    top: 50%;
    right: 40%;
    z-index: 10;
    background: #fff;
    border : 1px solid;
    border-radius : 10px;
    animation: modal-show 0.3s;
`

const ModalButton = styled.button`
float: right;
background: none;
border: none;
font-weight: bold;
font-size: 30px;
position: relative;
top: -13px;
`

const ButtonDiv = styled.div`
display: grid;
justify-content: center;
top: 30%;
position: relative;
left: 20px;
`

const DivImg = styled.img`
    cursor : pointer;
`

const DivImg2 = styled.img`
    cursor : pointer;
    position: relative;
    margin-top : 5px;
    width: 185px;
    height: 43px;
    border-radius: 6px;
`

const IoginImage = styled.img`
    width: 35px;
    border-radius: 15px;
    margin-right: 5px;
    display : none;
`


const CLIENT_ID = "a2c2f50330b7526ae055d9a42ca1ac8e";
const REDIRECT_URI =  "http://localhost:3000/KakaoCallback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;





export const Header = () => {
    const buttonRef = useRef(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [spanValue, setSpanValue] = useState(null);
    const [loginImg, setLoginImg] = useState(null);
    const [spanStyle, setSpanStyle] = useState('none');

  
    useEffect(()=>{
        if(localStorage.getItem('token')){
            setSpanValue(localStorage.getItem('name'));
            setSpanStyle('inline');
            setLoginImg(localStorage.getItem('img'));
            buttonRef.current.innerText = '로그아웃';
        }
    },[])

    window.addEventListener('message', function(event) {
        if(event.data.style){
            setSpanValue(event.data.name);
            setSpanStyle(event.data.style);
            setLoginImg(event.data.img)
            setModalIsOpen(false);
            buttonRef.current.innerText = '로그아웃';
        }
     });

    const FnClickLogin = (flag,) =>{ 
        if(buttonRef.current.innerText === '로그인'){
            flag ? setModalIsOpen(true) :  setModalIsOpen(false);
        }else{
            if(window.confirm("로그아웃 하시겠습니까?")){
                common.kakaoLogout();
            }
            
        }
        
    }

    return( 
        <>
            <HeaderDiv>
                <HeaderStrong>설방</HeaderStrong>
            </HeaderDiv>
            <HeaderDiv>
                <Nav className='me-auto'>
                    <HeaderA>커뮤니티</HeaderA>
                    <HeaderA index='2'>지도</HeaderA>
                </Nav>
            </HeaderDiv>
            <HeaderDiv>
                <IoginImage src={loginImg} style={{display:spanStyle}} alt='로그인'></IoginImage>
                <LoginSpan style={{display:spanStyle}}><strong>{spanValue}</strong> 님 환영합니다.</LoginSpan>
                <HeaderButton ref={buttonRef} onClick={()=>FnClickLogin(true)}>로그인</HeaderButton>

            </HeaderDiv>
            { modalIsOpen && 
                <>
                    <ModalBack>
                        <ModalPop>
                                <ModalButton onClick={()=>FnClickLogin(false)}>x</ModalButton>
                                <ButtonDiv>
                                        <DivImg src={kakao} onClick={()=>common.WindowPopup({KAKAO_AUTH_URL}, 'login')}></DivImg>
                                        {/* <DivImg2 src={Github}></DivImg2> */}
                                </ButtonDiv>
                            </ModalPop>
                    </ModalBack>
                </>
            }
        </>
    );
}




