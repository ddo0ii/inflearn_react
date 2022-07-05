import React, { useEffect, useState } from "react";
const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount!");
  }, []); //dependency array는 빈 배열로

  // component가 update되는 순간
  // state 변경, 부모에게서 받는 props가 바뀌거나, 부모 component가 rerendering 자기자신도 rerendering됨
  // rerendering되는 것은 component가 update된다는 말
  // state를 변경하는 순간을 useEffect로 제어, dependent array를 전달하지 않으면 된다.
  // component를 update하는 순간을 사용하려면, useEffect를 사용하면 된다.
  useEffect(() => {
    console.log("Update!");
  });

  // useEffect의 dependency array에 count를 전달하면
  // dependency값이 변화하면, 그 순간 callback함수가 수행이 된다.
  useEffect(() => {
    console.log(`count is update : ${count}`);
    if (count > 5) {
      alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
      setCount(1);
    }
  }, [count]);
  useEffect(() => {
    console.log(`text is update : ${text}`);
  }, [text]);

  return (
    <div style={{ padding: 20 }}>
      <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};
export default Lifecycle;
