import React, { useState } from "react";
import "./banner.css";
import Button from "@material-ui/core/Button";
import Search from "../Search/Search";
const Banner = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="search_date">
        <Button onClick={() => setShowSearch(!showSearch)}>
          {showSearch ? "Hide calender " : " Search dates"}
        </Button>{" "}
        {showSearch && <Search />}
      </div>
      <div className="banner_info">
        <h2>Hello user</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
          expedita neque quia? Vero, dolorum soluta.
        </p>
        <Button variant="contained" color="primary">
          Explore nearby{" "}
        </Button>
      </div>
    </div>
  );
};

export default Banner;
