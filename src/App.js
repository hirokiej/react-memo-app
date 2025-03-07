import { useState } from "react";
import MemoList from "./MemoList";
import Editor from "./Editor";
import "./App.css";

function App() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <>
      <MemoList memos={memos} setMemos={setMemos} setIsEditing={setIsEditing} />

      <div>
        <div>
          {isEditing && (
            <Editor
              input={input}
              setInput={setInput}
              setMemos={setMemos}
              memos={memos}
              setIsEditing={setIsEditing}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
