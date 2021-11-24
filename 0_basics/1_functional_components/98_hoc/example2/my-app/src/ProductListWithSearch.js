import { memo } from "react";
import withSearch from "./hoc/WithSearch";
import ProductsList from "./ProductList";
// -----------------------------------------------------------
// HOC = reusable composition approach
// -----------------------------------------------------------
const ProductsListWithSearch = withSearch(ProductsList);

// -----------------------------------------------------------
// NON-HOC = simply create a concrete new component
// -----------------------------------------------------------
// const ProductsListWithSearch = () => {
//   // -----------------
//   // LOCAL STATE / REACT HOOK - useState()
//   // -----------------
//   const [myState, setMyState] = useState({
//     searchTerm: "",
//   });

//   const handleSearch = (event) => {
//     setMyState({
//       ...myState,
//       searchTerm: event.target.value,
//     });
//   };

//   let filteredProducts = filterProducts(myState.searchTerm);

//   return (
//     <div>
//       <input
//         onChange={handleSearch}
//         value={myState.searchTerm}
//         type="text"
//         placeholder="Search"
//       />
//       <ProductsList products={filteredProducts} />
//     </div>
//   );
// };

// const filterProducts = (searchTerm) => {
//     searchTerm = searchTerm.toUpperCase();
//     return products.filter((product) => {
//         let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
//         return str.indexOf(searchTerm) >= 0;
//     });
// };

const ProductsListWithSearchPure = memo(ProductsListWithSearch);
export default ProductsListWithSearchPure;
