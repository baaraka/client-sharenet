import NavBar from "../../components/navBar/NavBar";
import "./Settings.scss";

function Settings() {
  return (
    <>
      <NavBar />
      <div className="settings">
        <div className="settingsContainer">
          <div className="containerUpdate">
            <h1>Update Your Account</h1>
            <h2>Delete Your Account</h2>
          </div>
          <img
            src="https://images.pexels.com/photos/15577335/pexels-photo-15577335/free-photo-of-landscape-people-woman-legs.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <form action="">
            <input type="file" />
            <input type="text" placeholder="username" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Settings;
