import ErrorModal from "@components/error-modal/error-modal";
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormButton,
  Input,
  Ref,
  Text,
} from "@fluentui/react-northstar";
import { useRef, useState } from "react";
import "./login-form.scss";

type LoginFormProps = {
  theme: string;
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

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  const onFormSubmit = () => {
    if (emailRef.current?.value !== validEmail) {
      setErrorState({
        hasError: true,
        title: "Login Error",
        message: "Email does not exists",
      });
      props.onLogin(false);
      return;
    }

    if (passwordRef.current?.value !== validPassword) {
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
      <Card>
        <CardHeader>
          <Text content="Login Form" weight="bold" />
        </CardHeader>
        <CardBody>
          <Form onSubmit={onFormSubmit}>
            <Ref innerRef={emailRef}>
              <Input
                label="Email"
                name="email"
                id="email-input"
                defaultValue={validEmail}
                required
              />
            </Ref>
            <Ref innerRef={passwordRef}>
              <Input
                label="Password"
                name="password"
                type="password"
                id="password-input"
                defaultValue={validPassword}
                required
              />
            </Ref>
            <FormButton content="Submit" />
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default LoginForm;
