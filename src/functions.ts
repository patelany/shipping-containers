import { Ship } from "./models/Ship";
import { ShippingContainer } from "./models/ShippingContainer";
import { Transporter } from "./models/Transporter";

export const findContainersByDestination = (
  containers: ShippingContainer[],
  destination: string
): ShippingContainer[] => {
  return containers.filter((item) => {
    return item.destination === destination;
  });
};

export const findOverWeightTransporters = (
  transporters: Transporter[]
): Transporter[] => {
  return transporters.filter((item) => {
    return item.isOverWeight();
  });
};

export const isSafeToAddContainer = (
  ship: Ship,
  container: ShippingContainer
): boolean => {
  if (ship.getTotalWeight() + container.getGrossWeight() <= ship.maxWeight) {
    return true; //safe
  } else {
    return false; //not safe
  }
};
