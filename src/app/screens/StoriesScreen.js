import React from "react";
import StoryList from "../components/StoryList";

export default function StoriesScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12">
          <h4 className="mb-0 text-muted text-uppercase">Stories</h4>
        </div>
      </div>
      <div className="row">
        <StoryList />
      </div>
    </div>
  );
}
