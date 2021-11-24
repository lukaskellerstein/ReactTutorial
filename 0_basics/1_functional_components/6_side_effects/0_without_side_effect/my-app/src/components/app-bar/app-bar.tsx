import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

const MyAppBar = (props: any) => {
  let buttons = null;

  const onLogoutClick = () => {
    if (props && props.onLogout) {
      props.onLogout(false);
    }
  };

  if (props && props.isLogged && props.onLogout) {
    buttons = (
      <Button color="inherit" onClick={onLogoutClick}>
        Logout
      </Button>
    );
  }

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
