import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} />
        ))}
      </div>
    </div>
  );
};

// defaultProps는 undefined로 전달 될 수 있는 값을 default로 설정해주는 것
DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;