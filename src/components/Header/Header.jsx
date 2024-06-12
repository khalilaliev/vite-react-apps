import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink>
          <NavLink className="navbar-item" to="/todo">
            Todo
          </NavLink>
          <NavLink className="navbar-item" to="/contacts">
            Contacts
          </NavLink>
          <NavLink className="navbar-item" to="/voting">
            Voting
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Header;
