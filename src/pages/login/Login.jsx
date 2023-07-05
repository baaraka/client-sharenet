import React, { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const { loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error.response.data.message });
    }
  };
  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <h1>Login</h1>

          <form action="">
            <div className="form">
              <label htmlFor="">Username</label>
              <input
                type="text"
                id="username"
                placeholder="eg Barack"
                onChange={handleChange}
              />
            </div>
            <div className="form">
              <label htmlFor="">Password</label>
              <input
                type="password"
                id="password"
                placeholder="eg 1234ABC"
                onChange={handleChange}
              />
            </div>
            <button disabled={loading} onClick={handleLogin}>
              Login
            </button>
            {error && <span>{error}</span>}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
