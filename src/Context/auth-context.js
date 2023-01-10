import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isSignedup: false,
  isLogedin: false,
  location: "",
  setLocation: (location) => {},
  signup: () => {},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [location, setLocation] = useState("");
  const [isSignedup, setSignup] = useState(false);
  
  const isLogedin = !!token;
  const locationHandler = (location) => {
    setLocation(location);
  };
  const signupHandler = (boolean) => {
    setSignup(boolean);
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken("");
    setSignup(false)
    localStorage.removeItem("token");
  };

  const contextValue = {
    token,
    isLogedin,
    isSignedup,
    location,
    setLocation: locationHandler,
    signup: signupHandler,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
