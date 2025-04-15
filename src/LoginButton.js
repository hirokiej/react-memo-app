import { React, useContext } from "react";
import { LoggedInContext } from "./LoggedInContext";

export default function LoginButton() {
  const { isLoggedIn, login, logout } = useContext(LoggedInContext);
  return (
    <div className="login-button">
      {isLoggedIn ? (
        <button onClick={logout}>logout</button>
      ) : (
        <button onClick={login}>login</button>
      )}
    </div>
  );
}
