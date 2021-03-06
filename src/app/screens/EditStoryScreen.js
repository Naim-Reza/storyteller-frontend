import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getStory } from "../api/stories";
import EditPostForm from "../components/forms/EditPostForm";
import Preloader from "../components/Preloader";
import ServerErrorAlert from "../components/ServerErrorAlert";

export default function EditStoryScreen() {
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
        <div className="col-12">
          <h4 className="mb-0 text-muted text-uppercase">Edit story</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-12 col-md-8">
          {isLoading && <Preloader />}
          {error && (
            <ServerErrorAlert
              isOpen={error ? true : false}
              toggle={closeErrorAlert}
              errorMsg={error}
            />
          )}
          {story && <EditPostForm data={story} />}
        </div>
      </div>
    </div>
  );
}
