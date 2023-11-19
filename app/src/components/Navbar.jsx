import React from "react";
import { Link } from "react-router-dom";
import { userContext } from "../UserContext";
import '../style.css'

export default function Navbar() {
  const { userInfo, setUserInfo } = React.useContext(userContext);

  React.useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      setUserInfo(JSON.parse(user));
    }
  }, []);

  function signout() {
    sessionStorage.clear();
    setUserInfo({
      username: "",
      email: "",
      token: "",
    });
  }

  return (
    <Link to="/">
      <nav className="navbar">
        <img className="logo" src="/assets/penguin.png" alt="Logo" />
        <ul>
          {(!userInfo || (userInfo && !userInfo.username)) && (
            <li>
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            </li>
          )}
          {userInfo && userInfo.username && (
            <li>
              <Link className="navbar-item" to="/records">
                {`Hi, ${userInfo.username}`}
              </Link>
              <button onClick={signout}>Log Out</button>
              
            </li>
          )}
        </ul>
      </nav>
    </Link>
  );
}
