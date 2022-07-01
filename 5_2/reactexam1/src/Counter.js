// 상태 사용하겠다.
import React, { useState } from "react";

const Counter = () => {
    console.log('호출');
    const [count, setCount] = useState(0);

    const onIncrease = () => {
      setCount(count + 1);
    };

    const onDecrease = () => {
        setCount(count - 1);
    };

    
    const [count2, setCount2] = useState(0);

    const onIncrease2 = () => {
      setCount2(count2 + 1);
    };

    const onDecrease2 = () => {
      setCount2(count2 - 1);
    };

    return (
      <div>
        <h2>{count}</h2>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <h2>{count2}</h2>
        <button onClick={onIncrease2}>+</button>
        <button onClick={onDecrease2}>-</button>
      </div>
    );
}
export default Counter;