import {
  Button,
  MenuIcon,
  Popup,
  SettingsIcon,
} from "@fluentui/react-northstar";
import "./app-header.scss";

type AppHeaderProps = {
  theme: string;
  onLogout: (x: boolean) => void;
  onThemeChange: (theme: string) => void;
  isLogged: boolean;
};

const PopupWithButton = (props: any) => {
  const onThemeClick = (theme: string) => {
    console.log(theme);
    props.onThemeClick(theme);
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

const AppHeader = (props: AppHeaderProps) => {
  let buttons = null;

  const onLogoutClick = () => {
    props.onLogout(false);
  };

  const onThemeClick = (theme: string) => {
    props.onThemeChange(theme);
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
    <div className={props.theme + "-theme app-header-container"}>
      <div className="col-1">
        <MenuIcon />
      </div>
      <div className="col-2">
        {buttons}
        <PopupWithButton
          icon={<SettingsIcon />}
          key="settings-button"
          onThemeClick={onThemeClick}
        />
      </div>
    </div>
  );
};

export default AppHeader;
