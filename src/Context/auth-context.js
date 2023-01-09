import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLogedin: false,
  location: "",
  setLocation:(location)=>{},
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token")
  const [token,setToken] = useState(initialToken)
  const [location, setLocation] = useState("");
  
  const isLogedin = !!token;
  const locationHandler = (location)=>{
    setLocation(location)
  }
  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem("token",token)
  };
  const logoutHandler = () => {
    setToken("");
    localStorage.removeItem("token")
  };

  const contextValue = {
    token,
    isLogedin,
    location,
    setLocation:locationHandler,
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
