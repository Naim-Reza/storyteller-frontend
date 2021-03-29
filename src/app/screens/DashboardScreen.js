import React from "react";
import AddNewPostForm from "../components/forms/AddNewPostForm";
import RecentStoriesCard from "../components/RecentStoriesCard";

export default function DashboardScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12">
          <h4 className="mb-0 text-muted">Dashboard</h4>
          <small className="text-muted">
            Hi, Naim. Let's tell the world something new.
          </small>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-8">
          <AddNewPostForm />
        </div>
        <div className="col-12 col-md-4">
          <RecentStoriesCard />
        </div>
      </div>
    </div>
  );
}
