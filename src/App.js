import { React, useEffect, useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";

function App() {
  const initialMemos = JSON.parse(localStorage.getItem("memos") || []);
  const [memos, setMemos] = useState(initialMemos);
  const [selectedMemo, setSelectedMemo] = useState(null);

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  return (
    <>
      <div className="app">
        <div className="memo-list">
          <MemoList
            memos={memos}
            setMemos={setMemos}
            selectedMemo={selectedMemo}
            setSelectedMemo={setSelectedMemo}
          />
        </div>
        <div className="edit">
          {selectedMemo && (
            <Editor
              memos={memos}
              setMemos={setMemos}
              selectedMemo={selectedMemo}
              setSelectedMemo={setSelectedMemo}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
