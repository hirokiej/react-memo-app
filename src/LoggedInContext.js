import { React, useState, createContext } from "react";
import PropTypes from "prop-types";

export const LoggedInContext = createContext("");

export const LoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <LoggedInContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoggedInContext.Provider>
  );
};

LoggedInProvider.propTypes = {
  children: PropTypes.node,
};
