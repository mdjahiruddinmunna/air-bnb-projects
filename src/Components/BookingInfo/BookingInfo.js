import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import { UserContext } from "../../App";

const useStyles = makeStyles({
  root: {
    maxWidth: "90vw",
  },
  cardDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function BookingInfo() {
  const classes = useStyles();
  const { user, setUser } = useContext(UserContext);
  const [bookingInfo, setBookingInfo] = useState([]);
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
    if (token) {
      fetch("http://localhost:4000/get-booking-info?email=" + user.email, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setBookingInfo(data));
    }
  }, [token, user.email]);
  console.log({ token });
  console.log("dipaa", bookingInfo);
  return (
    <div className={classes.cardDiv}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="300"
            image={bookingInfo[0]?.photo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Dear {bookingInfo[0]?.name} , you have {bookingInfo.length}{" "}
              bookings.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Thanks for staying with us. we hope to provide best value for
              money.
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Your booking
            </Typography>
            <Grid item xs={12} md={12}>
              <div className={classes.demo}>
                <List>
                  {token &&
                    bookingInfo.map((element) => (
                      <ListItem>
                        <ListItemText
                          primary={`From : ${new Date(
                            element.checkIn
                          ).toDateString("dd/MM/yyyy")} To :  ${new Date(
                            element.checkOut
                          ).toDateString("dd/MM/yyyy")} `}
                          secondary="Secondary text"
                        />
                      </ListItem>
                    ))}
                </List>
              </div>
            </Grid>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
