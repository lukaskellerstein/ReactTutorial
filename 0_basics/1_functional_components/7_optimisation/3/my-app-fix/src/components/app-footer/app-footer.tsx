import { ThemeContext } from "@context/theme.context";
import { useContext } from "react";
import "./app-footer.scss";

const AppFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme + "-theme app-footer-container"}>
      <div className="col-1">Created by Lukas Kellerstein</div>
      <div className="col-2">12/04/2021</div>
    </div>
  );
};

export default AppFooter;
