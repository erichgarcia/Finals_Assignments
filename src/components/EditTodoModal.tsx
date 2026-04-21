import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodos } from "../context/TodoContext";

interface Props {
  todo: Todo;
  onClose: () => void;
}

export default function EditTodoModal({ todo, onClose }: Props) {
  const { updateTodo } = useTodos();
  const [title, setTitle] = useState(todo.title);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    if (!title.trim()) {
      setError("Title cannot be empty.");
      return;
    }
    setSaving(true);
    await updateTodo(todo.id, { title: title.trim(), completed: todo.completed });
    setSaving(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Edit Todo</h2>
        <input
          type="text"
          className={`todo-input${error ? " input-error" : ""}`}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setError("");
          }}
          autoFocus
        />
        {error && <span className="error-msg">{error}</span>}
        <div className="modal-actions">
          <button onClick={onClose} className="btn btn-secondary">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-primary" disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
