import ErrorModal from "@components/error-modal/error-modal";
import {
  Card,
  CardBody,
  CardHeader,
  Form,
  FormButton,
  FormInput,
  Text,
} from "@fluentui/react-northstar";
import { useState } from "react";
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

  const [formState, setFormState] = useState({
    email: validEmail,
    password: validPassword,
  });

  const [errorState, setErrorState] = useState<ErrorState>({
    hasError: false,
    title: "",
    message: "",
  });

  const formHasChanged = (e: any) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = () => {
    if (formState.email !== validEmail) {
      setErrorState({
        hasError: true,
        title: "Login Error",
        message: "Email does not exists",
      });
      props.onLogin(false);
      return;
    }

    if (formState.password !== validPassword) {
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
            <FormInput
              label="Email"
              name="email"
              id="email-input"
              value={formState.email}
              onChange={formHasChanged}
              required
            />
            <FormInput
              label="Password"
              name="password"
              type="password"
              id="password-input"
              value={formState.password}
              onChange={formHasChanged}
              required
            />
            <FormButton content="Submit" />
          </Form>
        </CardBody>
      </Card>
      <div></div>
    </>
  );
};

export default LoginForm;
