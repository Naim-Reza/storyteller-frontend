import React, { useEffect, useState } from "react";
import { Col } from "reactstrap";
import { getUserStories } from "../api/stories";
import useAuth from "../hooks/useAuth";
import Preloader from "./Preloader";
import ServerErrorAlert from "./ServerErrorAlert";
import StoryCard from "./StoryCard";

export default function StoryList() {
  const [stories, setStories] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { newPost } = useAuth();

  const closeErrorAlert = () => setError(undefined);

  const handleGetStories = async () => {
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
    handleGetStories();
  }, [newPost]);

  return (
    <>
      {isLoading && <Preloader />}
      {error && (
        <ServerErrorAlert
          isOpen={error ? true : false}
          toggle={closeErrorAlert}
          errorMsg={error}
        />
      )}
      {stories && stories.length === 0 && (
        <small className="text-muted">
          No stories to show here. Please post stories.
        </small>
      )}
      {stories &&
        stories.map((story) => (
          <Col md={6} className="my-2" key={story.id}>
            <StoryCard data={story} />
          </Col>
        ))}
    </>
  );
}
