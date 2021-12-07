import ErrorModal from "@components/error-modal/error-modal";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import "./login-form.scss";

type LoginFormProps = {
  onLogin: (x: boolean) => void;
};

type ErrorState = {
  hasError: boolean;
  title: string;
  message: string;
};

const LoginForm = (props: LoginFormProps) => {
  const validEmail = "aaa@gmail.com";
  const validPassword = "Abc_123";

  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();

  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  const onLoginClick = () => {
    if (
      !emailRef ||
      !emailRef.current ||
      !emailRef.current.value ||
      emailRef.current.value === "" ||
      emailRef.current.value !== validEmail
    ) {
      setErrorState({
        hasError: true,
        title: "Login Error",
        message: "Email does not exists",
      });
      props.onLogin(false);
      return;
    }

    if (
      !passwordRef ||
      !passwordRef.current ||
      !passwordRef.current.value ||
      passwordRef.current.value === "" ||
      passwordRef.current.value !== validPassword
    ) {
      setErrorState({
        hasError: true,
        title: "Login Error",
        message: "Password is not correct for specific Email",
      });
      props.onLogin(false);
      return;
    }

    setErrorState({
      hasError: false,
      title: "",
      message: "",
    });
    props.onLogin(true);
  };

  return (
    <>
      <ErrorModal
        opened={errorState.hasError}
        title={errorState.title}
        message={errorState.message}
      />
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
    </>
  );
};

export default LoginForm;
