import {
  Button,
  MenuIcon,
  Popup,
  SettingsIcon,
} from "@fluentui/react-northstar";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import "./app-header.scss";

type AppHeaderProps = {
  onLogout: (x: boolean) => void;
  isLogged: boolean;
  visitedPages: number;
};

const AppHeader = (props: AppHeaderProps) => {
  const { theme } = useContext(ThemeContext);

  let buttons = null;

  const onLogoutClick = () => {
    props.onLogout(false);
  };

  const PopupWithButton = (props: any) => {
    const { setTheme } = useContext(ThemeContext);

    const onThemeClick = (theme: string) => {
      setTheme(theme);
    };
    return (
      <Popup
        content={
          <>
            <div
              className="red-rectangle"
              onClick={() => onThemeClick("red")}
            ></div>
            <div
              className="green-rectangle"
              onClick={() => onThemeClick("green")}
            ></div>
            <div
              className="blue-rectangle"
              onClick={() => onThemeClick("blue")}
            ></div>
          </>
        }
        pointing
        trigger={<Button icon={props.icon} iconOnly title="Show theme" />}
      />
    );
  };

  if (props.isLogged) {
    buttons = (
      <Button
        className="logout-button"
        content="Logout"
        onClick={onLogoutClick}
      />
    );
  }

  return (
    <div className={theme + "-theme app-header-container"}>
      <div className="col-1">
        <MenuIcon />
        <div className="visitedPages">Visited pages: {props.visitedPages}</div>
      </div>
      <div className="col-2">
        {buttons}
        <PopupWithButton icon={<SettingsIcon />} key="settings-button" />
      </div>
    </div>
  );
};

export default AppHeader;
