import { React } from "react";
import { useLoggedIn } from "./loginHooks";

export default function LoginButton() {
  const { isLoggedIn, login, logout } = useLoggedIn();
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
