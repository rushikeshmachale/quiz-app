import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link data-aos="fade-left" to="/" className="title">
        Quiz App
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Header;
