import withDataFetching from "./hoc/withDataFetching";
import ProductList from "./ProductList";

// -----------------------------------------------------------
// HOC = reusable composition approach
// -----------------------------------------------------------
const ProductsListWithDataFetching = withDataFetching({
  dataSource: "https://fakestoreapi.com/products",
})(ProductList);

// -----------------------------------------------------------
// NON-HOC = simply create a concrete new component
// -----------------------------------------------------------
//TBD

export default ProductsListWithDataFetching;
