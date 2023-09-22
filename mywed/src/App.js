import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import CntButton from './component/1weeks/CntButton';
import UserInfo from './component/1weeks/UserInfo';

function App() {  // 대문자 시작 컨포넌트

  const [count, setCount] = useState(0) // 문자도 가능 불리언 기능 배열 구조체 등등등 가능하다.

  const onPressUpButton = () => {
    console.log("up")
    setCount(count+1)
  }

  const onPressDownButton = () => {
    console.log("down")
    setCount(count-1)
  }

  return (
    <div className="App">
      <button style={{width : 100, height : 100}}
      onClick={()=>{onPressUpButton()}}>
        up
        </button>
      <p style={{fontWidth:'bold', fontSize : 44}}>
        {count}
        </p>
      <button style={{width : 100, height : 100}}
      onClick={()=>{onPressDownButton()}}>
        down
        </button>
        <div>
        <UserInfo name="조우주" age={24} callNum="010-4708-8303"/>
        <UserInfo  name="김평" age={35} callNum="010-4708-8304"/>
        <UserInfo name="박세명" age={52} callNum="010-4708-8305"/>
        <UserInfo name="김태공" age={63} callNum="010-4708-8306"/>
        </div>
        
    </div>
  );
}

export default App;
