import NavBar from "../../components/navBar/NavBar";
import "./Register.scss";

function Register() {
  return (
    <>
      <NavBar />
      <div className="register">
        <div className="registerContainer">
          <h1>Register</h1>
          <img
            src="https://images.pexels.com/photos/15577335/pexels-photo-15577335/free-photo-of-landscape-people-woman-legs.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <form action="">
            <div className="form pp">
              <label htmlFor="">Profile Picture</label>
              <input type="file" />
            </div>
            <div className="form">
              <label htmlFor="">Username</label>
              <input type="text" placeholder="eg Barack" />
            </div>
            <div className="form">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="eg barakaganai01@gmail.com" />
            </div>
            <div className="form">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="eg 1234ABC" />
            </div>
            <button>Register</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
