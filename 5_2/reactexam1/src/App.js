import React from "react";
import Counter from "./Counter";
// import './App.css';
import MyHeader from './MyHeader';

function App() {
  const number = 5;

  return (
    <div>
      <MyHeader />
      <Counter a={1} initialValue={5} />
    </div>
  );
}

export default App;
