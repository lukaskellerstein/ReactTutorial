import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

type MyAppBarProps = {
  onLogout: (x: boolean) => void;
  isLogged: boolean;
};

const MyAppBar = (props: MyAppBarProps) => {
  let buttons = null;

  const onLogoutClick = () => {
    props.onLogout(false);
  };

  if (props.isLogged) {
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
