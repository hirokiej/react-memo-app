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
  const [updatedMemo, setUpdatedMemo] = useState(selectedMemo);

  useEffect(() => {
    if (selectedMemo) {
      setUpdatedMemo(selectedMemo);
    }
  }, [selectedMemo]);

  return (
    <>
      <textarea
        value={updatedMemo.memo}
        onChange={(e) =>
          setUpdatedMemo({ ...updatedMemo, memo: e.target.value })
        }
      />
      <div className="button-group">
        <button
          onClick={() =>
            handleEditMemo({ ...updatedMemo, memo: updatedMemo.memo })
          }
        >
          更新
        </button>
        <button
          onClick={() =>
            handleDeleteMemo({ ...selectedMemo, memo: selectedMemo.memo })
          }
        >
          削除
        </button>
      </div>
    </>
  );
}
