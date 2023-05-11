import { HeavyContainer } from "../src/models/HeavyContainer";
import { LightContainer } from "../src/models/LightContainer";
import { ShippingContainer } from "../src/models/ShippingContainer";
import { Truck } from "../src/models/Truck";

describe("Truck class", () => {
  test(`The maxWeight property is set from the constructor parameter.`, () => {
    const truck1: Truck = new Truck(200);
    expect(truck1.maxWeight).toBe(200);
  });
  test(`The container property is set to null in a new Truck instance.`, () => {
    const truck1: Truck = new Truck(200);
    expect(truck1.container).toBeNull();
  });
  test(`Calling addContainer sets the container property.`, () => {
    const truck1: Truck = new Truck(200);
    const lightContainer1: LightContainer = new LightContainer("Seattle", 200);
    truck1.addContainer(lightContainer1);
    expect(truck1.container).toEqual(lightContainer1);
  });
  test(`getTotalWeight returns the gross weight of the container when a container is added.`, () => {
    const truck1: Truck = new Truck(300);
    const lightContainer1: LightContainer = new LightContainer("Seattle", 200);
    truck1.addContainer(lightContainer1);
    expect(truck1.getTotalWeight()).toBe(200);
  });
  test(`getTotalWeight returns the gross weight of the container when a container is added.`, () => {
    const truck1: Truck = new Truck(400);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Seattle",
      200
    );
    truck1.addContainer(heavyContainer1);
    expect(truck1.getTotalWeight()).toBe(300);
  });
  test(`getTotalWeight returns 0 when container is null.`, () => {
    const truck1: Truck = new Truck(400);
    expect(truck1.getTotalWeight()).toBe(0);
  });
  test(`isOverweight returns true when the total weight is greater than maxWeight.`, () => {
    const truck1: Truck = new Truck(200);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Seattle",
      200
    );
    truck1.addContainer(heavyContainer1);
    expect(truck1.isOverWeight()).toBe(true);
  });
  test(`isOverweight returns true when the total weight is greater than maxWeight.`, () => {
    const truck1: Truck = new Truck(300);
    const lightContainer1: LightContainer = new LightContainer("Seattle", 200);
    truck1.addContainer(lightContainer1);
    expect(truck1.isOverWeight()).toBe(false);
  });
  test(`isOverweight returns false when the total weight is equal to maxWeight.`, () => {
    const truck1: Truck = new Truck(200);
    const lightContainer1: LightContainer = new LightContainer("Seattle", 200);
    truck1.addContainer(lightContainer1);
    expect(truck1.isOverWeight()).toBe(false);
  });
});
