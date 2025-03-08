import { useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <MemoList
        memos={memos}
        setMemos={setMemos}
        setIsEditing={setIsEditing}
        setSelectedId={setSelectedId}
        setInput={setInput}
      />

      <div>
        <div>
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
