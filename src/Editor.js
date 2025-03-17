import React from "react";
import PropTypes from "prop-types";

Editor.propTypes = {
  memos: PropTypes.array,
  setMemos: PropTypes.func,
  selectedMemo: PropTypes.object,
  setSelectedMemo: PropTypes.func,
  handleEditMemo: PropTypes.func,
  handleDeleteMemo: PropTypes.func,
};

export default function Editor({
  selectedMemo,
  setSelectedMemo,
  handleEditMemo,
  handleDeleteMemo,
}) {
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
