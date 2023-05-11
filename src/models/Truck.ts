import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export class Truck implements Transporter {
  maxWeight: number; //max cargo capacity
  container: ShippingContainer | null = null; //container currently loaded on the truck
  constructor(someMaxWeight: number) {
    this.maxWeight = someMaxWeight;
  }
  addContainer(someContainer: ShippingContainer): void {
    this.container = someContainer;
  }
  getTotalWeight(): number {
    if (this.container !== null) {
      return this.container.getGrossWeight();
    } else {
      return 0;
    }
  }
  isOverWeight(): boolean {
    const result = this.getTotalWeight();
    if (result > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
