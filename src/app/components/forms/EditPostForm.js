import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from "reactstrap";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(100).label("Title"),
  description: Yup.string().required().min(10).max(1000).label("Story"),
});

export default function EditPostForm() {
  return (
    <div>
      <Formik
        initialValues={{ title: "", description: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          errors,
          touched,
          values,
          isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Card className="shadow">
            <CardHeader>
              <h4 className="text-uppercase">edit</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <FormGroup>
                  <Label for="title">Title:</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Story Title"
                    value={values.title}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    invalid={touched.title && errors.title ? true : false}
                  />
                  {touched.title && errors.title && (
                    <small className="text-danger">{errors.title}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Label for="description">Story Lines:</Label>
                  <Input
                    id="description"
                    name="description"
                    type="textarea"
                    placeholder="Write your story here..."
                    style={{ minHeight: "176px" }}
                    value={values.description}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    invalid={
                      touched.description && errors.description ? true : false
                    }
                  />
                  {touched.description && errors.description && (
                    <small className="text-danger">{errors.description}</small>
                  )}
                </FormGroup>
                <FormGroup>
                  <Button
                    color="success"
                    className="text-uppercase"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? <Spinner size="sm" /> : "save"}
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        )}
      </Formik>
    </div>
  );
}
