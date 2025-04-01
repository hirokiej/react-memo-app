import { React, useEffect, useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialMemos = JSON.parse(localStorage.getItem("memos") || []);
  const [memos, setMemos] = useState(initialMemos);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  function handleAddMemo() {
    const newMemo = { id: uuidv4(), memo: "新規メモ" };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  }

  function handleEditMemo(updatedMemo) {
    setMemos(
      memos.map((memo) => {
        return memo.id === selectedMemo.id
          ? { ...memo, memo: updatedMemo }
          : memo;
      }),
    );
    setSelectedMemo(null);
  }

  function handleDeleteMemo(selectedMemo) {
    setMemos(
      memos.filter((memo) => {
        return memo.id !== selectedMemo.id;
      }),
    );
    setSelectedMemo(null);
  }

  return (
    <>
      <div className="app">
        <div className="memo-list">
          <MemoList
            memos={memos}
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
            handleAddMemo={handleAddMemo}
          />
        </div>
        <div className="edit">
          {selectedMemo && (
            <Editor
              selectedMemo={selectedMemo}
              handleEditMemo={handleEditMemo}
              handleDeleteMemo={handleDeleteMemo}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
