import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthRoutes from "./app/routes/AuthRoutes";
import UserRoutes from "./app/routes/UserRoutes";

export default function App() {
  return (
    <Router>
      <UserRoutes />
    </Router>
  );
}
