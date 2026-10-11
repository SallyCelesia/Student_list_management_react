import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Students Incharge Mgmt 
      </Link>

      <div className="nav-links">
        <Link to="/">All Students</Link>
        <Link to="/incharge/sports">Sports Day</Link>
        <Link to="/incharge/cultural">Cultural Day</Link>
        <Link to="/incharge/science">Science Expo</Link>
      </div>
    </nav>
  );
}

export default Navbar;