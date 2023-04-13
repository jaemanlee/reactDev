import { useRef } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const ParentDiv = styled.div`
    background: rgba(209, 209, 209, 0.42);
    position: relative;
    top: 5px;
    width: 1903px;
    margin-left: 9px;
    height : 276px;
`

const MainStrong = styled.strong`
    font-size : 25px;
`

const SubString = styled.strong`
    color : #b1b1b1;
    font-size : 22px;

`
const MiddleDiv = styled.div`
    display: flex;
    border-radius : 5px;
    width: ${props => props.width ? props.width : 'fit-content'};
    margin-left: 12px;
    border: 1px solid;
    margin-top: 15px;
    background-color: rgb(255, 255, 255);
    flex-wrap: wrap;
}
`

const MiddleTable = styled.table`
    margin-left : 32px;
`

const MiddleTdDiv = styled.div`
    width : 90px;
    text-align : center;
    font-weight : bold;
    cursor : pointer;
    margin-left ${props => props.margin ? props.margin : ''}
    
`

const MiddleSpan = styled.span`
    font-size : 19px;
`




const Middle = () => {
    const [DivStyle, setDivStyle] = useState('');
    const [CurrentDiv, setCurrentDiv] = useState('');
    const divRef = useRef([null]);

    const ToggleDivHandler = (e) => {
        console.log(divRef)
        // e.target.style.background ? setDivStyle('') : setDivStyle('#fff703');
        CurrentDiv === e.target ? setCurrentDiv(null) : setCurrentDiv(e.target);

        // e.target.parentElement.parentElement.childNodes.forEach(item =>
        //     { console.log(item)}
        // )
    }

    const ToggleStyleHandler = (target) => {
        console.log(CurrentDiv);
        if(CurrentDiv && target === CurrentDiv.id){
            return {background : '#fff703'} 
        }else{
            return {background : ''}
        }
    }

    return (
        <>
            <ParentDiv>
                <MainStrong>방탈출 테마</MainStrong>
                <MiddleDiv>
                    <div>
                        <SubString>지역</SubString>    
                    </div>
                    <MiddleTable>
                            <tbody>
                                <tr>
                                    <td>
                                        <MiddleTdDiv id="ALL" style={{background : divRef.current[0] ? ( divRef.current[0].id === CurrentDiv ? DivStyle :'') : ''}}  onClick={ToggleDivHandler}>전국</MiddleTdDiv>
                                    
                                    </td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv  style={ToggleStyleHandler("11140")} onClick={ToggleDivHandler} id="11140">홍대</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv  style={ToggleStyleHandler("11230")} onClick={ToggleDivHandler} id="11230">강남</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv  style={ToggleStyleHandler("11050")} onClick={ToggleDivHandler} id="11050">건대</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv  id="11130">신촌</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv ref={el=>divRef.current[5] = el} id="11010">대학로</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv ref={el=>divRef.current[6] = el} id="11090">강북</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv ref={el=>divRef.current[7] = el} id="11210">신림</MiddleTdDiv></td>
                                    <MiddleSpan>|</MiddleSpan>
                                    <td><MiddleTdDiv ref={el=>divRef.current[8] = el} margin={'10px'}>서울(기타)</MiddleTdDiv></td>
                                    
                                </tr>
                            </tbody>
                        </MiddleTable>
                    </MiddleDiv>
                <MiddleDiv>
                        <div>
                            <SubString>장르</SubString>    
                        </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td>
                                    <MiddleTdDiv>전체</MiddleTdDiv>
                                </td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>추리</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>스릴러</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>감성</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>로맨스</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>범죄</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>코미디</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>모험</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>판타지</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>19금</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>공포</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>드라마</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>미스터리</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>아케이드</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>액션</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>야외</MiddleTdDiv></td>
                            </tr>
                            <tr>
                                <td><MiddleTdDiv>음악</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>잠입</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>역사</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>SF</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>?</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>

                <MiddleDiv>
                    <div>
                        <SubString>유형</SubString>    
                    </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td>
                                    <MiddleTdDiv>자물쇠</MiddleTdDiv>
                                </td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>장치</MiddleTdDiv></td>
                                
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>비슷한 비율</MiddleTdDiv></td>
                                <div style={{marginLeft:'120px'}} >
                                    <SubString>추천인원</SubString>    
                                </div>
                                <td><MiddleTdDiv>2명</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>3명</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>4명</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>5명 이상</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>

                <MiddleDiv>
                    <div>
                        <SubString>난이도</SubString>    
                    </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td>
                                    <MiddleTdDiv>1</MiddleTdDiv>
                                </td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>2</MiddleTdDiv></td>
                                
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>3</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>4</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>5</MiddleTdDiv></td>
                                <div style={{marginLeft:'120px'}} >
                                    <SubString>활동성</SubString>    
                                </div>
                                <td><MiddleTdDiv>적음</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>보통</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv>많음</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>
                

            </ParentDiv>
        </>
    )
}

export default Middle;