import { HeavyContainer } from "../src/models/HeavyContainer";

describe("HeavyContainer class", () => {
  test(`The tareWeight, destination, and cargoWeight properties are set from the constructor parameters.`, () => {
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Seattle",
      200
    );
    expect(heavyContainer1.tareWeight).toBe(100);
    expect(heavyContainer1.destination).toBe("Seattle");
    expect(heavyContainer1.cargoWeight).toBe(200);
  });
  test(`cargoWeight defaults to 0, when the third constructor parameter is omitted.`, () => {
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "Seattle");
    expect(heavyContainer2.tareWeight).toBe(100);
    expect(heavyContainer2.destination).toBe("Seattle");
    expect(heavyContainer2.cargoWeight).toBe(0);
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)`, () => {
    const heavyContainer3: HeavyContainer = new HeavyContainer(
      100,
      "Seattle",
      200
    );
    expect(heavyContainer3.getGrossWeight()).toBe(300);
  });
  test(`getGrossWeight returns the tareWeight plus the cargoWeight (write 2 test cases with different tareWeights and cargoWeights)`, () => {
    const heavyContainer3: HeavyContainer = new HeavyContainer(330, "Seattle");
    expect(heavyContainer3.getGrossWeight()).toBe(330);
  });
});
