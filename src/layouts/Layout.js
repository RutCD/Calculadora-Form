import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/Cal">calculator</Link>
          </li>
          <li>
            <Link to="/Form">Form</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
