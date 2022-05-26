import "./navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="d-flex justify-content-around align-items-center item-list">
        <Link to="/test">
          <li>Take Test</li>
        </Link>
        <li>View Score</li>
        <li>update profile</li>
      </ul>
    </div>
  );
}
export default Navbar;
