import { v4 as uuidv4 } from "uuid";

export default function MemoList({
  memos,
  setMemos,
  setIsEditing,
  selectedId,
  setSelectedId,
  setInput,
}) {
  return (
    <>
      {memos.map((memo) => (
        <div
          key={memo.id}
          className={memo.id === selectedId ? "selected-memo" : "other-memos"}
          onClick={() => {
            setInput(memo.memo);
            setIsEditing(true);
            setSelectedId(() => memo.id);
          }}
        >
          {memo.memo}
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
