import AppFooter from "@components/app-footer/app-footer";
import AppHeader from "@components/app-header/app-header";
import AppSidebar from "@components/app-sidebar/app-sidebar";
import LoginForm from "@components/login-form/login-form";
import OrdersPage from "@components/orders-page/orders-page";
import ProductsPage from "@components/products-page/products-page";
import UpcomingEventsPage from "@components/upcoming-events-page/upcoming-events-page";
import { useState } from "react";
import "./App.scss";
import { Logger } from "./business/logger";

function App() {
  const logger = new Logger("app", "#fa6969");

  const [isLogged, setLogged] = useState(false);
  const [themeState, setThemeState] = useState("green");
  const [selectedPage, setSelectedPage] = useState("products");

  let visitedPages = 0;

  const onLogin = (isLogged: boolean) => {
    setLogged(isLogged);
  };

  const onThemeChange = (theme: string) => {
    setThemeState(theme);
  };

  const onSidebarMenuClicked = (pageName: any) => {
    visitedPages += 1;
    setSelectedPage(pageName);
  };

  let whatToShow = null;
  if (isLogged) {
    whatToShow = (
      <>
        <div className="sidebar">
          <AppSidebar
            selectedMenuItem={selectedPage}
            onMenuItemSelected={onSidebarMenuClicked}
          />
        </div>
        <div className="page">
          {selectedPage === "products" && <ProductsPage theme={themeState} />}
          {selectedPage === "orders" && <OrdersPage theme={themeState} />}
          {selectedPage === "upcoming-events" && (
            <UpcomingEventsPage theme={themeState} />
          )}
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
              visitedPages={visitedPages}
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
