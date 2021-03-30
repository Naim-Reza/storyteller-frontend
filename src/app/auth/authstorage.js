const tokenKey = "_storyteller_auth_token";
const userKey = "_storyteller_user";

const getToken = () => localStorage.getItem(tokenKey);
const getUser = () => JSON.parse(localStorage.getItem(userKey));

const storeToken = (token) => localStorage.setItem(tokenKey, token);
const storeUser = (user) => localStorage.setItem(userKey, JSON.stringify(user));

const removeToken = () => localStorage.removeItem(tokenKey);
const removeUser = () => localStorage.removeItem(userKey);

export { getToken, getUser, storeToken, storeUser, removeToken, removeUser };
