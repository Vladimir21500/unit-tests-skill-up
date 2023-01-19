// import { percentage } from "./percentage";
import { percentage } from "./percentage";

describe("percentage function", () => {
  test("int percentages", () => {
    expect(percentage(20, 100)).toEqual(20);
    expect(percentage(0, 0)).toEqual(0);
    expect(percentage(0, 100)).toEqual(0);
    expect(percentage(200, 133)).toEqual(266);
    expect(percentage(42, 4876)).toEqual(2047.9199999999998);
  });
  test("negative percentages", () => {
    expect(percentage(-20, 100)).toEqual(-20);
    expect(percentage(-4, -50)).toEqual(2);
    expect(percentage(32, -100)).toEqual(-32);
  });
  test("double percentages", () => {
    expect(percentage(-24.5, 100)).toEqual(-24.5);
    expect(percentage(24.563455, 3323323)).toEqual(816322.9496096501);
  });
});
