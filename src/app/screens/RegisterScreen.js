import React from "react";
import RegistrationForm from "../components/forms/RegistrationForm";

export default function RegisterScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12 col-md-6 offset-md-3">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
}
