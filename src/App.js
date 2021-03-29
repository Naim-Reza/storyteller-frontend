import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./app/routes/AuthRoutes";

export default function App() {
  return (
    <Router>
      <AuthRoutes />
    </Router>
  );
}
