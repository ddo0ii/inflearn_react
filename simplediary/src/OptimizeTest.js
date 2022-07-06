import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        {/* 기본 값이 1이기 때문에 상태변화가 없어서 console이 출력되지 않는다. */}
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Count B</h2>
        {/* obj는 객체이기 때문에(객체는 얕은 비교를 하기 때문) 상태변화가 일어나서 console로 나타나는 것을 확인할 수 있다. */}
        <CounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
