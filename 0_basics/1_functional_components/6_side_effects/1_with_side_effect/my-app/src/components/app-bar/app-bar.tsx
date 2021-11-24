import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useEffect } from "react";

const MyAppBar = (props: any) => {
  let buttons = null;

  const onLogoutClick = () => {
    console.log("app-bar", "onLogoutClick");

    if (props && props.onLogout) {
      props.onLogout(false);
    }
  };

  useEffect(() => {
    console.log("app-bar", "useEffect without dependency");
  }, []);

  useEffect(() => {
    console.log("app-bar", "useEffect", props);
    if (props && props.isLogged && props.onLogout) {
      buttons = (
        <Button color="inherit" onClick={onLogoutClick}>
          Logout
        </Button>
      );
    }
  }, [props]);

  console.log("app-bar", "return JSX", "props: ", props);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          {buttons}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MyAppBar;
