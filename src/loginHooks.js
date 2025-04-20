import { React, useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const LoggedInContext = createContext("");

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

export const useLoggedIn = () => useContext(LoggedInContext);
