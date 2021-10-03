import "date-fns";
import React, { useContext, useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useHistory } from "react-router";
import { UserContext } from "../../App";
export default function BookRoom() {
  const { user, setUser } = useContext(UserContext);

  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = useState({
    checkIn: new Date(),
    checkOut: new Date(new Date().getTime() + 1 * 86400000),
  });

  const handleCheckInDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkIn = date;
    setSelectedDate(newDate);
  };

  const handleCheckOutDate = (date) => {
    const newDate = { ...selectedDate };
    newDate.checkOut = date;
    setSelectedDate(newDate);
  };
  const handleBooking = () => {
    console.log("booking button is clicked");
    const bookingDetails = { ...user, ...selectedDate };
    // fetch("http://localhost:4000/booking",{

    // });

    console.log(bookingDetails);
    fetch("http://localhost:4000/booking", {
      method: "post",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(bookingDetails),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
  };
  console.log(selectedDate);
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate.checkIn}
          onChange={handleCheckInDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id=""
          //"date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate.checkOut}
          onChange={handleCheckOutDate}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "10px" }}
          onClick={handleBooking}
        >
          <AddShoppingCartIcon /> Book now
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={handleClick}
          style={{ margin: "10px" }}
        >
          Back to home
        </Button>
      </div>
    </MuiPickersUtilsProvider>
  );
}
