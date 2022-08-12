
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import "./css/theme.css";
// import './css/maincons.css';
import "./css/bootstrap.css";
import { logout1 } from "../../Firebase";
function Header() {
  let dispath = useDispatch();
  
  const logout = () => {
    logout1();
    dispath({
      type: "LOGOUT_USER",
      payload: null,
    });
    alert("Successfully Logout");
    history.push("/");
  };
  let history = useHistory();
  const { user } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    let intended = history.location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) {
        history.push("/");
      }
    }
  }, [user, history]);
  return (
    <>
      <header data-testid="header">
        <nav className="navbar navbar-expand-lg navbar-light color navbar-float">
          <div className="container">
            <a href="/" className="navbar-brand">
              ITSA<span className="text-primary"> VIT</span>
            </a>
            <button
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarContent">
              <ul className="navbar-nav ml-lg-4 pt-3 pt-lg-0">
                <li className="nav-item active">
                  <a href="/" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/aboutus" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/events" className="nav-link">
                    Events
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contactus" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="ml-auto">
                <>
                  {!user ? (
                    <a href="/login" className="btn btn-outline rounded-pill">
                      Login
                    </a>
                  ) : (
                    <>
                     <li class="nav-item active dropdown list-unstyled">
                  <li class="nav-link dropdown-toggle btn btn-outline rounded-pill" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {user.email && user.email.split('@')[0]}
                  </li>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    
                    {user.role === 'admin' && <div><Link to="/admin/additems" className="dropdown-item">Dashboard</Link></div>}
                    <div><li class="dropdown-item" onClick={logout}>Logout</li></div>
                  </div>
                </li>
                     </>
                    
                  )}
                </>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Header;
