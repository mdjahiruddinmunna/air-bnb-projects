import React, { useState } from "react";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Button } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./signin.css";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "35ch",
  },
  divStyle: {
    width: "fit-content",
    margin: "auto",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Signin() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let history = useHistory();

  function handleClick() {
    history.push("/signup");
  }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <div className={classes.root}>
      <div className={classes.divStyle}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <ThemeProvider theme={theme}>
            <TextField
              className={(classes.margin, classes.textField)}
              label="Your e-mail"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
          </ThemeProvider>
        </FormControl>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
          Log in
        </Button>
        <div className="K-1uj Z7p_S">
          <div className="s311c"></div>
          <div className="_0tv-g">or</div>
          <div className="s311c"></div>
        </div>

        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
