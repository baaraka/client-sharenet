import React from "react";
import NavBar from "../../components/navBar/NavBar";

function Login() {
  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <h1>Login</h1>

          <form action="">
            <div className="form">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="eg Barack" />
            </div>
            <div className="form">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="eg 1234ABC" />
            </div>
            <button>Login</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
