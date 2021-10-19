const withSearch = WrappedComponent => {
    class WithSearch extends React.Component {
        state = {
            searchTerm: ""
        };
        handleSearch = event => {
            this.setState({ searchTerm: event.target.value });
        };

        render() {
            let { searchTerm } = this.state;
            let filteredProducts = filterProducts(searchTerm);

            return (
                <>
                    <input
                        onChange={this.handleSearch}
                        value={searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                    <WrappedComponent data={filteredProducts} />
                </>
            );
        }
    };
    WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;
    return WithSearch;
};

const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

