import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from '../image/logo.jpg'



function Navs() {
  return (
      <>
          <nav className='navbar-dark nav bg-secondary '>
                  <li className="nav-item">
                      <Link to='/' className='nav-link text-light'><img className=" rounded-circle" width={100} src={logo} alt="" /></Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/' className='nav-link text-light mt-3'>Home</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/contact' className='nav-link text-light mt-3 margin'>Contact</Link>
                  </li>
                  <li className="nav-item">
                      <Link to='/login' className='nav-link text-primary mt-3'><button className="btn btn-parimary mb-3">Login</button></Link>
                  </li>
          </nav>

          <div className="container-fluid w-75 mx-auto">
              <Outlet />
          </div>
      </>
  );
}

export default Navs;