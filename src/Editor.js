import React from "react";
import PropTypes from "prop-types";

Editor.propTypes = {
  input: PropTypes.string,
  setInput: PropTypes.func,
  memos: PropTypes.array,
  setMemos: PropTypes.func,
  setIsEditing: PropTypes.func,
  selectedId: PropTypes.string,
  setSelectedId: PropTypes.func,
};

export default function Editor({
  input,
  setInput,
  memos,
  setMemos,
  setIsEditing,
  selectedId,
  setSelectedId,
}) {
  function handleEditMemo() {
    setMemos(
      memos.map((memo) => {
        return memo.id === selectedId ? { ...memo, memo: input } : memo;
      }),
    );
    setIsEditing(false);
    setSelectedId(null);
  }

  function handleDeleteMemo() {
    setMemos(
      memos.filter((memo) => {
        return memo.id !== selectedId;
      }),
    );
    setIsEditing(false);
  }

  return (
    <>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div className="button-group">
        <button onClick={handleEditMemo}>更新</button>
        <button onClick={handleDeleteMemo}>削除</button>
      </div>
    </>
  );
}
