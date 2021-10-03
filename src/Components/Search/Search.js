import React, { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./search.css";
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSelect = (ranges) => {
    console.log(ranges);

    console.log(ranges.selection.endDate, typeof ranges.selection.endDate);

    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <div className="date_picker">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>Number of guest</h2>
      <div>
        <div className="guest_count_input">
          {" "}
          <input min={0} defaultValue={2} type="number" />
          <PeopleIcon />
        </div>
        <Link to="/home/search?difficulty=Min-3&include=any:best%2Creviews%2Ctop%2Creview">
          Modus Create
        </Link>
        <button>Search Availability </button>
      </div>
    </div>
  );
};

export default Search;
