import React from "react";
import { Alert } from "reactstrap";

export default function ServerErrorAlert({
  isOpen,
  toggle = function () {},
  errorMsg,
}) {
  if (errorMsg.error && typeof errorMsg.error === "object") {
    let properties = Object.getOwnPropertyNames(errorMsg.error);
    return (
      <div className="w-100">
        <Alert isOpen={isOpen} toggle={toggle} color="danger">
          <ul>
            {properties.map((property) => (
              <li key={property}>{errorMsg.error[property]}</li>
            ))}
          </ul>
        </Alert>
      </div>
    );
  }
  return (
    <div className="w-100">
      {errorMsg.error && typeof errorMsg.error !== "object" ? (
        <Alert isOpen={isOpen} toggle={toggle} color="danger">
          {errorMsg.error}
        </Alert>
      ) : (
        <Alert isOpen={isOpen} toggle={toggle} color="danger">
          Somthing Went Wrong. Please Try again!!
        </Alert>
      )}
    </div>
  );
}
