import { createContext } from "react";

const LoggedInContext = createContext("");

export const LoggedInProvider = ({ children }) => {
  return <LoggedInContext>{children}</LoggedInContext>;
};
