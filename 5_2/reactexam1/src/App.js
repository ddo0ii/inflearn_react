import React from "react";
import './App.css';
import MyHeader from './MyHeader';

function App() {
  let name = "soyeong"
  return (
    <div className="App">
      <MyHeader />
      <h2>Hello React! {name}</h2>
      <b id="bold_text">React.js</b>
    </div>
  );
}

export default App;
