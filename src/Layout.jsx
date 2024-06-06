import { NavLink, Outlet } from "react-router-dom";
import Opinary from "./components/Opinary";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
          <NavLink 
              to="/" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Demo 1
            </NavLink>
          </li>
          <li>
          <NavLink 
              to="/demotwo" 
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Demo 2
              </NavLink>
          </li>
        </ul>
      </nav>
      <Opinary/>
      <Outlet />
    </>
  )
};

export default Layout;