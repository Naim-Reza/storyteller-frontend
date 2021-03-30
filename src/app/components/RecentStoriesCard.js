import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import moment from "moment";
import { useHistory } from "react-router";

import { getUserStories } from "../api/stories";
import useAuth from "../hooks/useAuth";
import Preloader from "./Preloader";
import ServerErrorAlert from "./ServerErrorAlert";
import urls from "../config/urls";

export default function RecentStoriesCard() {
  const [stories, setStories] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { newPost } = useAuth();
  const history = useHistory();

  const closeErrorAlert = () => setError(undefined);

  const handleUserStories = async () => {
    setIsLoading(true);
    const response = await getUserStories();
    if (!response.ok) {
      setError(response.data);
      return setIsLoading(false);
    }

    setStories(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUserStories();
  }, [newPost]);

  return (
    <Card className="shadow">
      <CardHeader>
        <h4 className="mb-0">Recent Stories</h4>
      </CardHeader>
      <CardBody>
        {isLoading && <Preloader />}
        {error && (
          <ServerErrorAlert
            isOpen={error ? true : false}
            toggle={closeErrorAlert}
            errorMsg={error}
          />
        )}
        {stories && stories.length === 0 ? (
          <small className="text-muted">
            You haven't posted any story yet.
          </small>
        ) : null}
        {stories && (
          <ListGroup>
            {stories.map((story) => (
              <ListGroupItem
                style={{ cursor: "pointer" }}
                onClick={() => history.push(`${urls.stroies}/${story.id}`)}
                key={story.id}
              >
                <ListGroupItemHeading>{story.title}</ListGroupItemHeading>
                <ListGroupItemText className="text-muted" tag="small">
                  Posted {moment(story.created_at).fromNow()}
                </ListGroupItemText>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </CardBody>
    </Card>
  );
}
