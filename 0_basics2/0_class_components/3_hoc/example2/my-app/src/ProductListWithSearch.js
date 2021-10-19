import React, { PureComponent } from 'react';
import ProductsList from './ProductList';
import products from './products.json'

// -----------------------------------------------------------
// HOC = reusable composition approach
// -----------------------------------------------------------
// const ProductsListWithSearch = withSearch(ProductsList);


// -----------------------------------------------------------
// NON-HOC = simply create a concrete new component
// -----------------------------------------------------------
class ProductsListWithSearch extends PureComponent {
    state = {
        searchTerm: ''
    }
    handleSearch = event => {
        this.setState({ searchTerm: event.target.value })
    }
    render() {
        const { searchTerm } = this.state
        let filteredProducts = filterProducts(searchTerm);
        return (
            <>
                <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search" />
                <ProductsList products={filteredProducts} />
            </>
        )
    }
}

const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase();
    return products.filter(product => {
        let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
        return str.indexOf(searchTerm) >= 0;
    })
}

export default ProductsListWithSearch;