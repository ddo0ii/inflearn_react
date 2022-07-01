import { useState } from "react";

const DiaryEditor = () => {
  // state는 state, setState는 상태변화를 주도하는 함수
  const [state, setState] = useState({
    author: "",
    content: "",
  });
    
    const handleChangeState = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name]:e.target.value,
        })
    }
    
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea 
            name="content" 
            value={state.content} 
            onChange={handleChangeState} 
        />
      </div>
    </div>
  );
};
export default DiaryEditor;