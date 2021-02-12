import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: "#fff",
    margin: "0 1rem 0 1rem",
  },
  appBar: {
    alignItems: "center",
  },
}));

export default function PageHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Link>
          <Link to="/paper1" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Session1
            </Typography>
          </Link>
          <Link to="/paper2" style={{ textDecoration: "none" }}>
            <Typography variant="h6" className={classes.title}>
              Session2
            </Typography>
          </Link>

          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
