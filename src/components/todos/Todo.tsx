import { useEffect, useState } from "react";
import { Todo as ITodo } from "../../types/todo";
import { fetchTodo, updateTodo } from "./helpers/todoApi";

const id = "1";

export const Todo = () => {
  const [todo, setTodo] = useState<ITodo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      setLoading(true);

      try {
        const response = await fetchTodo(id);

        setTodo(response);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    };

    init();
  }, []);

  const toggleComplete = async () => {
    await updateTodo(id, { ...todo, completed: !todo.completed });

    setTodo({ ...todo, completed: !todo.completed });
  };

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <h1>{todo?.title}</h1>
          <div>
            <input type='checkbox' checked={todo?.completed} onChange={toggleComplete} />
            {todo?.completed ? "Completed" : "Uncompleted"}
          </div>
        </>
      )}
    </div>
  );
};
