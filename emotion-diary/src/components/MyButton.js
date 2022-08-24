const MyButton = ({ text, type, onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    // className에 배열을 넣어볼 것이다
    // 근데 이를 배열이 아닌 문자로 전달해야해서 join메소드를 이용해 띄어쓰기를 seperate해서 합쳐줘 보자
    <button
      className={["MyButton", `MyButton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Type을 전달하지 않으면 default로 전달
MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
