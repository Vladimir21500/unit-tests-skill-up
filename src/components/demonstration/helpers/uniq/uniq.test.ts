import { uniq } from "./uniq";

const testArr = new Array(20).fill(null).map((el) => ({
  name: "Vasil",
  age: 78,
}));

describe("uniq function", () => {
  test("should delete duplicates", () => {
    expect(uniq([45, 45, 2])).toEqual([45, 2]);
    expect(uniq(["fv", "fv", "fv"])).toEqual(["fv"]);
    // expect(uniq(["0", "0", "true", "true", true, true, 0, 0])).toEqual(["0", 0, true, "true"]);
    expect(uniq([undefined, undefined, undefined])).toEqual([undefined]);
  });
  test("should delete duplicates deeply", () => {
    expect(uniq(testArr)).toEqual([
      {
        name: "Vasil",
        age: 78,
      },
    ]);
  });
});
