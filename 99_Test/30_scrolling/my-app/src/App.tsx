import AppFooter from "@components/app-footer/app-footer";
import AppHeader from "@components/app-header/app-header";
import AppSidebar from "@components/app-sidebar/app-sidebar";
import LoginForm from "@components/login-form/login-form";
import OrdersPage from "@components/orders-page/orders-page";
import ProductsPage from "@components/products-page/products-page";
import UpcomingEventsPage from "@components/upcoming-events-page/upcoming-events-page";
import { memo, useCallback, useRef, useState } from "react";
import "./App.scss";
import { Logger } from "./business/logger";
import { ThemeProvider } from "./providers/theme.provider";

const AppSidebarMemoized = memo(AppSidebar);

function App() {
  const logger = new Logger("app", "#fa6969");

  const [isLogged, setLogged] = useState(false);
  const [selectedPage, setSelectedPage] = useState("products");

  const visitedPages = useRef(0);

  const onLogin = (isLogged: boolean) => {
    setLogged(isLogged);
  };

  const onSidebarMenuClicked = useCallback((pageName: any) => {
    visitedPages.current += 1;
    setSelectedPage(pageName);
  }, []);

  let whatToShow = null;
  if (isLogged) {
    whatToShow = (
      <>
        <div className="sidebar">
          <AppSidebarMemoized
            selectedMenuItem={selectedPage}
            onMenuItemSelected={onSidebarMenuClicked}
          />
        </div>
        <div className="page">
          {selectedPage === "products" && <ProductsPage />}
          {selectedPage === "orders" && <OrdersPage />}
          {selectedPage === "upcoming-events" && <UpcomingEventsPage />}
        </div>
      </>
    );
  } else {
    whatToShow = (
      <div className="login-form">
        <LoginForm onLogin={onLogin} />
      </div>
    );
  }

  return (
    <>
      <ThemeProvider>
        <div className="App">
          <div className="wrapper">
            <header className="page-header">
              <AppHeader
                isLogged={isLogged}
                onLogout={onLogin}
                visitedPages={visitedPages.current}
              />
            </header>
            <main className="page-body">{whatToShow}</main>
            <footer className="page-footer">
              <AppFooter />
            </footer>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
