import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useTodos } from "../context/TodoContext";

type FormValues = { title: string };

export default function AddTodoForm() {
  const { addTodo } = useTodos();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async ({ title }) => {
    await addTodo(title.trim());
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="add-todo-form">
      <input
        type="text"
        placeholder="What needs to be done?"
        className={`todo-input${errors.title ? " input-error" : ""}`}
        {...register("title", { required: "Title cannot be empty." })}
      />
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        Add
      </button>
      {errors.title && (
        <span className="error-msg">{errors.title.message}</span>
      )}
    </form>
  );
}
