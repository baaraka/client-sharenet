import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SinglePost.scss";
import {
  faHeart,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostContainer">
        <div className="singlePostContainerList">
          <img
            src="https://images.pexels.com/photos/17392069/pexels-photo-17392069/free-photo-of-fujifilm-camara-pexels.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <div className="singleItem">
            <span>author: Barack</span>
            <div className="singlePostItemList">
              <FontAwesomeIcon icon={faPenToSquare} />
              <FontAwesomeIcon icon={faTrash} />
            </div>
          </div>
          <h1>Flying by balloons</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            beatae asperiores. Optio, ipsa saepe rem at autem similique, atque,
            doloribus fugit nesciunt voluptatem alias. Nostrum adipisci modi
            magnam eaque deserunt? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Corrupti quas maiores iste quo veniam error a hic
            enim eveniet voluptates molestiae minus atque harum amet, magni ex.
            Et, nobis eum? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Eum sint iusto deserunt, veritatis labore assumenda,
            consectetur dicta laudantium libero, perferendis recusandae nobis
            qui. Accusantium deserunt at provident minus harum sapiente.
          </p>
          <div className="likeCount">
            <FontAwesomeIcon icon={faHeart} />
            <span>5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
