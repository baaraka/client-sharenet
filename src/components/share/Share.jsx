import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./Share.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Share() {
  const [item, setItem] = useState([]);

  const pf = "http://localhost:5000/images/";

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:5000/api/shares");
      setItem(res.data);
    };
    fetchData();
  }, []);
  return (
    <div className="share">
      <div className="shareContainer">
        {item.map((item) => (
          <div className="shareContainerList" key={item._id}>
            {item.image && <img src={pf + item.image} alt="" />}
            <h1>{item.title}</h1>
            <Link to={`/shares/${item._id}`} key={item._id} className="link">
              <p>{item.desc}</p>
            </Link>
            <div className="likeCount">
              <FontAwesomeIcon icon={faHeart} />
              <span>{item.like}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Share;
