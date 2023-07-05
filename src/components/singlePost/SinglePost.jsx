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

  const { user } = useContext(AuthContext);

  const pf = "http://localhost:5000/images/";

  const location = useLocation();

  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/shares/${id}`);
      setItem(res.data);
    };
    getPost();
  }, [id]);

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
                  <FontAwesomeIcon icon={faPenToSquare} />
                  <FontAwesomeIcon icon={faTrash} />
                </div>
              )}
            </div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
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
