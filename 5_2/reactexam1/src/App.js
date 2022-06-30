import React from "react";
import './App.css';
import MyHeader from './MyHeader';

/**
컴포넌트 반환하려면, 최상위에서 무조건 묶어줘야한다.

최상위 컴포넌트를 사용하지 않으려면

import React from 'react'; 를하고,

<React.Fragment></React.Fragment> 로 감싸주면 된다.

귀찮으면 <></>로 빈태그로 감싸주면된다.

React 기능 사용하지 않으면, React import할 필요가 없다. 
 */
function App() {
  let name = "soyeong"
  return (
    <React.Fragment>
      <MyHeader />
      <header className="App-header">
        <h2>Hello React! {name}</h2>
      </header>
    </React.Fragment>    
  );
}

export default App;
