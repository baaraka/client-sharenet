import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SinglePost.scss";
import {
  faHeart,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function SinglePost() {
  const [item, setItem] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatedMode, setUpdatedMode] = useState(false);

  const { user } = useContext(AuthContext);

  const pf = "http://localhost:5000/images/";

  const location = useLocation();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/shares/${id}`);
      setItem(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/shares/${id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdatedMode(false);
    } catch (error) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostContainer">
        {item && (
          <div className="singlePostContainerList">
            <img src={pf + item.image} alt="" />
            <div className="singleItem">
              <span>author: {item.username}</span>
              {item.username === user?.username && (
                <div className="singlePostItemList">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={() => setUpdatedMode(true)}
                  />
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              )}
            </div>
            {updatedMode ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <h1>{item.title}</h1>
            )}
            {updatedMode ? (
              <textarea
                rows="5"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            ) : (
              <p>{item.desc}</p>
            )}
            {updatedMode && <button onClick={handleUpdate}>Update Post</button>}
            <div className="likeCount">
              <FontAwesomeIcon icon={faHeart} />
              <span>{item.like}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
