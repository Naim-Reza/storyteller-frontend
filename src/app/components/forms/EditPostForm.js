import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Alert,
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
import useAuth from "../../hooks/useAuth";
import { updateStory } from "../../api/stories";
import ServerErrorAlert from "../ServerErrorAlert";
import { useParams } from "react-router";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(3).max(100).label("Title"),
  description: Yup.string().required().min(10).max(1000).label("Story"),
});

export default function EditPostForm({ data }) {
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const { setNewPost } = useAuth();
  const { id } = useParams();

  const closeErrorAlert = () => setError(undefined);
  const closeSuccessAlert = () => setSuccess(false);

  const handleUpdate = async (values) => {
    const response = await updateStory(values, id);
    if (!response.ok) return setError(response.data);
    setSuccess(true);
    setNewPost(response.data);
  };

  return (
    <div>
      {error && (
        <ServerErrorAlert
          isOpen={error ? true : false}
          toggle={closeErrorAlert}
          errorMsg={error}
        />
      )}
      {success && (
        <Alert isOpen={success} toggle={closeSuccessAlert}>
          Story Updated Successfully.
        </Alert>
      )}
      <Formik
        initialValues={{ title: data.title, description: data.description }}
        validationSchema={validationSchema}
        onSubmit={handleUpdate}
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
