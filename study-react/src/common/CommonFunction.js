import axios from "axios";

export function WindowPopup (url, name, options) {
    let option =  options ?  options :  'width=700px,height=800px,scrollbars=yes';
    window.open(url.KAKAO_AUTH_URL,name,option);
}



export async function kakaoLogout() {
    let token;
    
    try {
        token = await axios.post("https://kapi.kakao.com/v1/user/unlink",{},
            {
                headers:{
                    Authorization :  `Bearer ${localStorage.getItem('token')}`
                }
            }
        )
    } catch (error) {
        console.log(`에러: ${error}`);
        if(error.response.status === 401){
            localStorage.clear(); 
            window.location.replace("/");
        }
    }
    if(token.status === 200) {
        localStorage.clear(); 
        window.location.replace("/");
    }  

}