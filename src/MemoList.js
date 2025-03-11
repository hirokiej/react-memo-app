import { v4 as uuidv4 } from "uuid";

export default function MemoList({
  memos,
  setMemos,
  setIsEditing,
  selectedId,
  setSelectedId,
  setInput,
}) {
  function handleAddMemo() {
    const newMemo = { id: uuidv4(), memo: "新規メモ" };
    setMemos([...memos, newMemo]);
    setIsEditing(true);
    setSelectedId(newMemo.id);
    setInput(newMemo.memo);
  }
  return (
    <>
      {memos.map((memo) => {
        const firstLine = memo.memo.split("\n")[0];
        return (
          <div
            key={memo.id}
            className={memo.id === selectedId ? "selected-memo" : "other-memos"}
            onClick={() => {
              setInput(memo.memo);
              setIsEditing(true);
              setSelectedId(() => memo.id);
            }}
          >
            {firstLine}
          </div>
        );
      })}
      <div onClick={handleAddMemo}>+</div>
    </>
  );
}
