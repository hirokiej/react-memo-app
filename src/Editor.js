export default function Editor({
  input,
  setInput,
  setMemos,
  memos,
  setIsEditing,
  selectedId,
}) {
  function handleEditMemo() {
    setMemos(
      memos.map((memo) => {
        if (memo.id === selectedId) {
          return { ...memo, memo: input };
        }
        return memo;
      })
    );
    setIsEditing(false);
  }

  function handleDelete() {
    setMemos(
      memos.filter((memo) => {
        return memo.id !== selectedId;
      })
    );
    setIsEditing(false);
  }

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows="12"
        type="text"
      />
      <div className="button-group">
        <button onClick={handleEditMemo}>更新</button>
        <button onClick={handleDelete}>削除</button>
      </div>
    </>
  );
}
