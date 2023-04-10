import react , {useEffect}from 'react'
import Routh from 'react-router-dom'

export const Kakaologin = (props) => {
    console.log('aaa');
    useEffect(()=>{
        
        const params = new URL(document.location.toString()).searchParams;
        console.log(params);
    },[])

    return(
        <></>
    )

}