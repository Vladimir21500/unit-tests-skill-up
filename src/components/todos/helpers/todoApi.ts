import { Todo } from "../../../types/todo";

export const fetchTodo = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return response.json();
};

export const updateTodo = async (id: string, todo: Todo) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(todo),
  });

  return response.json();
};
