import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

MemoList.propTypes = {
  memos: PropTypes.array,
  setMemos: PropTypes.func,
  selectedMemo: PropTypes.object,
  setSelectedMemo: PropTypes.func,
};

export default function MemoList({
  memos,
  setMemos,
  selectedMemo,
  setSelectedMemo,
}) {
  function handleAddMemo() {
    const newMemo = { id: uuidv4(), memo: "新規メモ" };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  }
  return (
    <>
      {memos.map((memo) => {
        const memoFirstLine = memo.memo.split("\n")[0];
        return (
          <div
            key={memo.id}
            className={
              memo.id === selectedMemo?.id
                ? "selected-memo"
                : "unselected-memos"
            }
            onClick={() => {
              setSelectedMemo(() => memo);
            }}
          >
            {memoFirstLine}
          </div>
        );
      })}
      <div onClick={handleAddMemo}>+</div>
    </>
  );
}
