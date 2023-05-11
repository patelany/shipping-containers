import { ShippingContainer } from "./ShippingContainer";
import { Transporter } from "./Transporter";

export class Ship implements Transporter {
  maxWeight: number;
  containers: ShippingContainer[] = []; //containers currently loaded on the ship
  constructor(someMaxWeight: number) {
    this.maxWeight = someMaxWeight;
  }
  addContainer(container: ShippingContainer): void {
    this.containers.push(container);
  }
  getTotalWeight(): number {
    let sum = 0;
    if (this.containers.length !== 0) {
      for (let i = 0; i < this.containers.length; i++) {
        sum += this.containers[i].getGrossWeight();
      }
    } else {
      sum = 0;
    }
    return sum;
  }
  isOverWeight(): boolean {
    let result = this.getTotalWeight();
    if (result > this.maxWeight) {
      return true;
    } else {
      return false;
    }
  }
}
