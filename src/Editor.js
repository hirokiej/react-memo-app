import React from "react";
import PropTypes from "prop-types";

Editor.propTypes = {
  memos: PropTypes.array,
  setMemos: PropTypes.func,
  selectedMemo: PropTypes.object,
  setSelectedMemo: PropTypes.func,
};

export default function Editor({
  memos,
  setMemos,
  selectedMemo,
  setSelectedMemo,
}) {
  function handleEditMemo() {
    setMemos(
      memos.map((memo) => {
        return memo.id === selectedMemo.id
          ? { ...memo, memo: selectedMemo.memo }
          : memo;
      })
    );
    setSelectedMemo(null);
  }

  function handleDeleteMemo() {
    setMemos(
      memos.filter((memo) => {
        return memo.id !== selectedMemo.id;
      })
    );
    setSelectedMemo(null);
  }

  return (
    <>
      <textarea
        value={selectedMemo.memo}
        onChange={(e) =>
          setSelectedMemo({ ...selectedMemo, memo: e.target.value })
        }
      />
      <div className="button-group">
        <button onClick={handleEditMemo}>更新</button>
        <button onClick={handleDeleteMemo}>削除</button>
      </div>
    </>
  );
}
