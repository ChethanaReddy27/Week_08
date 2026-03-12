import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <img 
      width="80px"
      height="80px"
      src="https://th.bing.com/th/id/OIP.MdSB05CE87J6a-oqdU_fJgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3"
        alt="Logo"
        className="h-8"
      />    

      <div className="space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-100 bg-blue-500 p-2":""}>Home</NavLink>
        <NavLink to="/products"className={({ isActive }) => isActive ? "text-blue-100 bg-blue-500 p-2":""}>Products</NavLink>
        <NavLink to="/contact"className={({ isActive }) => isActive ? "text-blue-100 bg-blue-500 p-2":""}>Contact</NavLink>
      </div>
    </nav>
  );
}

export default Header;