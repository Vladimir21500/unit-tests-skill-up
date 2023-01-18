import { capitalize } from "./capitalize";

describe("capitalize function", () => {
  test("Should return capitalize first word", () => {
    expect(capitalize("hello, I am Venom")).toBe("Hello, I am Venom");
    expect(capitalize("sdthsthsnsrtnsn")).toBe("Sdthsthsnsrtnsn");
    expect(capitalize("My name is John")).toBe("My name is John");
    expect(capitalize("  my name is John after space")).toBe("  my name is John after space");
  });
});
