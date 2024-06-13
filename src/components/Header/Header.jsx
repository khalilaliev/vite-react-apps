import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink
            className={`navbar-item ${
              location.pathname === "/home" ? "navbar-active" : ""
            }`}
            to="/home"
            end
          >
            Home
          </NavLink>
          <NavLink
            className={`navbar-item ${
              location.pathname === "/todo" ? "navbar-active" : ""
            }`}
            to="/todo"
          >
            Todo
          </NavLink>
          <NavLink
            className={`navbar-item ${
              location.pathname === "/contacts" ? "navbar-active" : ""
            }`}
            to="/contacts"
          >
            Contacts
          </NavLink>
          <NavLink
            className={`navbar-item ${
              location.pathname === "/voting" ? "navbar-active" : ""
            }`}
            to="/voting"
          >
            Voting
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
