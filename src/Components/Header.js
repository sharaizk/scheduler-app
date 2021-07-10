import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import HeaderDrawer from './HeaderDrawer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    userSelect:'none'
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor: '#432344', height:'6.5vh'}}>
        <Toolbar>
            <HeaderDrawer />
          <Typography variant="h6" className={classes.title}>
            Task Scheduler
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header