import React from "react";
import withDataFetching from "./hoc/withDataFetching";

function ProductList({ loading, results, error }) {
  console.log("props", { loading, results, error });

  if (loading || error) {
    return loading ? "Loading..." : error.message;
  }

  return (
    <ul>
      {results.map(({ id, title, price }) => (
        <li key={id}>
          <div>
            {title} - {price}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default withDataFetching({
  dataSource: "https://fakestoreapi.com/products",
})(ProductList);
