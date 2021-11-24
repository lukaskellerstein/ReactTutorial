import React from "react";

const withDataFetching = (props) => (WrappedComponent) => {
  class WithDataFetching extends React.Component {
    constructor() {
      super();
      this.state = {
        results: [],
        loading: true,
        error: "",
      };
    }

    async fetchData() {
      try {
        const data = await fetch(props.dataSource);
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

      return (
        <WrappedComponent
          results={results}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
  }

  return WithDataFetching;
};

export default withDataFetching;
