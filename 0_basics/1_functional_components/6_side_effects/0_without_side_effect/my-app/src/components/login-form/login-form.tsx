import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useRef } from "react";
import "./login-form.scss";

const LoginForm = (props: any) => {
  console.log("login-form", "start render", "props: ", props);

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const onLoginClick = () => {
    console.log("login-form", "onLoginClick");

    const emailValue = emailRef?.current?.value;
    const passwordValue = passwordRef?.current?.value;

    // check
    let result = false;
    if (emailValue && passwordValue) {
      if (emailValue === "aaa@gmail.com" && passwordValue === "Abc_123") {
        result = true;
      }
    }

    if (props && props.onLogin) {
      // pass the value to parent component
      props.onLogin(result);
    }
  };

  console.log("login-form", "return JSX", "props: ", props);
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent className="card-inputs">
        <TextField
          id="email-input"
          label="Email"
          defaultValue="aaa@gmail.com"
          inputRef={emailRef}
        />
        <TextField
          id="password-input"
          label="Password"
          type="password"
          defaultValue="Abc_123"
          inputRef={passwordRef}
        />
      </CardContent>
      <CardActions className="card-buttons">
        <Button color="primary" variant="outlined" onClick={onLoginClick}>
          Login
        </Button>
      </CardActions>
    </Card>
  );
};

export default LoginForm;
