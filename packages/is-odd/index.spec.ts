import { isOdd } from ".";

describe("isOdd function", () => {
  it("should return true", () => {
    const result = isOdd(1);
    expect(result).toBe(true);
  });
  it("should return false", () => {
    const result = isOdd(2);
    expect(result).toBe(false);
  });
});
