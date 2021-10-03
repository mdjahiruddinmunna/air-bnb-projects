import React, { useContext } from "react";
import logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar } from "@material-ui/core";
import "./header.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { logOut } from "../Authentication/firebaseFunctionality";
const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const handleLogOut = () => {
    logOut();
    setUser({});
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" className="header_icon" />
        <div style={{ margin: "0px 8px" }}>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/admin"> Admin Dashboard</Link>
        </div>

        <div>
          <div className="search_box">
            <input type="text" />
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="header_right">
        {user.name || user.email ? (
          <div onClick={handleLogOut}>logOut</div>
        ) : (
          <Link to="/login">
            <p>Become a host.</p>
          </Link>
        )}

        <LanguageIcon />
        <ExpandMoreIcon />
        <div className="user_avatar">
          <Link to="/bookings">
            <Avatar src={user?.photo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
