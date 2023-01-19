import { isOdd } from "./is-odd";

describe("isOdd function", () => {
  test("should return false", () => {
    expect(isOdd(2)).toBeFalsy();
    expect(isOdd(0)).toBeFalsy();
    expect(isOdd(-4)).toBeFalsy();
    expect(isOdd(54324)).toBeFalsy();
    expect(isOdd(-2355352)).toBeFalsy();
  });

  test("should return true", () => {
    expect(isOdd(3)).toBeTruthy();
    expect(isOdd(-7)).toBeTruthy();
    expect(isOdd(1)).toBeTruthy();
    expect(isOdd(23462357)).toBeTruthy();
    expect(isOdd(-4236345)).toBeTruthy();
  });
});
