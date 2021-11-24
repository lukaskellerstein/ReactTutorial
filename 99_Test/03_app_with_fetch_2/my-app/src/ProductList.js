import { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.results = props.results;
  }

  render() {
    return (
      <ul>
        {this.results.map(({ id, title, price }) => (
          <li key={id}>
            <div>
              {title} - {price}
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
