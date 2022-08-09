// MyHeader는 className을 지정할 필요가 없는게
// 상위태그가 header이기 때문에 header는 여기에서만 쓸것이기 때문에 그래서 별도로 지정하지 않는다
const MyHeader = ({ headText, leftChild, rightChild }) => {
    return <header>
        <div className="head_btn_left">
            {leftChild}
        </div>
        <div className="head_text">
            {headText}
        </div>
        <div className="head_btn_right">
            {rightChild}
        </div>
    </header>
}

export default MyHeader;