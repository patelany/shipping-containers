import { ShippingContainer } from "./ShippingContainer";

export class LightContainer implements ShippingContainer {
  destination: string;
  cargoWeight: number;
  constructor(someDestination: string, someCargoWeight: number = 0) {
    this.destination = someDestination;
    this.cargoWeight = someCargoWeight;
  }
  getGrossWeight(): number {
    return this.cargoWeight;
  }
}
