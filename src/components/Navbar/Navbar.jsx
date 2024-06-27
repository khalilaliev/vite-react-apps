import { Link, Route, Routes, useLocation } from "react-router-dom";
import Contacts from "../../pages/Contacts";
import Home from "../../pages/Home";
import Todo from "../../pages/Todo";
import Voting from "../../pages/Voting";
import { FaReact } from "react-icons/fa6";

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
        <div className="navbar-start flex">
          <Link className="navbar-item flex items-center gap-2" to="/">
            <FaReact className="text-3xl" />{" "}
            <span className="text-xl font-bold">KA</span>{" "}
            <span className=" font-bold uppercase">Portfolio</span>
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
