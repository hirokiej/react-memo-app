import { useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

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
