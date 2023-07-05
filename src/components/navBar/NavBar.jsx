import { Link } from "react-router-dom";
import "./NavBar.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBar() {
  const { user, dispatch } = useContext(AuthContext);

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
                  src="https://images.pexels.com/photos/17402544/pexels-photo-17402544.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
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
