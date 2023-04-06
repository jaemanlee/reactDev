import React from 'react';
import {Button, Nav} from 'react-bootstrap'

const Header = () => {

    return( 
        <>
            <div>
                <strong>설방</strong>
            </div>
            <div className='Contents'>
                <Nav className='me-auto'>
                    <Nav.Link>커뮤니티</Nav.Link>
                    <Nav.Link>지도</Nav.Link>
                </Nav>
            </div>
            <div className='Contents'>
                <input type="string" placeholder='아이디'></input>
                <input type="passwd" placeholder='패스워드'></input>
                <Button>로그인</Button>
                <Button>회원가입</Button>
            </div>
        </>
    );
}

export default Header;