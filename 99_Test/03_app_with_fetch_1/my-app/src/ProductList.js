import { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.state = {
      results: [],
      loading: true,
      error: "",
    };
  }

  async fetchData() {
    try {
      const data = await fetch(this.url);
      const json = await data.json();

      console.log("json", json);

      if (json) {
        this.setState({
          results: json,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  render() {
    const { results, loading, error } = this.state;

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
}

export default ProductList;
