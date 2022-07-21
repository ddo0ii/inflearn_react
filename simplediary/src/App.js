import React, { useCallback, useMemo, useEffect, useRef, useReducer } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// useReducer를 사용하는 이유는 복잡한 컴포넌트를 밖으로 내보내기 위해 사용한다.
// 그래서 component 밖에 둔다.
const reducer = (state, action) => {
  // switch를 이용하여 상태변화를 다르게 한다.
  // reducer가 반환하는 값이 data의 값이 된다.
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      // created_date는 받지 못했기에 새로 선언해준다
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date,
      };
      return [newItem, ...state];
    }
    case "REMOVE": {
      // targetId가 action.targetId가 아닌 애들만 filter하여 새로운 state를 전달해주면 된다.
      return state.filter((it) => it.id !== action.targetId);
    }
    case "EDIT": {
      // state.map((it) => it.id === action.targetId?는 수정하고자 하는 targetId를 만난것이다
      // ...it은 원래 객체 값을 넣어준 다음에 content값만 action.newContent로 넣어주면 된다
      // it은 그렇게 하고 원하는 값이 아니라면 그대로 반환해 주면된다
      return state.map((it) =>
        it.id === action.targetId ? { ...it, content: action.newContent } : it
      );
    }
    // 상태변화가 일어났는데 상태가 안변하면 안되니까.
    // default로! 상태를 변화시키지 않는다.(그대로 state를 반환)
    default:
      return state;
  }
};

// 먼저 일기 state를 전역적으로 도와줄 context 만들어보자
// React가 import되어있는지 확인하고 없다면 추가해준다.
// context도 내보내줘야하기 때문에, export default App;처럼 export해준다
// export default는 파일당 한번밖에 못쓰고, export는 여러번 쓸 수 있는데

export const DiaryStateContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);
  // data 호출
  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    //setData는 reducer함수가 하기 때문에 지워도 된다.
    // action의 type은 INIT이고 action에 필요한 데이터는 initData가 되는것이다
    dispatch({ type: "INIT", data: initData });
  };

  // App component가 mount 되자마자 호출해보자
  // 빈배열 함수를 전달하면 바로 콜백함수를 마운트 되는 시점에 실행되게 된다.
  // getData()로 API 호출
  useEffect(() => {
    getData();
  }, []);

  // useCallback사용
  const onCreate = useCallback((author, content, emotion) => {
    // data는 newItem에 있는 것을 그대로 들고와서 쓰면된다
    dispatch({
      type: "CREATE",
      data: { author, content, emotion, id: dataId.current },
    });
    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  }, []);

  // Memoization
  const getDiaryAnalysis = useMemo(() => {
    if (data.length === 0) {
      return { goodcount: 0, badCount: 0, goodRatio: 0 };
    }

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    // value라는 데이터로 공급을 해주어야한다.
    <DiaryStateContext.Provider value={data}>
      <div className="App">
        <DiaryEditor onCreate={onCreate} />
        <div>전체 일기 : {data.length}</div>
        <div>기분 좋은 일기 개수 : {goodCount}</div>
        <div>기분 나쁜 일기 개수 : {badCount}</div>
        <div>기분 좋은 일기 비율 : {goodRatio}</div>
        <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
      </div>
    </DiaryStateContext.Provider>
  );
};

export default App;
