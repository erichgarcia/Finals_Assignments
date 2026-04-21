import { useState } from "react";
import type { Todo } from "../types/todo";
import { useTodos } from "../context/TodoContext";
import EditTodoModal from "./EditTodoModal";

interface Props {
  todo: Todo;
}

export default function TodoItem({ todo }: Props) {
  const { updateTodo, deleteTodo } = useTodos();
  const [editing, setEditing] = useState(false);

  const handleToggle = () => {
    updateTodo(todo.id, { title: todo.title, completed: !todo.completed });
  };

  return (
    <>
      <li className={`todo-item${todo.completed ? " completed" : ""}`}>
        <span className="todo-title">{todo.title}</span>
        <span className={`todo-badge${todo.completed ? " badge-done" : " badge-pending"}`}>
          {todo.completed ? "Done" : "Pending"}
        </span>
        <div className="todo-actions">
          <button className="btn btn-sm btn-toggle" onClick={handleToggle}>
            {todo.completed ? "Undo" : "Complete"}
          </button>
          <button className="btn btn-sm btn-edit" onClick={() => setEditing(true)}>
            Edit
          </button>
          <button className="btn btn-sm btn-delete" onClick={() => deleteTodo(todo.id)}>
            Delete
          </button>
        </div>
      </li>

      {editing && (
        <EditTodoModal todo={todo} onClose={() => setEditing(false)} />
      )}
    </>
  );
}
