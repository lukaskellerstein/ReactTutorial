import ErrorModal from "@components/error-modal/error-modal";
import { Text } from "@fluentui/react-northstar";
import { useEffect, useState } from "react";
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

  const getProducts = async () => {
    try {
      const responseRaw = await fetch(firebaseAPIUrl);
      if (!responseRaw.ok) {
        throw new ApiError(responseRaw.status, responseRaw.statusText);
      }
      const responseJSON = await responseRaw.json();
      const cars = mapProducts(responseJSON);

      setProducts(cars);
      setErrorState({
        hasError: false,
        title: "",
        message: "",
      });
    } catch (error: any) {
      setErrorState({
        hasError: true,
        title: error.message,
        message: `${error.status} - ${error.statusText}`,
      });
    }
  };

  const addProduct = async (item: CarDTO) => {
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
      setErrorState({
        hasError: true,
        title: error.message,
        message: `${error.status} - ${error.statusText}`,
      });
    }
  };

  const calculateAvgHP = (): string => {
    console.log("calculateAvgHP", products);
    let result = "?";

    const average =
      products
        .map((value) => parseInt(value.HP))
        .reduce((prevVal, currVal) => prevVal + currVal, 0) / products.length;
    result = average.toFixed(0).toString();

    return result;
  };

  useEffect(() => {
    logger.logEffect("with empty dependency", "call getProducts");
    getProducts();
  }, []);

  logger.logComponent("ends");
  return (
    <div className={props.theme + "-pp"}>
      <ErrorModal
        opened={errorState.hasError}
        title={errorState.title}
        message={errorState.message}
      />

      <Text size="large" content={`Product average HP: ${calculateAvgHP()}`} />

      <ProductDetailForm onAdd={addProduct} />
      <ProductList items={products} />
    </div>
  );
};

export default ProductsPage;
