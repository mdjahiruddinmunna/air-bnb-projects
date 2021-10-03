import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "./Table";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function DashBoard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#f1536e" }}
          >
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#3da5f4" }}
          >
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#00c689" }}
          >
            xs=3
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: "#fda006" }}
          >
            xs=3
          </Paper>
        </Grid>
      </Grid>
      <Table />
    </div>
  );
}
