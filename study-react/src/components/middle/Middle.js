import react , {useEffect, useState, useRef}from 'react'
import counter from '../../reducer/count'
import { useDispatch, useSelector } from 'react-redux';
import {Button} from 'react-bootstrap'
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

const SearchDiv = styled.div`
float: right;
position: relative;
top: 15px;
right: 7px;
`

const SearchInput  = styled.input`
    margin-right: 5px;
    position: relative;
    top: 3px;
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
    const [OneCurrentDiv, setOneCurrentDiv] = useState('');
    const [TwoCurrentDiv, setTwoCurrentDiv] = useState('');
    const [ThreeCurrentDiv, setThreeCurrentDiv] = useState('');
    const [FourCurrentDiv, setFourCurrentDiv] = useState('');
    const dispatch = useDispatch(); // dispatch로 재선언하여 사용한다.
    const select = useSelector((state) => state.counter);

    const FnClickBtn = (e) => {
        console.log(select);
        dispatch(counter(counter.initalState,{type:'search',area : [1,2,3]}));
    }

    const ToggleDivHandler = (...event) => {

        switch(event[1]){
            case '1' : 
                       if(event[0].target.style.background) 
                          setOneCurrentDiv(event[0].target.id);
                       else if(OneCurrentDiv !== event[0].target)  
                            setOneCurrentDiv(event[0].target);
                       break;
            case '2' : 
                        if(event[0].target.style.background) 
                            setTwoCurrentDiv(event[0].target.id);
                        else if(TwoCurrentDiv !== event[0].target)  
                             setTwoCurrentDiv(event[0].target);
                        break;
            case '3' : 
                        if(event[0].target.style.background) 
                            setThreeCurrentDiv(event[0].target.id);
                        else if(ThreeCurrentDiv !== event[0].target)  
                             setThreeCurrentDiv(event[0].target);
                        break;
            default : 
                        if(event[0].target.style.background) 
                            setFourCurrentDiv(event[0].target.id);
                        else if(FourCurrentDiv !== event[0].target)  
                            setFourCurrentDiv(event[0].target);
                        break;

        }
    }

    const ToggleStyleHandler = (...param) => {
        console.log(param);
        switch(param[1]){
            case '1' : 
                        if(OneCurrentDiv === param[0]) return {background:''};

                        let clickOne = Array.from(document.querySelectorAll('.area td div')).filter(item => item.style.background).map(item =>item.id) 
                        if(clickOne.includes(param[0])) return {background:'#fff703'};
                        if(OneCurrentDiv && OneCurrentDiv.id === param[0]) return {background : '#fff703'}
                        break;
            case '2' : 
                        if(TwoCurrentDiv === param[0]) return {background:''};

                        let clickTwo = Array.from(document.querySelectorAll('.category td div')).filter(item => item.style.background).map(item =>item.id) 
                        if(clickTwo.includes(param[0])) return {background:'#fff703'};
                        if(TwoCurrentDiv && TwoCurrentDiv.id === param[0]) return {background : '#fff703'}
                        break;
            case '3' : 
                        if(ThreeCurrentDiv === param[0]) return {background:''};

                        let clickThree = Array.from(document.querySelectorAll('.cate td div')).filter(item => item.style.background).map(item =>item.id) 
                        if(clickThree.includes(param[0])) return {background:'#fff703'};
                        if(ThreeCurrentDiv && ThreeCurrentDiv.id === param[0]) return {background : '#fff703'}
                        break;
            default :   
                        if(FourCurrentDiv === param[0]) return {background:''};

                        let clickFour = Array.from(document.querySelectorAll('.diff td div')).filter(item => item.style.background).map(item =>item.id) 
                        if(clickFour.includes(param[0])) return {background:'#fff703'};
                        if(FourCurrentDiv && FourCurrentDiv.id === param[0]) return {background : '#fff703'}
                        break;
        }
        
        
        
    }

    

    return (
        <>
            <ParentDiv>
                <MainStrong>방탈출 테마</MainStrong>
                <SearchDiv>
                    <SearchInput placeholder='방탈출명'></SearchInput>
                    <Button onClick={FnClickBtn}>검색</Button>
                </SearchDiv>
                <MiddleDiv className='area'>
                    <div>
                        <SubString>지역</SubString>    
                    </div>
                    <MiddleTable>
                    <tbody>
                        <tr>
                            <td><MiddleTdDiv  style={ToggleStyleHandler("11230",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11230">강남</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv  style={ToggleStyleHandler("11050",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11050">건대</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv  style={ToggleStyleHandler("11130",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11130">신촌</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv style={ToggleStyleHandler("11010",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11010">대학로</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv style={ToggleStyleHandler("11090",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11090">강북</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv style={ToggleStyleHandler("11210",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="11210">신림</MiddleTdDiv></td>
                            <MiddleSpan>|</MiddleSpan>
                            <td><MiddleTdDiv style={ToggleStyleHandler("ETC",'1')} onClick={(e)=>ToggleDivHandler(e,'1')} id="ETC" margin={'10px'}>서울(기타)</MiddleTdDiv></td>
                            
                        </tr>
                    </tbody>
                        </MiddleTable>
                    </MiddleDiv>
                <MiddleDiv className='category'>
                        <div>
                            <SubString>장르</SubString>    
                        </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA01",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA01">추리</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA02",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA02">스릴러</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA03",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA03">감성</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA04",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA04">로맨스</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA05",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA05">범죄</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA06",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA06">코미디</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA07",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA07">모험</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA08",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA08">판타지</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA09",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA09">19금</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA10",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA10">공포</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA11",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA11">드라마</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA12",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA12">미스터리</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA13",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA13">아케이드</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA14",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA14">액션</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA15",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA15">야외</MiddleTdDiv></td>
                            </tr>
                            <tr>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA16",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA16">음악</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA17",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA17">잠입</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA18",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA18">역사</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA19",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA19">SF</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AA20",'2')} onClick={(e)=>ToggleDivHandler(e,'2')} id="AA20">?</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>

                <MiddleDiv className='cate'>
                    <div>
                        <SubString>유형</SubString>    
                    </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td>
                                    <MiddleTdDiv style={ToggleStyleHandler("AB01",'3')} onClick={(e)=>ToggleDivHandler(e,'3')} id="AB01">자물쇠</MiddleTdDiv>
                                </td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AB02",'3')} onClick={(e)=>ToggleDivHandler(e,'3')} id="AB02">장치</MiddleTdDiv></td>
                                
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("AB03",'3')} onClick={(e)=>ToggleDivHandler(e,'3')} id="AB03" margin={'10px'}>비슷한 비율</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>

                <MiddleDiv className='diff'>
                    <div>
                        <SubString>난이도</SubString>    
                    </div>
                    <MiddleTable>
                        <tbody>
                            <tr>
                                <td>
                                    <MiddleTdDiv style={ToggleStyleHandler("1",'4')} onClick={(e)=>ToggleDivHandler(e,'4')} id="1">1</MiddleTdDiv>
                                </td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("2",'4')} onClick={(e)=>ToggleDivHandler(e,'4')} id="2">2</MiddleTdDiv></td>
                                
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("3",'4')} onClick={(e)=>ToggleDivHandler(e,'4')} id="3">3</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("4",'4')} onClick={(e)=>ToggleDivHandler(e,'4')} id="4">4</MiddleTdDiv></td>
                                <MiddleSpan>|</MiddleSpan>
                                <td><MiddleTdDiv style={ToggleStyleHandler("5",'4')} onClick={(e)=>ToggleDivHandler(e,'4')} id="5">5</MiddleTdDiv></td>
                            </tr>
                        </tbody>
                    </MiddleTable>
                </MiddleDiv>
                

            </ParentDiv>
        </>
    )
}

export default Middle;