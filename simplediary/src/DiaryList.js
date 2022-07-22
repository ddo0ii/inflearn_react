import { useContext } from "react";
import DiaryItem from "./DiaryItem";
import { DiaryStateContext } from "./App";

const DiaryList = () => {
  // context에서 받아와야하기 때문에 useContext라는 hook을 사용해야한다(import받아야한다.)
  // DiaryStateContext는 App.js에서 export const로 내보낸적이 있기에 import로 가져와주고 아래와 같이사용하면된다.
  const diaryList = useContext(DiaryStateContext)
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// defaultProps는 undefined로 전달 될 수 있는 값을 default로 설정해주는 것
DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
