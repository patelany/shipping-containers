import {
  findContainersByDestination,
  findOverWeightTransporters,
  isSafeToAddContainer,
} from "../src/functions";
import { HeavyContainer } from "../src/models/HeavyContainer";
import { LightContainer } from "../src/models/LightContainer";
import { Ship } from "../src/models/Ship";
import { ShippingContainer } from "../src/models/ShippingContainer";
import { Transporter } from "../src/models/Transporter";
import { Truck } from "../src/models/Truck";

describe("findContainersByDestination fn", () => {
  test(`filter through array & return new array with destination of detroit `, () => {
    const lightContainer1: LightContainer = new LightContainer("Detroit", 200);
    const lightContainer2: LightContainer = new LightContainer("NYC", 400);
    const lightContainer3: LightContainer = new LightContainer("Seattle", 100);
    const lightContainer4: LightContainer = new LightContainer("Detroit", 300);
    const shippingContainers: ShippingContainer[] = [
      lightContainer1,
      lightContainer2,
      lightContainer3,
      lightContainer4,
    ];
    const newArray = findContainersByDestination(shippingContainers, "Detroit");
    expect(newArray).toEqual([lightContainer1, lightContainer4]);
  });
  test(`filter through array & return new array with destination of detroit `, () => {
    const lightContainer1: LightContainer = new LightContainer("Detroit", 200);
    const heavyContainer1: HeavyContainer = new HeavyContainer(150, "NYC", 500);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 100);
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      100,
      "Detroit",
      400
    );
    const lightContainer3: LightContainer = new LightContainer("Seattle", 100);
    const heavyContainer3: HeavyContainer = new HeavyContainer(
      200,
      "Novi",
      600
    );
    const lightContainer4: LightContainer = new LightContainer("Detroit", 300);
    const heavyContainer4: HeavyContainer = new HeavyContainer(
      100,
      "Detroit",
      400
    );
    const shippingContainers: ShippingContainer[] = [
      lightContainer1,
      heavyContainer1,
      lightContainer2,
      heavyContainer2,
      lightContainer3,
      heavyContainer3,
      lightContainer4,
      heavyContainer4,
    ];
    const newArray = findContainersByDestination(shippingContainers, "Detroit");
    expect(newArray).toEqual([
      lightContainer1,
      heavyContainer2,
      lightContainer4,
      heavyContainer4,
    ]);
  });
  test(`none of the containers match the destination ("Detroit") - expect empty array  `, () => {
    const lightContainer1: LightContainer = new LightContainer(
      "Northville",
      200
    );
    const heavyContainer1: HeavyContainer = new HeavyContainer(150, "NYC", 500);
    const lightContainer2: LightContainer = new LightContainer("Seattle", 100);
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      100,
      "Chicago",
      400
    );
    const lightContainer3: LightContainer = new LightContainer("Seattle", 100);
    const heavyContainer3: HeavyContainer = new HeavyContainer(
      200,
      "Novi",
      600
    );
    const lightContainer4: LightContainer = new LightContainer("Miami", 300);
    const heavyContainer4: HeavyContainer = new HeavyContainer(
      100,
      "Austin",
      400
    );
    const shippingContainers: ShippingContainer[] = [
      lightContainer1,
      heavyContainer1,
      lightContainer2,
      heavyContainer2,
      lightContainer3,
      heavyContainer3,
      lightContainer4,
      heavyContainer4,
    ];
    const newArray = findContainersByDestination(shippingContainers, "Detroit");
    expect(newArray).toEqual([]);
  });
  test(`provide empty array - expect empty array `, () => {
    const shippingContainers: ShippingContainer[] = [];
    const newArray = findContainersByDestination(shippingContainers, "Detroit");
    expect(newArray).toEqual([]);
  });
});

describe("findOverWeightTransporters fn", () => {
  test(`Do a test case with an array of Trucks, some overweight, some not.`, () => {
    const truck1: Truck = new Truck(420);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Chicago",
      400
    );
    truck1.addContainer(heavyContainer1);
    const truck2: Truck = new Truck(850);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 300);
    truck2.addContainer(lightContainer1);
    const truck3: Truck = new Truck(200);
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      200,
      "Miami",
      300
    );
    truck3.addContainer(heavyContainer2);
    const truck4: Truck = new Truck(710);
    const lightContainer2: LightContainer = new LightContainer("Detroit", 300);
    truck4.addContainer(lightContainer2);

    const transportersArray: Transporter[] = [truck1, truck2, truck3, truck4];
    const newArray = findOverWeightTransporters(transportersArray);
    expect(newArray).toEqual([truck1, truck3]);
  });
  test(`Do a test case with an array that has a mix of Truck and Ship, some overweight, some not.`, () => {
    const truck1: Truck = new Truck(420);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Chicago",
      400
    );
    truck1.addContainer(heavyContainer1);
    const truck2: Truck = new Truck(850);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 300);
    truck2.addContainer(lightContainer1);
    const ship1: Ship = new Ship(500);
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      200,
      "Miami",
      300
    );
    ship1.addContainer(heavyContainer2);
    const ship2: Ship = new Ship(210);
    const lightContainer2: LightContainer = new LightContainer("Detroit", 300);
    ship2.addContainer(lightContainer2);

    const transportersArray: Transporter[] = [truck1, truck2, ship1, ship2];
    const newArray = findOverWeightTransporters(transportersArray);
    expect(newArray).toEqual([truck1, ship2]);
  });
  test(`Do a test case with an array of Transporters where none are overweight. (Expect an empty array as the result.)`, () => {
    const truck1: Truck = new Truck(620);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      100,
      "Chicago",
      400
    );
    truck1.addContainer(heavyContainer1);
    const truck2: Truck = new Truck(850);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 300);
    truck2.addContainer(lightContainer1);
    const ship1: Ship = new Ship(500);
    const heavyContainer2: HeavyContainer = new HeavyContainer(
      200,
      "Miami",
      300
    );
    ship1.addContainer(heavyContainer2);
    const ship2: Ship = new Ship(310);
    const lightContainer2: LightContainer = new LightContainer("Detroit", 300);
    ship2.addContainer(lightContainer2);

    const transportersArray: Transporter[] = [truck1, truck2, ship1, ship2];
    const newArray = findOverWeightTransporters(transportersArray);
    expect(newArray).toEqual([]);
  });
  test(`Do a test case with an empty array. (Expect an empty array as the result.)`, () => {
    const transportersArray: Transporter[] = [];
    const newArray = findOverWeightTransporters(transportersArray);
    expect(newArray).toEqual([]);
  });
});

describe("isSafeToAddContainer fn", () => {
  test(`isSafeToAddContainer returns true for an empty ship and empty LightContainer when transporter maxWeight is 5000.`, () => {
    const ship1: Ship = new Ship(5000);
    const lightContainer1: LightContainer = new LightContainer("Detroit");
    expect(isSafeToAddContainer(ship1, lightContainer1)).toBe(true);
  });
  test(`isSafeToAddContainer returns true for an empty ship and a LightContainer with some cargo, but less than maxWeight`, () => {
    const ship1: Ship = new Ship(5000);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 2000);
    expect(isSafeToAddContainer(ship1, lightContainer1)).toBe(true);
  });
  test(`isSafeToAddContainer returns true for an empty ship and a HeavyContainer with some cargo, but less than maxWeight.`, () => {
    const ship1: Ship = new Ship(5000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      200,
      "Detroit",
      2000
    );
    expect(isSafeToAddContainer(ship1, heavyContainer1)).toBe(true);
  });
  test(`isSafeToAddContainer returns false for an empty ship and a LightContainer with some cargo, more than maxWeight.`, () => {
    const ship1: Ship = new Ship(5000);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 6000);
    expect(isSafeToAddContainer(ship1, lightContainer1)).toBe(false);
  });
  test(`isSafeToAddContainer returns false for an empty ship and a HeavyContainer with some cargo, more than maxWeight.`, () => {
    const ship1: Ship = new Ship(5000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      1000,
      "Detroit",
      5000
    );
    expect(isSafeToAddContainer(ship1, heavyContainer1)).toBe(false);
  });
  test(`isSafeToAddContainer returns true for an empty ship and a container with the same gross weight as the maxWeight.`, () => {
    const ship1: Ship = new Ship(5000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      1000,
      "Detroit",
      4000
    );
    expect(isSafeToAddContainer(ship1, heavyContainer1)).toBe(true);
  });
  test(`isSafeToAddContainer returns true for a container that is light enough to be added to this ship.`, () => {
    const ship1: Ship = new Ship(7000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      1000,
      "Detroit",
      4000
    );
    ship1.addContainer(heavyContainer1);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 1000);
    expect(isSafeToAddContainer(ship1, lightContainer1)).toBe(true);
  });
  test(`Create a ship with one or more containers already added. isSafeToAddContainer returns false for a container that is too heavy to be added to this ship.`, () => {
    const ship1: Ship = new Ship(7000);
    const heavyContainer1: HeavyContainer = new HeavyContainer(
      2000,
      "Detroit",
      4000
    );
    ship1.addContainer(heavyContainer1);
    const lightContainer1: LightContainer = new LightContainer("Detroit", 1500);
    expect(isSafeToAddContainer(ship1, lightContainer1)).toBe(false);
  });
});
