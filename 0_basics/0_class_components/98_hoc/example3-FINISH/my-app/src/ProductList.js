import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    // ({
    //   loading: this.loading,
    //   results: this.results,
    //   error: this.error,
    // } = props);

    this.loading = props.loading;
    this.results = props.results;
    this.error = props.error;
  }

  render() {
    if (this.loading || this.error) {
      return this.loading ? "Loading..." : this.error.message;
    }

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

// function ProductList({ loading, results, error }) {
//   if (loading || error) {
//     return loading ? "Loading..." : error.message;
//   }

//   return (
//     <ul>
//       {results.map(({ id, title, price }) => (
//         <li key={id}>
//           <div>
//             {title} - {price}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

export default ProductList;
