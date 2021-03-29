import React from "react";
import EditPostForm from "../components/forms/EditPostForm";

export default function EditStoryScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12">
          <h4 className="mb-0 text-muted text-uppercase">Edit story</h4>
        </div>
      </div>
      <div className="row py-4">
        <div className="col-12 col-md-8">
          <EditPostForm />
        </div>
      </div>
    </div>
  );
}
