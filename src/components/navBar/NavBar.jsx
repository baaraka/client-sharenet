import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
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
          <Link to="/login" className="link">
            <button>Login</button>
          </Link>
          <Link to="/register" className="link">
            <button>Register</button>
          </Link>

          {/* <span>Happy</span>
          <img
            src="https://images.pexels.com/photos/17327920/pexels-photo-17327920/free-photo-of-woman-posing-with-arms-raised-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
