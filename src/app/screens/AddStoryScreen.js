import React from "react";
import AddNewPostForm from "../components/forms/AddNewPostForm";

export default function AddStoryScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12">
          <h4 className="mb-0 text-muted text-uppercase">Add new story</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-12 col-md-8">
          <AddNewPostForm />
        </div>
      </div>
    </div>
  );
}
