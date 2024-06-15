import { Link, Route, Routes, useLocation } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Home from "../../pages/Home";
import Todo from "../../pages/Todo";
import Voting from "../../pages/Voting";

const NAV_ITEMS = [
  {
    path: "/",
    title: "Home",
    element: <Home />,
  },
  {
    path: "/todo",
    title: "Todo",
    element: <Todo />,
  },
  {
    path: "/contacts",
    title: "Contacts",
    element: <Contacts />,
  },
  {
    path: "/voting",
    title: "Voting",
    element: <Voting />,
  },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      <div className="navbar">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
        </div>
        <div className="navbar-center">
          {NAV_ITEMS.map((item) => {
            return (
              <Link
                key={item.path}
                className={`navbar-item ${
                  location.pathname === item.path ? "navbar-active" : ""
                }`}
                to={item.path}
                end
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
      <Routes>
        {NAV_ITEMS.map((item) => {
          return (
            <Route key={item.path} path={item.path} element={item.element} />
          );
        })}
      </Routes>
    </>
  );
};

export default Navbar;
