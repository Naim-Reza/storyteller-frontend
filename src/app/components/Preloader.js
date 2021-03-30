import React from "react";
import { Spinner } from "reactstrap";

export default function Preloader() {
  return (
    <div className="d-flex justify-content-center align-items-center p-2">
      <Spinner color="primary" />
    </div>
  );
}
