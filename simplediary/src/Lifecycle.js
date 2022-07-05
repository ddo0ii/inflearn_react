import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  // component가 unmount되는 순간 제어
  useEffect(() => {
    console.log("Mount!");
    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount!");
    };
  }, []);
  return <div>Unmount Testing Component</div>;
};

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {/* isVisible이 true일때만 UnmountTest가 반환될 수 있도록(단락회로평가)
      단락 회로 평가
      단락 회로 평가 논리 연산자 (&& , ||) 를 사용하여 연산을 진행 할 때 좌측 식의 값에 따라 우측 식의 실행 여부를 판단하는 동작 */}
      {isVisible && <UnmountTest />}
    </div>
  );
};
export default Lifecycle;
