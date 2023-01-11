import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Around the world!
          <span role="img" aria-label="book">
            🌍
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ cursor: "pointer" }}>
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Home
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  About
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link"
                style={{ cursor: "pointer" }}
              >
                <span data-bs-target="#navbarNav" data-bs-toggle="collapse">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;