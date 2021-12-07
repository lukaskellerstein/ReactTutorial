import MyAppBar from "@components/app-bar/app-bar";
import LoginForm from "@components/login-form/login-form";
import "@fontsource/roboto";
import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  console.log("app", "start render");
  const [isLogged, setLogged] = useState(false);

  const onLogin = (isLogged: boolean) => {
    console.log("app", "onLogin");
    setLogged(isLogged);
  };

  useEffect(() => {
    console.log("app", "useEffect without dependency");
  }); // <----- no parameter is no-dependency => run EVERY render !!!

  useEffect(() => {
    console.log("app", "useEffect with empty dependency");
  }, []); // <----- [] is empty-dependency => run only ONCE !!!

  useEffect(() => {
    console.log("app", "useEffect - isLogged has changed - ", isLogged);
  }, [isLogged]); // <---- [isLogged] is dependency => each time isLogged is changed !!!

  const whatToShow = () => {
    console.log("app", "condition - isLogged: ", isLogged);
    if (isLogged) {
      return <h1>Hello</h1>;
    } else {
      return (
        <div className="login-form">
          <LoginForm onLogin={onLogin} />
        </div>
      );
    }
  };

  console.log("app", "return JSX", "state: ", isLogged);
  return (
    <div className="App">
      <MyAppBar isLogged={isLogged} onLogout={onLogin} />
      <div className="page-content">{whatToShow()}</div>
    </div>
  );
}

export default App;
