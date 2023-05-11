import { ShippingContainer } from "./ShippingContainer";

export class HeavyContainer implements ShippingContainer {
  tareWeight: number; //weight of container empty
  destination: string;
  cargoWeight: number; //weight of the cargo inside container
  constructor(
    someTareWeight: number,
    someDestination: string,
    someCargoWeight: number = 0
  ) {
    this.tareWeight = someTareWeight;
    this.destination = someDestination;
    this.cargoWeight = someCargoWeight;
  }
  getGrossWeight(): number {
    return this.tareWeight + this.cargoWeight;
  }
}
