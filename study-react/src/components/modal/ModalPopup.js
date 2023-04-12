import react , {useState} from 'react';
import Styled from 'styled-components'
import Modal from 'react-modal';
import kakao from '../../img/kakao_login.png'
import Github from '../../img/git.jpeg'


const ModalBack = Styled.div`
width: 100%;
height: 100%;
position: fixed;
overflow: hidden;
background: rgb(169 169 169 / 84%);
z-index: 10;
`

const ModalPop = Styled.div`
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

const ModalButton = Styled.button`
float: right;
background: none;
border: none;
font-weight: bold;
font-size: 30px;
position: relative;
top: -13px;
`

const ButtonDiv = Styled.div`
display: grid;
justify-content: center;
top: 30%;
position: relative;
left: 20px;
`



const DivImg = Styled.img`
    cursor : pointer;
`

const DivImg2 = Styled.img`
cursor : pointer;
position: relative;
margin-top : 5px;
width: 185px;
height: 43px;
border-radius: 6px;
`

export let CLIENT_ID = "a2c2f50330b7526ae055d9a42ca1ac8e";
export let REDIRECT_URI =  "http://localhost:3000/KakaoCallback";
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

export const ModalPopup = (props) => {
    
    

    const closeModal = () => {
        props.close();
    }
    return (
        <>
            <ModalBack>
                <ModalPop>
                        <ModalButton onClick={closeModal}>x</ModalButton>
                        <ButtonDiv>
                                <DivImg src={kakao} onClick={()=>WindowPopup({KAKAO_AUTH_URL}, 'login')}></DivImg>
                                {/* <DivImg2 src={Github}></DivImg2> */}
                        </ButtonDiv>
                    </ModalPop>
            </ModalBack>
        </>

    )

}

export const WindowPopup = (url, name, options) => {
    let option =  options ?  options :  'width=700px,height=800px,scrollbars=yes';
    window.open(url.KAKAO_AUTH_URL,name,option);
}
