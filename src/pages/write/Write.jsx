import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Write.scss";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../../components/navBar/NavBar";

function Write() {
  return (
    <>
      <NavBar />
      <div className="write">
        <div className="writeContainer">
          <img
            src="https://images.pexels.com/photos/17168353/pexels-photo-17168353/free-photo-of-balloons-flying-in-cappadocia-in-morning.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
          />
          <form action="">
            <input type="file" />
            <input type="text" placeholder="Title" />
            <textarea rows="5" placeholder="Share anything..."></textarea>
            <button>Publish</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Write;
