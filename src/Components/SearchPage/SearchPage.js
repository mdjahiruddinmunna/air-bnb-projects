import { Button } from "@material-ui/core";
import React from "react";
import "./searchPage.css";
import SearchResult from "./SearchResult/SearchResult";
//new code
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
//end
export default function SearchPage() {
  let query = useQuery();
  console.log(
    "ddddddddddd",
    query.get("difficulty"),
    "ssssss",
    query.get("include")
  );
  return (
    <div className="search_page">
      <div className="search_page-info">
        <p> 5 days , from 1 fab to 6 </p>
        <h4>Stay nearby</h4>
        <Button variant="outline">Cancellation flexibility</Button>
        <Button variant="outline">Type of place </Button>
        <Button variant="outline">Price </Button>
        <Button variant="outline">Rooms and beds </Button>
        <Button variant="outline"> More filters</Button>
      </div>
      <Router>
        <SearchResult
          name={query.get("difficulty")}
          days={query.get("include")}
        />
      </Router>
    </div>
  );
}
