import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";
import { useEffect } from "react";

const MyAppBar = (props: any) => {
  console.log("app-bar", "start render", "props: ", props);

  let buttons = null;

  const onLogoutClick = () => {
    console.log("app-bar", "onLogoutClick");

    if (props && props.onLogout) {
      props.onLogout(false);
    }
  };

  useEffect(() => {
    console.log("app-bar", "useEffect without dependency");
  }); // <----- no parameter is no-dependency => run EVERY render !!!

  useEffect(() => {
    console.log("app-bar", "useEffect with empty dependency");
  }, []); // <----- [] is empty-dependency => run only ONCE !!!

  useEffect(() => {
    console.log("app-bar", "useEffect - props has changed", props);
    console.log("app-bar", "condition - isLogged: ", props.isLogged);
    if (props && props.isLogged && props.onLogout) {
      buttons = (
        <Button color="inherit" onClick={onLogoutClick}>
          Logout
        </Button>
      );
    }
  }, [props]); // <---- [props] is dependency => each time props are changed !!!

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
