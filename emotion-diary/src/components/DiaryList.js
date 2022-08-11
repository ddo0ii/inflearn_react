import { useState } from "react";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];
// value - select가 어떤것을 선택하고 있는지
// onChange - select가 변경했을 때 바꿀 함수
// optionList - select 안에 들어갈 option
const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const DiaryList = ({ diaryList }) => {
  // 정렬 (초기값 - latest)
  const [sortType, setSortType] = useState("latest");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };
    // 이는 diaryList를 JSON화 시켜서 문자화 시켜버린다!
    // 그래서 다시 parse를 하면 다시 복호화 시켜준다!
    // 이렇게 하고 copyList에 넣어주는 것이다
    // 그래서 값만 건드리고 원본은 건드리지 않고 수행했음을 알 수 있다
      const copyList = JSON.parse(JSON.stringify(diaryList));
      const sortedList = copyList.sort(compare);
      return sortedList;
  };

  return (
    <div>
      <ControlMenu
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      {getProcessedDiaryList().map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
