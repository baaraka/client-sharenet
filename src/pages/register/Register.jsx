import { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Register.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { loading, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    dispatch({ type: "REGISTER_START" });

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        credentials
      );
      dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
      navigate("/login");
    } catch (error) {
      dispatch({ type: "REGISTER_FAILURE", payload: error.message });
    }
  };
  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <h1>Register</h1>
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
              <label htmlFor="">Email</label>
              <input
                type="email"
                id="email"
                placeholder="eg barakaganai01@gmail.com"
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
            <button disabled={loading} onClick={handleRegister}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
