import React from "react";
import LoginForm from "../components/forms/LoginForm";

export default function LoginScreen() {
  return (
    <div className="container">
      <div className="row py-4">
        <div className="col-12 col-md-6 offset-md-3">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
