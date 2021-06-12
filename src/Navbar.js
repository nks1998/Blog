import "./navbar.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const handler = () => {
    const menu = document.querySelector(".menu_bar");
    menu.classList.toggle("hidden");
  };
  return (
    <div>
      <div className="head">
        <div className="rotate">The</div> Siren
        <FaBars className="icon" onClick={handler} />
      </div>
      <div className="menu_bar hidden">
        <div className="card1">
          <Link to="/">Login</Link>
        </div>
        <div className="menu_item">
          <Link to="/Bollyhood">Bollyhood </Link>
        </div>
        <div className="menu_item">
          <Link to="/Technology">Technology</Link>
        </div>
        <div className="menu_item">
          <Link to="/Hollyhood">Hollyhood</Link>
        </div>
        <div className="menu_item">
          <Link to="/Fitness">Fitness</Link>
        </div>
        <div className="menu_item">
          <Link to="/Food">Food</Link>
        </div>
        <hr className="under-nav-hr"/>
      </div>
      <div className="container">
        <div className="card">
          <Link to="/">Login</Link>
        </div>
        <div className="card">
          <Link to="/Bollyhood">Bollyhood </Link>
        </div>
        <div className="card">
          <Link to="/Technology">Technology</Link>
        </div>
        <div className="card">
          <Link to="/Hollyhood">Hollyhood</Link>
        </div>
        <div className="card">
          <Link to="/Fitness">Fitness</Link>
        </div>
        <div className="card">
          <Link to="/Food">Food</Link>
        </div>
      </div>
      <hr className="under-nav-hr"/>
    </div>
  );
};
export default Navbar;
