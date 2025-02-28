import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../App";

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <Link className="navbar-brand" to="/">
        DAD JOKES
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/favorites">
            Favorites
          </Link>
          {isLoggedIn.isLoggedIn ? (
            <button
              className="nav-link"
              to="/"
              onClick={() => {
                setIsLoggedIn({ isLoggedIn: false })
                localStorage.removeItem('token')
              }}
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>
              <Link className="nav-link" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
