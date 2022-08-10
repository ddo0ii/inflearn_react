import { useState } from "react";

import MyHeader from "./../components/MyHeader";
import MyButton from "./../components/MyButton";

const Home = () => {
  // 날짜를 저장하는 state (기본값 - 현재시간)
  const [curDate, setCurDate] = useState(new Date());
  console.log(curDate);
  // 월은 +1씩 해줘야함
  const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1} 월`;

  return (
    <div>
      <MyHeader
        headText={headText}
        leftChild={<MyButton text={"<"} onClick={() => {}} />}
        rightChild={<MyButton text={">"} onClick={()=>{}} />}
      />
    </div>
  );
};

export default Home;
