import MyAppBar from "@components/app-bar/app-bar";
import LoginForm from "@components/login-form/login-form";
import "@fontsource/roboto";
import { useState } from "react";
import "./App.scss";

function App() {
  const [isLogged, setLogged] = useState(false);

  const onLogin = (isLogged: boolean) => {
    setLogged(isLogged);
  };

  const whatToShow = () => {
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

  return (
    <div className="App">
      <MyAppBar isLogged={isLogged} onLogout={onLogin} />
      <div className="page-content">{whatToShow()}</div>
    </div>
  );
}

export default App;
