import ErrorModal from "@components/error-modal/error-modal";
import { Text } from "@fluentui/react-northstar";
import { isEqual } from "lodash";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { ApiError, ErrorState } from "../../business/api-errors";
import { Logger } from "../../business/logger";
import { CarDTO } from "../../DTOs/Car.dto";
import ProductDetailForm from "./product-detail-form/product-detail-form";
import ProductList from "./product-list/product-list";
import "./products-page.scss";
import { mapProducts } from "./products.mapping";

type ProductPageProps = {
  theme: string;
};

// -----------------------------------------------------
// Fix 5. - Memoization
// -----------------------------------------------------
const ProductListMemoized = memo(ProductList);
// -----------------------------------------------------
// Fix 6. - Memoization
// -----------------------------------------------------
const ProductDetailFormMemoized = memo(ProductDetailForm);
// -----------------------------------------------------
// Fix 7. - Memoization
// -----------------------------------------------------
const TextMemoized = memo(Text);

const ProductsPage = (props: ProductPageProps) => {
  const logger = new Logger("products-page", "#a366ff");
  logger.logComponent("start");

  const firebaseAPIUrl =
    "https://react-test-backend-30392-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  const [products, setProducts] = useState<CarDTO[]>([]);
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  // -----------------------------------------------------
  // Fix 2. - Filter setState calls
  // -----------------------------------------------------
  const setErrorStateOptimised = (value: ErrorState): void => {
    if (!isEqual(errorState, value)) {
      setErrorState(value);
    }
  };

  const getProducts = async () => {
    try {
      const responseRaw = await fetch(firebaseAPIUrl);
      if (!responseRaw.ok) {
        throw new ApiError(responseRaw.status, responseRaw.statusText);
      }
      const responseJSON = await responseRaw.json();
      const cars = mapProducts(responseJSON);

      setProducts(cars);
      setErrorStateOptimised({
        hasError: false,
        title: "",
        message: "",
      });
    } catch (error: any) {
      setErrorStateOptimised({
        hasError: true,
        title: error.message,
        message: `${error.status} - ${error.statusText}`,
      });
    }
  };

  // -----------------------------------------------------
  // Fix 6. - useCallback
  // -----------------------------------------------------
  const addProduct = useCallback(async (item: CarDTO) => {
    try {
      const responseRaw = await fetch(firebaseAPIUrl, {
        method: "POST",
        body: JSON.stringify(item),
      });
      if (!responseRaw.ok) {
        throw new ApiError(responseRaw.status, responseRaw.statusText);
      }
      getProducts();
    } catch (error: any) {
      setErrorStateOptimised({
        hasError: true,
        title: error.message,
        message: `${error.status} - ${error.statusText}`,
      });
    }
  }, []);

  // -----------------------------------------------------
  // Fix 7. - useMemo
  // -----------------------------------------------------
  const calculateAvgHP = useMemo((): string => {
    logger.logComponent("calculateAvgHP", products);
    let result = "?";

    // Very long-running calculation
    const average =
      products
        .map((value) => parseInt(value.HP))
        .reduce((prevVal, currVal) => prevVal + currVal, 0) / products.length;
    result = average.toFixed(0).toString();

    return result;
  }, [products]);

  // -----------------------------------------------------
  // Fix 1. - useEffect with empty dependency
  // -----------------------------------------------------
  useEffect(() => {
    logger.logEffect("with empty dependency", "call getProducts");
    getProducts();
  }, []);

  logger.logComponent("ends");
  return (
    <div className={props.theme + "-pp"}>
      {
        // -----------------------------------------------------
        // Fix 3. - conditional rendering
        // -----------------------------------------------------
      }
      {errorState.hasError && (
        <ErrorModal
          opened={errorState.hasError}
          title={errorState.title}
          message={errorState.message}
        />
      )}

      <TextMemoized
        size="large"
        content={`Product average HP: ${calculateAvgHP}`}
      />

      <ProductDetailFormMemoized onAdd={addProduct} />
      <ProductListMemoized items={products} />
    </div>
  );
};

export default ProductsPage;
