export default function MemoList({ memos, setMemos }) {
  function handleDelete(id) {
    setMemos(memos.filter((memo) => memo.id !== id));
  }
  return memos.map((memo) => (
    <div key={memo.id}>
      {memo.memo}
      <button onClick={() => handleDelete(memo.id)}>削除</button>
    </div>
  ));
}
