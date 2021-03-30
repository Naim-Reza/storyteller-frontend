import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getStory } from "../api/stories";
import Preloader from "../components/Preloader";
import ServerErrorAlert from "../components/ServerErrorAlert";
import StoryCard from "../components/StoryCard";

export default function ViewStoryScreen() {
  const [story, setStory] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const { id } = useParams();

  const closeErrorAlert = () => setError(undefined);

  const handleGetStory = async () => {
    setIsLoading(true);
    const response = await getStory(id);
    if (!response.ok) {
      setError(response.data);
      return setIsLoading(false);
    }
    setStory(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleGetStory();
  }, []);

  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12 col-md-8 offset-md-2">
          {isLoading && <Preloader />}
          {error && (
            <ServerErrorAlert
              isOpen={error ? true : false}
              toggle={closeErrorAlert}
              errorMsg={error}
            />
          )}
          {story && <StoryCard data={story} />}
        </div>
      </div>
    </div>
  );
}
