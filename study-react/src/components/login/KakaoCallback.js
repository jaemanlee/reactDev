import react , {useEffect, useState, useContext}from 'react'
import {CLIENT_ID, REDIRECT_URI} from '../modal/ModalPopup'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export const Kakaologin = () => {
    const dispatch = useDispatch(); // dispatch로 재선언하여 사용한다.
    const select = useSelector((state) => state.counter);
    
    const code = new URL(window.location.href).searchParams.get('code');
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${CLIENT_ID}&redirect_url=${REDIRECT_URI}&code=${code}`

    axios.post(tokenUrl,{},{
        headers : {
            "Content-Type" : "application/json;charset=UTF-8"
        }
    }
    )
    .then((res) => {
        if(res.data){
            localStorage.setItem('token', res.data.access_token);
            let access_token = res.data.access_token;
            axios.post(`https://kapi.kakao.com/v2/user/me`,{},{
                headers : {
                    Authorization: `Bearer ${access_token}`
                }
            })
            .then((res)=>{
                window.opener.postMessage({style:'inline', name: res.data.properties.nickname, img : res.data.properties.profile_image});
                localStorage.setItem('name', res.data.properties.nickname);
                localStorage.setItem('img', res.data.properties.profile_image);
                window.close();
            });
        }else{
            window.close();
        }
        
    })
    .catch((error)=>{
        console.log(error);
    })


    return(
        <></>
    )

}

