import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import data from "../../data";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./productDetails.css";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import ImageGrid from "./ImageGrid";
import BookRoom from "../Booking/BookRoom";
const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    margin: "auto",
  },
  media: {
    height: 300,
  },
});

export default function ProductDetails() {
  const classes = useStyles();
  const [roomDetails, setRoomDetails] = useState({});

  let { slug } = useParams();

  useEffect(() => {
    const room = data.find((room) => room.fields.slug === slug);

    setRoomDetails(room);
  }, [slug]);

  console.log(roomDetails);

  //const { images, name, description } = roomDetails.fields;
  // console.log(images?.[0].fields.file.url);
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`${roomDetails.fields?.images[0].fields.file.url}`}
          title=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {roomDetails.fields?.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {roomDetails.fields?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className="room_extra_info">
        <div>
          {" "}
          <p> Price : $ {roomDetails.fields?.price}</p>
          <p> Size : {roomDetails.fields?.size} </p>
          <p> Capacity: {roomDetails.fields?.capacity}</p>
        </div>
        <div>
          EXTRAS :{" "}
          <ul>
            {roomDetails.fields?.extras.map((extra) => (
              <li key={extra}>-{extra}</li>
            ))}{" "}
          </ul>
        </div>
      </div>

      {roomDetails.fields?.images && (
        <ImageGrid images={roomDetails.fields?.images} />
      )}

      <BookRoom />
    </Card>
  );
}
