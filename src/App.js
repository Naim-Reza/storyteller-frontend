import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContext from "./app/auth/authcontext";
import { getToken, getUser } from "./app/auth/authstorage";
import Preloader from "./app/components/Preloader";
import AuthRoutes from "./app/routes/AuthRoutes";
import UserRoutes from "./app/routes/UserRoutes";

export default function App() {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const retriveUser = async () => {
    const token = await getToken();
    if (!token) return;
    setUser(getUser);
  };

  useEffect(() => {
    setIsLoading(true);
    retriveUser();
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {isLoading && <Preloader />}
      <Router>{user ? <UserRoutes /> : <AuthRoutes />}</Router>
    </AuthContext.Provider>
  );
}
