import "./Write.scss";
import NavBar from "../../components/navBar/NavBar";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handlePublish = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;

      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("http://localhost:5000/api/shares", newPost);
      navigate("/");
    } catch (error) {}
  };

  return (
    <>
      <NavBar />
      <div className="write">
        <div className="writeContainer">
          {file && <img src={URL.createObjectURL(file)} alt="" />}
          <form onSubmit={handlePublish} encType="multipart/form-data">
            <input
              type="file"
              name="image"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <input
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              rows="5"
              placeholder="Share anything..."
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
            <button type="submit">Publish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Write;
