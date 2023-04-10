import React, { useState } from 'react';
import styled from "styled-components";
import {Button, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {ModalPopup} from '../../components/modal/ModalPopup'


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



const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    

    const FnClickLogin = (flag) =>{ 
        flag ? setModalIsOpen(true) :  setModalIsOpen(false);
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
                {/* <HeaderInput type="string" placeholder='아이디'/>
                <HeaderInput input='true' type='passwd' placeholder='패스워드'/> */}
                <HeaderButton onClick={()=>FnClickLogin(true)}>로그인</HeaderButton>
                {/* <HeaderButton>회원가입</HeaderButton> */}
            </HeaderDiv>
            { modalIsOpen && <ModalPopup close= {()=>FnClickLogin(false)}/> }
        </>
    );
}




export default Header;