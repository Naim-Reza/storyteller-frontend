import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import urls from "../../config/urls";
import useAuth from "../../hooks/useAuth";
import ServerErrorAlert from "../ServerErrorAlert";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address!!")
    .required()
    .label("Email Address"),
  password: Yup.string().min(8).max(50).required().label("Password"),
});

export default function LoginForm() {
  const [error, setError] = useState(undefined);
  const { login } = useAuth();
  const history = useHistory();

  const handleLogin = async (values) => {
    const response = await login(values);
    if (!response.ok) return setError(response.data);
    history.push(urls.dashboard);
  };
  const closeErrorAlert = () => setError(undefined);

  return (
    <div>
      {error && (
        <ServerErrorAlert
          isOpen={error ? true : false}
          toggle={closeErrorAlert}
          errorMsg={error}
        />
      )}
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleLogin}
      >
        {({
          touched,
          errors,
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Card className="shadow">
            <CardHeader>
              <h4>Login</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="email">Email Address:</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.email && errors.email ? true : false}
                  />
                  {touched.email && errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password:</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Choose a Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    invalid={touched.password && errors.password ? true : false}
                  />

                  {touched.password && errors.password ? (
                    <small className="text-danger">{errors.password}</small>
                  ) : (
                    <small className="text-muted">
                      Password must be at least 8 characters
                    </small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Button
                    onClick={handleSubmit}
                    block
                    color="primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Spinner size="sm" /> : "Login"}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              Don't have an account?{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => history.push(urls.register)}
              >
                Sign Up here.
              </span>
            </CardFooter>
          </Card>
        )}
      </Formik>
    </div>
  );
}
