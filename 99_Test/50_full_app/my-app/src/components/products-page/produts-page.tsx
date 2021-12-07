import ErrorModal from "@components/error-modal/error-modal";
import { useEffect, useState } from "react";
import { ApiError, ErrorState } from "../../business/api-errors";
import { CarDTO } from "../../DTOs/Car.dto";
import ProductDetailForm from "./product-detail-form/product-detail-form";
import ProductList from "./product-list/product-list";

const ProductsPage = () => {
  const firebaseAPIUrl =
    "https://react-test-backend-30392-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  const [products, setProducts] = useState([]);
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
      setProducts(responseJSON || []);
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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ErrorModal
        opened={errorState.hasError}
        title={errorState.title}
        message={errorState.message}
      />
      <ProductDetailForm onAdd={addProduct} />
      <ProductList items={products} />
    </>
  );
};

export default ProductsPage;
