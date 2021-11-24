import MyComponent from "../my-component/my-component";

const ContainerComponent = () => {
  const log = (data) => {
    console.log(data);
  };

  // SET PROPS-FUNCTION => AKA OUTPUT
  return <MyComponent onChange={log} />;
};

export default ContainerComponent;
