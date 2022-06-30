import React from "react";
import './App.css';
import MyHeader from './MyHeader';

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
