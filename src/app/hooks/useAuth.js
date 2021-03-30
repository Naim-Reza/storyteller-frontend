import { useContext } from "react";

import { loginRequest, logoutRequest, registerUser } from "../api/auth";
import { getUserData } from "../api/users";
import AuthContext from "../auth/authcontext";
import {
  removeToken,
  removeUser,
  storeToken,
  storeUser,
} from "../auth/authstorage";

export default function useAuth() {
  const { user, newPost, setUser, setNewPost } = useContext(AuthContext);

  const login = async (values) => {
    const response = await loginRequest(values);
    if (!response.ok) return response;

    await storeToken(response.data.token);

    const userDetails = await getUserData();
    if (!userDetails.ok) return userDetails;

    setUser(userDetails.data);
    storeUser(userDetails.data);
    return userDetails;
  };

  const register = async (values) => {
    const response = await registerUser(values);
    if (!response.ok) return response;

    await storeToken(response.data.token);

    const userDetails = await getUserData();
    if (!userDetails.ok) return userDetails;

    setUser(userDetails.data);
    storeUser(userDetails.data);
    return userDetails;
  };

  const logout = async () => {
    const response = await logoutRequest();
    if (!response.ok) return response;

    setUser(null);
    removeToken();
    removeUser();
    return response;
  };

  return { user, newPost, setNewPost, login, logout, register };
}
