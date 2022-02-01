import { CarDTO } from "../../DTOs/Car.dto";

// ----------------------------------------------------------------
// Fix 2. - reducer
// ----------------------------------------------------------------
export const productsReducer = (state: { products: CarDTO[] }, action: any) => {
  let newState;
  switch (action.type) {
    case "GET":
      console.log(action);
      console.log(state);
      newState = {
        products: action.payload,
      };
      console.log(newState);
      break;
    case "ADD":
      newState = {
        products: [...state.products, action.payload],
      };
      break;
    case "REMOVE":
      const filteredProducts = state.products.filter(
        (p: CarDTO) => p.id !== action.payload
      );
      newState = {
        products: filteredProducts,
      };
      break;
    default:
      throw new Error("Somethin is wrong in productsReducer");
  }
  return newState;
};
