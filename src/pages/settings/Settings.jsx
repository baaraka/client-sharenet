import { useContext, useState } from "react";
import NavBar from "../../components/navBar/NavBar";
import "./Settings.scss";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Settings() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState("");

  const navigate = useNavigate();

  const pf = "http://localhost:5000/images/";

  const { user, dispatch } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "UPDATE_START" });

    const updatedUser = {
      userId: user._id,
      username,
      email,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {}
    }

    try {
      const res = await axios.put(
        `http://localhost:5000/api/users/${user._id}`,
        updatedUser
      );

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: "UPDATE_FAILURE", payload: error.message });
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${user._id}`, {
        data: { userId: user._id },
      });
      dispatch({ type: "DELETE" });
      navigate("/register");
    } catch (error) {}
  };

  return (
    <>
      <NavBar />
      <div className="settings">
        <div className="settingsContainer">
          <div className="containerUpdate">
            <h1>Update Your Account</h1>
            <h2 onClick={handleDelete}>Delete Your Account</h2>
          </div>
          <img
            src={file ? URL.createObjectURL(file) : pf + user.profilePic}
            alt=""
          />
          <form action="" onSubmit={handleSubmit}>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <input
              type="text"
              placeholder={user.username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder={user.email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" placeholder="password" />
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Settings;
