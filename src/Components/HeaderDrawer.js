import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FiberNewRoundedIcon from "@material-ui/icons/FiberNewRounded";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
// import { connect } from "react-redux";

import { NavLink } from "react-router-dom";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import {connect} from 'react-redux'

import './Header.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});
const HeaderDrawer = ({isSignedIn, isRole}) => {
  const classes = useStyles();
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => () => {
    setState(open);
  };

  const AdminOptions = () =>{
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <NavLink
            className="menu_link"
            aria-current="page"
            exact
            to="/register"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Register Person" />
            </ListItem>
          </NavLink>
          <NavLink
            className="menu_link"   
            aria-current="page"
            exact
            to="/admin/home"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <ViewStreamIcon />
              </ListItemIcon>
              <ListItemText primary="Admin Home" />
            </ListItem>
          </NavLink>
          <NavLink
            className="menu_link"   
            aria-current="page"
            exact
            to="/logout"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <ViewStreamIcon />
              </ListItemIcon>
              <ListItemText primary="Admin Logout" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </div>
    );
  }

  const EmployeeOptions = () =>{
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <NavLink
            className="menu_link"
            aria-current="page"
            exact
            to="/user/home"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <FiberNewRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Employee Home" />
            </ListItem>
          </NavLink>
          <NavLink
            className="menu_link"   
            aria-current="page"
            exact
            to="/logout"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <ViewStreamIcon />
              </ListItemIcon>
              <ListItemText primary="Employee Logout" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </div>
    );
  }

  const DefaultOptions = () =>{
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <NavLink
            className="menu_link"
            aria-current="page"
            exact
            to="/user/login"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <HomeRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="User Login" />
            </ListItem>
          </NavLink>
          <NavLink
            className="menu_link"
            aria-current="page"
            exact
            to="/admin/login"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <FiberNewRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Admin Login" />
            </ListItem>
          </NavLink>
          <NavLink
            className="menu_link"   
            aria-current="page"
            exact
            to="/"
            activeClassName="activeLink"
          >
            <ListItem button>
              <ListItemIcon>
                <ViewStreamIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
          </NavLink>
        </List>
        <Divider />
      </div>
    );
  }

  const list = () => {
    if(isSignedIn=== true && isRole === "Admin"){
      return <AdminOptions />
    }
    else if(isSignedIn===true && isRole ==="Employee"){
      return <EmployeeOptions />
    }
    else{
      return <DefaultOptions />
    }
  };

  return (
    <div style={{ width: "50px" }}>
      <>
        <IconButton
          edge="start"
          className="header-menu"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
          {list("left")}
        </Drawer>
      </>
    </div>
  );
};

const mapStateToProps = (state) =>{
  return{
    isSignedIn: state.auth.isSignedIn,
    isRole: state.auth.userType,
  }
}

export default connect(mapStateToProps, null)(HeaderDrawer);
