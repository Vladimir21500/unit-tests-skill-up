import * as React from "react";
import  axios from 'axios'
import { fireEvent, render, screen } from "@testing-library/react";

import { Todo } from "./Todo";

jest.mock('axios');


describe("Todo", () => {
  it("renders Todo component", async () => {
    render(<Todo />);

    expect(screen.getByText(/loading.../)).toBeInTheDocument();
    expect(screen.queryByRole("checkbox")).toBeNull();

    screen.debug();

    expect(await screen.findByRole("checkbox")).toBeInTheDocument();
    screen.debug();

    fireEvent.change(screen.getByRole("checkbox"), {
      target: { value: "todo.completed" },
    });
    // expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it('fetch todo from an API and displays them', async () => {
    const todo = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      }

    axios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: todo })
    );

    render(<App />);

    await userEvent.click(screen.getByRole('button'));

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(2);
});
