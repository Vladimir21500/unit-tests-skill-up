import { fetchTodo } from "./fetch-todo";
import fetch from "node-fetch";

describe("fetch todos", () => {
  test("the data is todo", async () => {
    const data = await fetchTodo("1");

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(data).toBe({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    });
    // await expect(fetchTodo("randomText")).resolves.toBe({});
  });

  //   test("the fetch fails with an error", async () => {
  //     await expect(fetchTodo("incorect")).rejects.toMatch("error");
  //   });
});
