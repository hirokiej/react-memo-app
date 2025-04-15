import { React, useContext } from "react";
import PropTypes from "prop-types";
import { LoggedInContext } from "./LoggedInContext";

MemoList.propTypes = {
  memos: PropTypes.array,
  selectedMemo: PropTypes.object,
  setSelectedMemo: PropTypes.func,
  handleAddMemo: PropTypes.func,
};

export default function MemoList({
  memos,
  selectedMemo,
  setSelectedMemo,
  handleAddMemo,
}) {
  const { isLoggedIn } = useContext(LoggedInContext);
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

      {isLoggedIn ? <div onClick={handleAddMemo}>+</div> : null}
    </>
  );
}
