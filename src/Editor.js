import { v4 as uuidv4 } from "uuid";

export default function Editor({
  input,
  setInput,
  setMemos,
  memos,
  setIsEditing,
}) {
  return (
    <>
      <textarea
        onChange={(e) => setInput(e.target.value)}
        type="text"
      ></textarea>
      <div>
        <button
          onClick={() => {
            setMemos([...memos, { id: uuidv4(), memo: input }]);
            setIsEditing(false);
          }}
        >
          保存
        </button>
        <button>削除</button>
      </div>
    </>
  );
}
