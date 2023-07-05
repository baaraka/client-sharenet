import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const { user, dispatch } = useContext(AuthContext);

  const pf = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navBar">
      <div className="navBarContainer">
        <div className="left">
          <Link to="/" className="link">
            <h1>ShareNet</h1>
          </Link>
        </div>
        <div className="middle">
          <Link to="/" className="link">
            <span>Home</span>
          </Link>
          <Link to="/write" className="link">
            <span>Wright</span>
          </Link>
        </div>
        <div className="right">
          {user ? (
            <>
              <Link to="/settings" className="link">
                <span style={{ cursor: "pointer" }}>{user.username}</span>
              </Link>
              <Link to="/settings" className="link">
                <img
                  src={pf + user.profilePic}
                  alt=""
                  style={{ cursor: "pointer" }}
                />
              </Link>
              <span className="logoutUser" onClick={handleLogout}>
                Logout
              </span>
            </>
          ) : (
            <>
              <Link to="/login" className="link">
                <button>Login</button>
              </Link>
              <Link to="/register" className="link">
                <button>Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
