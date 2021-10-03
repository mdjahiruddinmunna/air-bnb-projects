import React from "react";
import "./card.css";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
const Card = ({ room }) => {
  console.log(room);

  const { description, images, price, name, capacity, slug } = room.fields;

  console.log(images);
  return (
    <div className="card">
      <img src={images[0].fields.file.url} alt="" />
      <div className="card_info">
        <h4> {name}</h4>
        <p>
          <PeopleIcon fontSize="small" /> Capacity : {capacity}
        </p>

        <p>price per day : ${price}</p>
        <Link to={`/product-details/${slug}`}>
          {" "}
          <button variant="contained"> read more</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
