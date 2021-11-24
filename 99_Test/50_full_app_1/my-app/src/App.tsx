import MyAppBar from "@components/app-bar/app-bar";
import ErrorModal from "@components/error-modal/error-modal";
import LoginForm from "@components/login-form/login-form";
import ProductDetailForm from "@components/product-detail-form/product-detail-form";
import ProductList from "@components/product-list/product-list";
import "@fontsource/roboto";
import { useEffect, useState } from "react";
import "./App.scss";
import { CarDTO } from "./DTOs/Car.dto";

type ErrorState = {
  hasError: boolean;
  title: string;
  message: string;
};

class ApiError extends Error {
  constructor(status: number, statusText: string) {
    super("Api Error");
    this.status = status;
    this.statusText = statusText;
  }
  status: number;
  statusText: string;
}

function App() {
  const firebaseAPIUrl =
    "https://react-test-backend-30392-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  const [isLogged, setLogged] = useState(false);
  const [products, setProducts] = useState([]);
  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  useEffect(() => {
    if (isLogged) getProducts();
  }, [isLogged]);

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

  const onLogin = (isLogged: boolean) => {
    setLogged(isLogged);
  };

  const whatToShow = () => {
    if (isLogged) {
      return (
        <>
          <h1>Hello</h1>
          <ProductDetailForm onAdd={addProduct} />
          <ProductList items={products} />
        </>
      );
    } else {
      return (
        <div className="login-form">
          <LoginForm onLogin={onLogin} />
        </div>
      );
    }
  };

  return (
    <>
      <ErrorModal
        opened={errorState.hasError}
        title={errorState.title}
        message={errorState.message}
      />
      <div className="App">
        <MyAppBar isLogged={isLogged} onLogout={onLogin} />
        <div className="page-content">{whatToShow()}</div>
      </div>
    </>
  );
}

export default App;
