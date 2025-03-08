import { v4 as uuidv4 } from "uuid";

export default function MemoList({
  memos,
  setMemos,
  setIsEditing,
  setSelectedId,
  setInput,
}) {
  function handleDelete(id) {
    setMemos(memos.filter((memo) => memo.id !== id));
  }

  return (
    <>
      {memos.map((memo) => (
        <div
          key={memo.id}
          onClick={() => {
            setInput(memo.memo);
            setIsEditing(true);
            setSelectedId(memo.id);
          }}
        >
          {memo.memo}
          <button onClick={() => handleDelete(memo.id)}>削除</button>
        </div>
      ))}
      <div
        onClick={() => {
          const newMemo = { id: uuidv4(), memo: "新規メモ" };
          setMemos([...memos, newMemo]);
          setIsEditing(true);
          setSelectedId(newMemo.id);
          setInput(newMemo.memo);
        }}
      >
        +
      </div>
    </>
  );
}
