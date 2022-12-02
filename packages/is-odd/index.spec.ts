import { isOdd } from ".";

describe("isOdd function", () => {
  it("should return true", () => {
    const result = isOdd(1);
    expect(result).toBe(true);
  });
});
