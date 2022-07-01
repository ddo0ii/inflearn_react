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
                  author: e.target.value,
                  content: state.content
              });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={(e) => {
            setState({
              content: e.target.value,
              author: state.author,
            });
          }}
        />
      </div>
    </div>
  );
};
export default DiaryEditor;