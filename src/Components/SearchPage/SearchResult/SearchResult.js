import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./searchResult.css";
import StarIcon from "@material-ui/icons/Star";
import { useLocation } from "react-router-dom";
export default function SearchResult(props) {
  //const {breakfast, description, capacity, name,images,price,size}=
  console.log("sagar", props);
  return (
    <div className="search_result">
      <img
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
        alt=""
      />
      <div className="heart_icon">
        {" "}
        <FavoriteBorderIcon />
      </div>
      <div className="search_result_info">
        <div className="search_result_info_top">
          <p>
            location : Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>

          <h3>title : Lorem ipsum dolor sit amet.</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam
            labore dolor iste nihil saepe incidunt.lorem5 Lorem ipsum dolor sit
            amet.{" "}
          </p>
          <div className="search_result_info_bottom">
            <div>
              Rating{" "}
              {[...new Array(4)].map((star, i) => (
                <StarIcon fontSize="small" key={"star-" + i} />
              ))}
            </div>
            price : 240$
          </div>
        </div>
      </div>
    </div>
  );
}
