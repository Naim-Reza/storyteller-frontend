import React from "react";
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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email Address!!")
    .required()
    .label("Email Address"),
  password: Yup.string().min(8).max(50).required().label("Password"),
});

export default function LoginForm() {
  const history = useHistory();
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
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
