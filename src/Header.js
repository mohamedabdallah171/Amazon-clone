import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <nav className="header">
      <Link to="/">
        <img src="\images\amazon_PNG211.png" alt="logo" className="logo" />
      </Link>
      <div className="midnav">
        <input type="text" className="search" />
        <FaSearch className="search_icon" />
      </div>

      <div className="secnav">
        <Link to="/" className="nav_link">
          <div className="nav_option">
            <span className="nav_option_link1"> Hello mo</span>
            <span className="nav_option_link2"> Sign in</span>
          </div>
        </Link>

        <Link to="/" className="nav_link">
          <div className="nav_option">
            <span className="nav_option_link1"> Returns </span>
            <span className="nav_option_link2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="nav_link">
          <div className="nav_option">
            <span className="nav_option_link1"> Your </span>
            <span className="nav_option_link2"> Prime</span>
          </div>
        </Link>
        
        <Link to="/checkout" className="nav_link">
        
          <div className="nav_option_basket ">
          <FaShoppingCart className="basket"/>
           <span className="nav_option_link2 basket_count"> {basket?.length} </span>
          </div>

        </Link>


      </div>
    </nav>
  );
}

export default Header;
