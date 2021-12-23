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
import useErrors from "@hooks/useErrors";
import { useRef } from "react";
import "./login-form.scss";

type LoginFormProps = {
  onLogin: (x: boolean) => void;
};

const LoginForm = (props: LoginFormProps) => {
  const validEmail = "aaa@gmail.com";
  const validPassword = "Abc_123";

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { html: errorsHtml, setError, setEmptyErrors } = useErrors();

  const onFormSubmit = () => {
    if (emailRef.current?.value !== validEmail) {
      setError("Login Error", "Email does not exists");
      props.onLogin(false);
      return;
    }

    if (passwordRef.current?.value !== validPassword) {
      setError("Login Error", "Password is not correct for specific Email");
      props.onLogin(false);
      return;
    }

    setEmptyErrors();
    props.onLogin(true);
  };

  return (
    <>
      {errorsHtml}
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
