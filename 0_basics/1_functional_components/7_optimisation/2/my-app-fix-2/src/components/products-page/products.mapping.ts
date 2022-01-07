import { CarDTO } from "../../DTOs/Car.dto";

export const mapProducts = (items: any): Array<CarDTO> => {
  return Object.entries(items).reduce(
    (acc: Array<CarDTO>, [key, val]: [string, any]) => {
      const newCar: CarDTO = {
        id: key,
        brand: val.brand,
        model: val.model,
        HP: val.HP,
      };
      acc.push(newCar);
      return acc;
    },
    []
  );
};
