import { forwardRef, useImperativeHandle } from "react";

const MyList = forwardRef((props, ref) => {
  const someMethod = () => {
    console.log("someMethod call");
  };

  const someVar = 55;

  // The component instance will be extended
  // with whatever you return from the callback passed
  // as the second argument
  useImperativeHandle(ref, () => ({
    myMethod: someMethod,
    myVar: someVar,
  }));

  return (
    <ul>
      {props.data.map((value, index) => {
        return <li key={index}>{value}</li>;
      })}
    </ul>
  );
});

export default MyList;
