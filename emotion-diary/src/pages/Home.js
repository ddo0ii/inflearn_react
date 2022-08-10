import { useState } from "react";

const Home = () => {
    // 날짜를 저장하는 state (기본값 - 현재시간)
    const [curDate, setCurDate] = useState(new Date());
    console.log(curDate);

    return (
        <div></div>
    )
}

export default Home;