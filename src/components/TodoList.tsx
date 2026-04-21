import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <p className="empty-msg">No todos yet. Add one above!</p>;
  }

  return (
    // FIX Bug 3: use t.id (GUID) as key — never use the array index
    <ul className="todo-list">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} />
      ))}
    </ul>
  );
}
