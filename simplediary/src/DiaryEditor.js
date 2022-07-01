import { useState } from "react";

const DiaryEditor = () => {
  // state는 state, setState는 상태변화를 주도하는 함수
  const [state, setState] = useState({
    author: "",
    content: "",
  });
    
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          // 값이 바뀌었을 때
          onChange={(e) => {
              setState({
                  // 순서 바꾸면 안됨
                  ...state,
                  author: e.target.value, // 이게 앞으로 가면, ...state값이 덮어써서 안바뀌게 된다.
              });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
              setState({
                ...state,
                content: e.target.value,
              });
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;