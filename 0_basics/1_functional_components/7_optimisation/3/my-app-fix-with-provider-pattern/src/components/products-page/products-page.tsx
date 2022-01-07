import { ApiError } from "@business/api-errors";
import { Logger } from "@business/logger";
import { CarDTO } from "@dto/Car.dto";
import { Text } from "@fluentui/react-northstar";
import useErrors from "@hooks/useErrors";
import {
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { ThemeContext } from "../../contexts/theme.context";
import ProductDetailForm from "./product-detail-form/product-detail-form";
import ProductList from "./product-list/product-list";
import "./products-page.scss";
import { productsReducer } from "./products-reducer";
import { mapProducts } from "./products.mapping";

const ProductListMemoized = memo(ProductList);
const ProductDetailFormMemoized = memo(ProductDetailForm);
const TextMemoized = memo(Text);

const initialState = {
  products: [],
};

const ProductsPage = () => {
  const logger = new Logger("products-page", "#a366ff");
  logger.logComponent("start");

  const firebaseAPIUrl =
    "https://react-test-backend-af7fe-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  const { theme } = useContext(ThemeContext);

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const { html: errorsHtml, setError, setEmptyErrors } = useErrors();

  const getProducts = async () => {
    try {
      const responseRaw = await fetch(firebaseAPIUrl);
      if (!responseRaw.ok) {
        throw new ApiError(responseRaw.status, responseRaw.statusText);
      }
      const responseJSON = await responseRaw.json();
      if (responseJSON === null) {
        dispatch({ type: "GET", payload: [] });
        return;
      }

      const cars = mapProducts(responseJSON);
      dispatch({ type: "GET", payload: cars });
      setEmptyErrors();
    } catch (error: any) {
      setError(error.message, `${error.status} - ${error.statusText}`);
    }
  };

  const addProduct = useCallback(async (item: CarDTO) => {
    try {
      const responseRaw = await fetch(firebaseAPIUrl, {
        method: "POST",
        body: JSON.stringify(item),
      });
      if (!responseRaw.ok) {
        throw new ApiError(responseRaw.status, responseRaw.statusText);
      }
      const responseJSON = await responseRaw.json();

      dispatch({ type: "ADD", payload: { ...item, id: responseJSON.name } });
    } catch (error: any) {
      setError(error.message, `${error.status} - ${error.statusText}`);
    }
  }, []);

  const removeProduct = useCallback(
    async (id: string) => {
      const filteredProducts = state.products
        .filter((value: CarDTO) => value.id !== id)
        .reduce((acc: any, value: CarDTO) => {
          if (value.id) acc[value.id] = value;
          return acc;
        }, {});

      try {
        const responseRaw = await fetch(firebaseAPIUrl, {
          method: "PUT",
          body: JSON.stringify(filteredProducts),
        });
        if (!responseRaw.ok) {
          throw new ApiError(responseRaw.status, responseRaw.statusText);
        }
        dispatch({ type: "REMOVE", payload: id });
      } catch (error: any) {
        setError(error.message, `${error.status} - ${error.statusText}`);
      }
    },
    [state.products]
  );

  const calculateAvgHP = useMemo((): string => {
    logger.logComponent("calculateAvgHP", state.products);
    let result = "?";

    // Very long-running calculation
    const average =
      state.products
        .map((value: CarDTO) => parseInt(value.HP))
        .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0) /
      state.products.length;
    result = average.toFixed(0).toString();

    return result;
  }, [state.products]);

  useEffect(() => {
    logger.logEffect("with empty dependency", "call getProducts");
    getProducts();
  }, []);

  logger.logComponent("ends");
  return (
    <div className={theme + "-pp"}>
      {errorsHtml}

      <TextMemoized
        size="large"
        content={`Product average HP: ${calculateAvgHP}`}
      />

      <ProductDetailFormMemoized onAdd={addProduct} />
      <ProductListMemoized items={state.products} onRemove={removeProduct} />
    </div>
  );
};

export default ProductsPage;
