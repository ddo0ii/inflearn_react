import React from "react";
// import './App.css';
import MyHeader from './MyHeader';

function App() {
  let name = "soyeong"

  const style = {
    App: {
      backgroundColor: "black"
    },
    h2: {
      color: "red"
    },
    bold_text: {
     color: "green"
    }
  }

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>Hello React! {name}</h2>
      <b style={style.bold_text} id="bold_text">React.js</b>
    </div>
  );
}

export default App;
