import { useEffect, useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";

function App() {
  const initialMemos = JSON.parse(localStorage.getItem("memos") || []);
  const [memos, setMemos] = useState(initialMemos);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

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
            setIsEditing={setIsEditing}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            setInput={setInput}
          />
        </div>
        <div className="edit">
          {isEditing && (
            <Editor
              input={input}
              setInput={setInput}
              setMemos={setMemos}
              memos={memos}
              setIsEditing={setIsEditing}
              selectedId={selectedId}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
