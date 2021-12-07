import AppFooter from "@components/app-footer/app-footer";
import AppHeader from "@components/app-header/app-header";
import AppSidebar from "@components/app-sidebar/app-sidebar";
import LoginForm from "@components/login-form/login-form";
import ProductsPage from "@components/products-page/products-page";
import { useState } from "react";
import "./App.scss";

function App() {
  const [isLogged, setLogged] = useState(false);
  const [themeState, setThemeState] = useState("green");

  const onLogin = (isLogged: boolean) => {
    setLogged(isLogged);
  };

  const onThemeChange = (theme: string) => {
    setThemeState(theme);
  };

  let whatToShow = null;
  if (isLogged) {
    whatToShow = (
      <>
        <div className="sidebar">
          <AppSidebar />
        </div>
        <div className="page">
          <ProductsPage theme={themeState} />
        </div>
      </>
    );
  } else {
    whatToShow = (
      <div className="login-form">
        <LoginForm theme={themeState} onLogin={onLogin} />
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <header className="page-header">
            <AppHeader
              isLogged={isLogged}
              onLogout={onLogin}
              theme={themeState}
              onThemeChange={onThemeChange}
            />
          </header>
          <main className="page-body">{whatToShow}</main>
          <footer className="page-footer">
            <AppFooter theme={themeState} />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
