import React, { useContext, useState } from "react";
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
import { useHistory, useLocation } from "react-router";
import { googleSignIn, userToken } from "./firebaseFunctionality";
import { UserContext } from "../../App";
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
  const { user, setUser } = useContext(UserContext);
  console.log("ssss", user);

  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  function handleClick() {
    history.push("/login");
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
  console.log(googleSignIn);
  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      userToken();
      setUser(res);
      history.replace(from);
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.divStyle}>
        <FormControl fullWidth className={classes.margin} variant="outlined">
          <ThemeProvider theme={theme}>
            <TextField
              className={(classes.margin, classes.textField)}
              label="Your Name"
              variant="outlined"
              id="mui-theme-provider-outlined-input1"
            />
          </ThemeProvider>
        </FormControl>

        <FormControl fullWidth className={classes.margin} variant="outlined">
          <ThemeProvider theme={theme}>
            <TextField
              className={(classes.margin, classes.textField)}
              label="Your e-mail"
              variant="outlined"
              id="mui-theme-provider-outlined-input2"
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
          Sign in with email and password
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-google"
              viewBox="0 0 16 16"
            >
              <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
            </svg>
          }
          onClick={handleGoogleSignIn}
        >
          Sign-in with Google
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<GitHubIcon />}
        >
          Sign-in with github
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<FacebookIcon />}
        >
          Sign-in with facebook
        </Button>
        <div className="K-1uj Z7p_S">
          <div className="s311c"></div>
          <div className="_0tv-g">Already have an account?</div>
          <div className="s311c"></div>
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={handleClick}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
