import React, { useState } from "react";
import { useHistory } from "react-router";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  Spinner,
} from "reactstrap";
import moment from "moment";
import { deleteStory } from "../api/stories";
import ServerErrorAlert from "./ServerErrorAlert";
import useAuth from "../hooks/useAuth";
import urls from "../config/urls";

export default function StoryCard({ data }) {
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const { setNewPost } = useAuth();

  const closeErrorAlert = () => setError(undefined);
  const closeSuccessAlert = () => {
    setSuccess(undefined);
    return history.goBack();
  };

  const handleDelete = async () => {
    setIsLoading(true);
    const response = await deleteStory(data.id);
    if (!response.ok) {
      setError(response.data);
      return setIsLoading(false);
    }
    setSuccess(true);
    setIsLoading(false);
    setNewPost(data.id);
  };
  return (
    <>
      {error && (
        <ServerErrorAlert
          isOpen={error ? true : false}
          toggle={closeErrorAlert}
          errorMsg={error}
        />
      )}
      {success && (
        <Alert isOpen={success} toggle={closeSuccessAlert}>
          Story Deleted Successfully.
        </Alert>
      )}
      <Card className="shadow">
        <CardHeader>
          <h5 className="mb-0">{data.title}</h5>
          <small className="text-muted">
            Posted: {moment(data.created_at).format("Do MMMM, YYYY")}{" "}
          </small>
        </CardHeader>
        <CardBody>
          <CardText tag="p" className="text-justify">
            {data.description}
          </CardText>
        </CardBody>
        <CardFooter>
          <Button
            color="primary"
            className="text-uppercase mr-2"
            outline
            onClick={() => history.push(`${urls.stroies}/${data.id}/edit`)}
          >
            Edit
          </Button>
          <Button
            color="danger"
            className="text-uppercase"
            outline
            onClick={handleDelete}
            disabled={isLoading}
          >
            {isLoading ? <Spinner size="sm" /> : "delete"}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
