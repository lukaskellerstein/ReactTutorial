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

import { useQuery, useMutation, gql } from "@apollo/client";

const ProductListMemoized = memo(ProductList);
const ProductDetailFormMemoized = memo(ProductDetailForm);
const TextMemoized = memo(Text);

const initialState = {
  products: [],
};

const PRODUCTS_QUERY = gql`
  query MyGetAll {
    list {
      id
      brand
      model
      HP
    }
  }
`;

const ADD_PRODUCT = gql`
  mutation MyCreateOne($brand: String, $model: String, $HP: Int) {
    createItem(brand: $brand, model: $model, HP: $HP) {
      id
      brand
      model
      HP
    }
  }
`;

const REMOVE_PRODUCT = gql`
  mutation MyRemoveOne($id: String!) {
    deleteItem(id: $id)
  }
`;

const ProductsPage = () => {
  const logger = new Logger("products-page", "#a366ff");
  logger.logComponent("start");

  const { loading, error, data } = useQuery(PRODUCTS_QUERY);
  const [addCar, { loading: loading2, error: error2, data: data2 }] =
    useMutation(ADD_PRODUCT);

  const [removeCar, { loading: loading3, error: error3, data: data3 }] =
    useMutation(REMOVE_PRODUCT);

  const { theme } = useContext(ThemeContext);

  const [state, dispatch] = useReducer(productsReducer, initialState);

  const { html: errorsHtml, setError, setEmptyErrors } = useErrors();

  useEffect(() => {
    logger.logEffect("with empty dependency");

    if (data) {
      // mapping
      const cars = data.list?.map((value: any) => {
        return {
          id: value.id,
          brand: value.brand,
          model: value.model,
          HP: value.HP,
        };
      });

      dispatch({ type: "GET", payload: cars });
    }
  }, [data]);

  const addProduct = useCallback(async (item: CarDTO) => {
    try {
      const response = await addCar({
        variables: { brand: item.brand, model: item.model, HP: item.HP },
      });

      // mapping
      const car = {
        id: response.data?.createItem.id,
        brand: response.data?.createItem.brand,
        model: response.data?.createItem.model,
        HP: response.data?.createItem.HP,
      };

      dispatch({ type: "ADD", payload: car });
    } catch (error: any) {
      setError(error.message, `${error.status} - ${error.statusText}`);
    }
  }, []);

  const removeProduct = useCallback(async (id: string) => {
    try {
      const response = await removeCar({ variables: { id: id } });

      dispatch({ type: "REMOVE", payload: id });
    } catch (error: any) {
      setError(error.message, `${error.status} - ${error.statusText}`);
    }
  }, []);

  const calculateAvgHP = useMemo((): string => {
    // logger.logComponent("calculateAvgHP", state.products);
    let result = "?";

    // Very long-running calculation
    // const average =
    //   state.products
    //     .map((value: CarDTO) => parseInt(value.HP))
    //     .reduce((prevVal: number, currVal: number) => prevVal + currVal, 0) /
    //   state.products.length;
    // result = average.toFixed(0).toString();

    return result;
  }, []);

  logger.logComponent("ends");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
