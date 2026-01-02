import { Outlet,Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to ={'/'}>Home</Link>
        </li>
        <li>
          <Link to ={'/add'}> Add Product</Link>
        </li>
        <li>
          <Link to ={'/edit'}> Edit Product</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Layout;
