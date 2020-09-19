import React from 'react'
// import {Nav,Navbar,NavDropdown} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { deepOrange, blue } from '@material-ui/core/colors';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.getContrastText(blue[500]),
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    margin: theme.spacing(1),
  },
}));

const SidebarHeader = () =>  {
 
 
    
      const classes = useStyles();
        return (
          
            <div>
                <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton edge="end" className={classes.menuButton} id="test" color="inherit" aria-label="menu">
                        <Avatar  className={classes.orange}/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    
                    </Toolbar>
                </AppBar>
                </div>
            </div>
        )
    }


export default SidebarHeader