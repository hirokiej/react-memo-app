export default function MemoList({ memos, setMemos, setIsEditing }) {
  function handleDelete(id) {
    setMemos(memos.filter((memo) => memo.id !== id));
  }

  function handleEdit({ memo }) {
    setMemos(
      memo.map((m) => {
        if (m.id === memo.id) {
          return memo;
        } else {
          return m;
        }
      })
    );
  }
  return (
    <>
      {memos.map((memo) => (
        <div key={memo.id}>
          {memo.memo}
          <button onClick={() => handleEdit(memo.id)}>編集</button>
          <button onClick={() => handleDelete(memo.id)}>削除</button>
        </div>
      ))}
      <div onClick={() => setIsEditing(true)}>+</div>
    </>
  );
}
