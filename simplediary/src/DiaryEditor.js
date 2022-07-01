import { useState } from "react";

const DiaryEditor = () => {
    // author는 state, setAuthor는 상태변화를 주도하는 함수
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input
                    name="author"
                    value={author}
                    // 값이 바뀌었을 때
                    onChange={(e) => {
                        setAuthor(e.target.value);
                    }}
                />
            </div>
            <div>
                <textarea
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};
export default DiaryEditor;