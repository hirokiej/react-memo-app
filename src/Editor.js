import React from "react";
import PropTypes from "prop-types";

Editor.propTypes = {
  selectedMemo: PropTypes.object,
  updatedMemo: PropTypes.string,
  setUpdatedMemo: PropTypes.func,
  handleEditMemo: PropTypes.func,
  handleDeleteMemo: PropTypes.func,
};

export default function Editor({
  selectedMemo,
  updatedMemo,
  setUpdatedMemo,
  handleEditMemo,

  handleDeleteMemo,
}) {
  return (
    <>
      <textarea
        value={updatedMemo}
        onChange={(e) => setUpdatedMemo(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => handleEditMemo(updatedMemo)}>更新</button>
        <button onClick={handleDeleteMemo}>削除</button>
      </div>
    </>
  );
}
