import * as React from "react";
import { render, screen } from "@testing-library/react";

import Demonstrate from "./Demonstrate";

describe("Demonstrate", () => {
  it("renders Demonstrate component", () => {
    render(<Demonstrate />);
  });
});
