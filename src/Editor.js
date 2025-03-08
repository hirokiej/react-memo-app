export default function Editor({
  input,
  setInput,
  setMemos,
  memos,
  setIsEditing,
  selectedId,
}) {
  const selectedMemo = memos.find((memo) => memo.id === selectedId);

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></textarea>
      <div>
        <button
          onClick={() => {
            const editMemo = memos.map((memo) => {
              if (memo.id === selectedId) {
                return { ...memo, memo: input };
              }
              return memo;
            });
            setMemos(editMemo);
            setIsEditing(false);
          }}
        >
          更新
        </button>
        <button>削除</button>
      </div>
    </>
  );
}
