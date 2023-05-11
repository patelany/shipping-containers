import { LightContainer } from "../src/models/LightContainer";

describe("LightContainer class", () => {
  test(`constructor properly sets destination and cargoWeight properties`, () => {
    // arrance & act - call constructor (aka making obj)
    const lightContainer1: LightContainer = new LightContainer("NYC", 100);
    // expect(lightContainer1).toEqual({ destination: "NYC", cargoWeight: 100 });
    expect(lightContainer1.destination).toBe("NYC");
    expect(lightContainer1.cargoWeight).toBe(100);
  });
  test(`cargoWeight defaults to 0, when the second constructor parameter is omitted.`, () => {
    // arrance & act - call constructor (aka making obj)
    const lightContainer2: LightContainer = new LightContainer("Seattle");
    // expect(lightContainer1).toEqual({ destination: "NYC", cargoWeight: 100 });
    expect(lightContainer2.destination).toBe("Seattle");
    expect(lightContainer2.cargoWeight).toBe(0);
  });
  test(`getGrossWeight method returns the cargoWeight (write 2 test cases with different cargoWeights)`, () => {
    // arrance - make obj
    const lightContainer3: LightContainer = new LightContainer("Detroit", 300);
    // act - call method
    const result: number = lightContainer3.getGrossWeight();
    // assert
    expect(result).toBe(300);
  });
  test(`getGrossWeight method returns the cargoWeight (write 2 test cases with different cargoWeights)`, () => {
    // arrance - make obj
    const lightContainer3: LightContainer = new LightContainer("Detroit");
    // act - call method
    const result: number = lightContainer3.getGrossWeight();
    // assert
    expect(result).toBe(0);
  });
});
