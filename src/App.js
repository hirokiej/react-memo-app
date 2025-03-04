import { useState } from "react";
import MemoList from "./MemoList";
import "./App.css";

let nextId = 0;

function App() {
  const [memos, setMemos] = useState([]);
  const [input, setInput] = useState("");
  return (
    <>
      <MemoList memos={memos} setMemos={setMemos} />

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
      />
      <div>
        <button
          onClick={() => {
            setMemos([...memos, { id: nextId++, memo: input }]);
          }}
        >
          追加
        </button>
        <button>編集</button>
        <button
          onClick={() => {
            setMemos(memos.filter((memo) => memo.id !== memo.id));
          }}
        >
          削除
        </button>
      </div>
    </>
  );
}

export default App;
