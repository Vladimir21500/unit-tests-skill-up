export const fetchTodo = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return response.json();
};
