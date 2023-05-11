import { HeavyContainer } from "../src/models/HeavyContainer";
import { LightContainer } from "../src/models/LightContainer";
import { Ship } from "../src/models/Ship";

describe("Ship class", () => {
  test(`The maxWeight property is set from the constructor parameter.`, () => {
    const ship1: Ship = new Ship(400);
    expect(ship1.maxWeight).toBe(400);
  });
  test(`The containers property is set to an empty array in a new Ship instance.`, () => {
    const ship1: Ship = new Ship(400);
    expect(ship1.containers).toEqual([]);
  });
  test(`Calling addContainer adds to the containers array property.`, () => {
    const ship1: Ship = new Ship(400);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    ship1.addContainer(lightContainer2);
    expect(ship1.containers).toEqual([lightContainer2]);
  });
  test(`Calling addContainer twice adds both containers to the containers array property.`, () => {
    const ship1: Ship = new Ship(600);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    // const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(lightContainer2);
    // ship1.addContainer(heavyContainer2);
    expect(ship1.containers).toEqual([lightContainer2, lightContainer2]);
  });
  test(`Calling addContainer twice adds both containers to the containers array property.`, () => {
    const ship1: Ship = new Ship(600);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(heavyContainer2);
    expect(ship1.getTotalWeight()).toBe(700);
  });
  test(`Calling addContainer twice adds both containers to the containers array property.`, () => {
    const ship1: Ship = new Ship(2000);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    const lightContainer3: LightContainer = new LightContainer("Detroit", 300);
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(lightContainer3);
    ship1.addContainer(heavyContainer2);
    expect(ship1.getTotalWeight()).toBe(1000);
  });
  test(`getTotalWeight returns 0 when containers is empty.`, () => {
    const ship1: Ship = new Ship(200);
    expect(ship1.getTotalWeight()).toBe(0);
  });
  test(`isOverweight returns true when the total weight is greater than maxWeight.`, () => {
    const ship1: Ship = new Ship(600);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(heavyContainer2);
    expect(ship1.isOverWeight()).toBe(true);
  });
  test(`isOverweight returns false when the total weight is less than maxWeight.`, () => {
    const ship1: Ship = new Ship(800);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(heavyContainer2);
    expect(ship1.isOverWeight()).toBe(false);
  });
  test(`isOverweight returns false when the total weight is equal to maxWeight.`, () => {
    const ship1: Ship = new Ship(700);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 200);
    const heavyContainer2: HeavyContainer = new HeavyContainer(100, "NYC", 400);
    ship1.addContainer(lightContainer2);
    ship1.addContainer(heavyContainer2);
    expect(ship1.isOverWeight()).toBe(false);
  });
});
