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
import { useRef } from "react";
import "./login-form.scss";
import { WithErrorsProps } from "@hoc/withErrors";

type LoginFormProps = {
  theme: string;
  onLogin: (x: boolean) => void;
} & WithErrorsProps; // <------- I don't like this
// concrete component should not know anything about props of HOC

const LoginForm = (props: LoginFormProps) => {
  const validEmail = "aaa@gmail.com";
  const validPassword = "Abc_123";

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = () => {
    if (emailRef.current?.value !== validEmail) {
      props.setError("Login Error", "Email does not exists"); // <------- I don't like this, concrete component shouldn't know about props of HOC
      props.onLogin(false);
      return;
    }

    if (passwordRef.current?.value !== validPassword) {
      props.setError(
        "Login Error",
        "Password is not correct for specific Email"
      ); // <------- I don't like this, concrete component shouldn't know about props of HOC
      props.onLogin(false);
      return;
    }

    props.setEmptyErrors(); // <------- I don't like this, concrete component shouldn't know about props of HOC
    props.onLogin(true);
  };

  return (
    <>
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
