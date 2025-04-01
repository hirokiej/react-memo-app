import { React, useEffect, useState } from "react";
import PropTypes from "prop-types";

Editor.propTypes = {
  selectedMemo: PropTypes.object,
  handleEditMemo: PropTypes.func,
  handleDeleteMemo: PropTypes.func,
};

export default function Editor({
  selectedMemo,
  handleEditMemo,
  handleDeleteMemo,
}) {
  const [updatedMemo, setUpdatedMemo] = useState("");

  useEffect(() => {
    if (selectedMemo) {
      setUpdatedMemo(selectedMemo.memo);
    }
  }, [selectedMemo]);

  return (
    <>
      <textarea
        value={updatedMemo}
        onChange={(e) => setUpdatedMemo(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => handleEditMemo(updatedMemo)}>更新</button>
        <button onClick={() => handleDeleteMemo(selectedMemo)}>削除</button>
      </div>
    </>
  );
}
