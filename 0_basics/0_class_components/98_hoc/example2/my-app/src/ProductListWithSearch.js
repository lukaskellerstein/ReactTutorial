import withSearch from "./hoc/WithSearch";
import ProductsList from "./ProductList";

// -----------------------------------------------------------
// HOC = reusable composition approach
// -----------------------------------------------------------
const ProductsListWithSearch = withSearch(ProductsList);

// -----------------------------------------------------------
// NON-HOC = simply create a concrete new component
// -----------------------------------------------------------
// class ProductsListWithSearch extends PureComponent {
//     state = {
//         searchTerm: ''
//     }
//     handleSearch = event => {
//         this.setState({ searchTerm: event.target.value })
//     }
//     render() {
//         const { searchTerm } = this.state
//         let filteredProducts = filterProducts(searchTerm);
//         return (
//             <>
//                 <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
//                 <ProductsList products={filteredProducts} />
//             </>
//         )
//     }
// }

export default ProductsListWithSearch;
