import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Spinner,
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router";
import urls from "../../config/urls";
import useAuth from "../../hooks/useAuth";
import ServerErrorAlert from "../ServerErrorAlert";

const validationSchema = Yup.object().shape({
  firstname: Yup.string().min(2).max(15).required().label("First Name"),
  lastname: Yup.string().min(2).max(15).required().label("Last Name"),
  email: Yup.string()
    .email("Invalid Email Address!!")
    .required()
    .label("Email Address"),
  password: Yup.string().min(8).max(50).required().label("Password"),
});

export default function RegistrationForm() {
  const [error, setError] = useState(undefined);
  const { register } = useAuth();
  const history = useHistory();

  const handleSignUp = async (values) => {
    const response = await register(values);
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
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
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
              <h4>Sign Up</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="firstname">First Name:</Label>
                      <Input
                        id="firstname"
                        name="firstname"
                        placeholder="First Name"
                        value={values.firstname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={
                          touched.firstname && errors.firstname ? true : false
                        }
                      />
                      {touched.firstname && errors.firstname && (
                        <small className="text-danger">
                          {errors.firstname}
                        </small>
                      )}
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <Label for="lastname">Last Name:</Label>
                      <Input
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        value={values.lastname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        invalid={
                          touched.lastname && errors.lastname ? true : false
                        }
                      />
                      {touched.lastname && errors.lastname && (
                        <small className="text-danger">{errors.lastname}</small>
                      )}
                    </FormGroup>
                  </Col>
                </Row>
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
                    {isSubmitting ? <Spinner size="sm" /> : "Sign Up"}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
            <CardFooter>
              Already have an account?{" "}
              <span
                className="text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => history.push(urls.login)}
              >
                Login here.
              </span>
            </CardFooter>
          </Card>
        )}
      </Formik>
    </div>
  );
}
