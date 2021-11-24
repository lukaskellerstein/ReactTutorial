import "./App.css";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <ProductList url="https://fakestoreapi.com/products" />
    </div>
  );
}

export default App;
